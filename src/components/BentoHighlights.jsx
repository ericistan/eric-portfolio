import MagicBento from "./MagicBento";

const BentoHighlights = ({ items }) => (
  <MagicBento
    items={items}
    textAutoHide={false}
    enableStars={false}
    enableSpotlight={false}
    enableBorderGlow={true}
    enableTilt={true}
    enableMagnetism={true}
    clickEffect={false}
    spotlightRadius={150}
    particleCount={10}
    glowColor="0, 0, 0"
  />
);

export default BentoHighlights;
