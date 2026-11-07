import { useRef, useState, useEffect } from "react";
import Matter from "matter-js";

const DEFAULT_PILL_COLOR = "#4ade80";

const TEXT_DARK = "#052e16";

const luminance = (hex) => {
  const value = hex.replace("#", "");
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(value.substring(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const getContrastText = (hex) => {
  const bg = luminance(hex);
  const contrast = (l) => (Math.max(bg, l) + 0.05) / (Math.min(bg, l) + 0.05);
  return contrast(luminance(TEXT_DARK)) >= contrast(1) ? TEXT_DARK : "#ffffff";
};

const FallingText = ({
  text = "",
  highlightWords = [],
  items,
  trigger = "auto",
  backgroundColor = "transparent",
  wireframes = false,
  gravity = 1,
  mouseConstraintStiffness = 0.2,
  fontSize = "1rem",
  hint,
}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const canvasContainerRef = useRef(null);

  const [effectStarted, setEffectStarted] = useState(false);

  const wordItems =
    items ??
    text
      .split(" ")
      .filter(Boolean)
      .map((word) => ({
        label: word,
        highlight: highlightWords.some((hw) => word.startsWith(hw)),
      }));

  useEffect(() => {
    if (trigger === "auto") {
      setEffectStarted(true);
      return;
    }
    if (trigger === "scroll" && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setEffectStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.8 },
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [trigger]);

  useEffect(() => {
    if (!effectStarted) return;

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } =
      Matter;

    const canvasContainer = canvasContainerRef.current;
    const containerRect = containerRef.current.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;

    if (width <= 0 || height <= 0) return;

    const engine = Engine.create();
    engine.world.gravity.y = gravity;

    const render = Render.create({
      element: canvasContainer,
      engine,
      options: {
        width,
        height,
        background: backgroundColor,
        wireframes,
      },
    });

    const boundaryOptions = {
      isStatic: true,
      render: { fillStyle: "transparent" },
    };
    const floor = Bodies.rectangle(
      width / 2,
      height + 25,
      width,
      50,
      boundaryOptions,
    );
    const leftWall = Bodies.rectangle(
      -25,
      height / 2,
      50,
      height,
      boundaryOptions,
    );
    const rightWall = Bodies.rectangle(
      width + 25,
      height / 2,
      50,
      height,
      boundaryOptions,
    );
    const ceiling = Bodies.rectangle(
      width / 2,
      -25,
      width,
      50,
      boundaryOptions,
    );

    const wordSpans = textRef.current.children;
    const wordBodies = [...wordSpans].map((elem) => {
      const rect = elem.getBoundingClientRect();

      const x = rect.left - containerRect.left + rect.width / 2;
      const y = rect.top - containerRect.top + rect.height / 2;

      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        render: { fillStyle: "transparent" },
        restitution: 0.8,
        frictionAir: 0.01,
        friction: 0.2,
      });
      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 5,
        y: 0,
      });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);

      return { elem, body };
    });

    wordBodies.forEach(({ elem, body }) => {
      elem.style.position = "absolute";
      elem.style.left = `${body.position.x - body.bounds.max.x + body.bounds.min.x / 2}px`;
      elem.style.top = `${body.position.y - body.bounds.max.y + body.bounds.min.y / 2}px`;
      elem.style.transform = "none";
    });

    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: { visible: false },
      },
    });
    render.mouse = mouse;

    World.add(engine.world, [
      floor,
      leftWall,
      rightWall,
      ceiling,
      mouseConstraint,
      ...wordBodies.map((wb) => wb.body),
    ]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    let animationFrameId = null;
    const updateLoop = () => {
      wordBodies.forEach(({ body, elem }) => {
        const { x, y } = body.position;
        elem.style.left = `${x}px`;
        elem.style.top = `${y}px`;
        elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
      });
      animationFrameId = requestAnimationFrame(updateLoop);
    };
    updateLoop();

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (animationFrameId === null) {
          Runner.run(runner, engine);
          updateLoop();
        }
      } else if (animationFrameId !== null) {
        Runner.stop(runner);
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    });
    visibilityObserver.observe(containerRef.current);

    return () => {
      visibilityObserver.disconnect();
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas && canvasContainer) {
        canvasContainer.removeChild(render.canvas);
      }
      World.clear(engine.world);
      Engine.clear(engine);
    };
  }, [
    effectStarted,
    gravity,
    wireframes,
    backgroundColor,
    mouseConstraintStiffness,
  ]);

  const handleTrigger = () => {
    if (!effectStarted && (trigger === "click" || trigger === "hover")) {
      setEffectStarted(true);
    }
  };

  const isClickable = trigger === "click" && !effectStarted;

  return (
    <div
      ref={containerRef}
      className="relative z-[1] h-full w-full cursor-pointer overflow-hidden pt-8 text-center"
      onClick={trigger === "click" ? handleTrigger : undefined}
      onMouseEnter={trigger === "hover" ? handleTrigger : undefined}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
      aria-label={isClickable ? "Drop the tech stack" : undefined}
      onKeyDown={
        isClickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleTrigger();
              }
            }
          : undefined
      }
    >
      <ul className="sr-only">
        {wordItems.map((item, index) => (
          <li key={index}>{item.label}</li>
        ))}
      </ul>
      <div
        ref={textRef}
        aria-hidden="true"
        className="inline-block"
        style={{
          fontSize,
          lineHeight: 1.4,
        }}
      >
        {wordItems.map((item, index) => {
          const color = item.color ?? DEFAULT_PILL_COLOR;
          return (
            <div
              key={index}
              className="mx-1 inline-flex select-none items-center gap-1.5 rounded-full border px-3 py-1.5 align-middle md:gap-2 md:px-4 md:py-2"
              style={{
                borderColor: color,
                backgroundColor: color,
                color: getContrastText(color),
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>

      {hint && !effectStarted && (
        <p className="pointer-events-none absolute inset-x-0 bottom-4 font-mono text-sm font-semibold text-text-primary/60">
          {hint}
        </p>
      )}

      <div className="absolute left-0 top-0 z-0" ref={canvasContainerRef} />
    </div>
  );
};

export default FallingText;
