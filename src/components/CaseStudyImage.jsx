import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const CaseStudyImage = ({ src, alt, className = "", spacing = true }) => (
  <div className={spacing ? "my-8! md:my-10!" : ""}>
    <Zoom>
      <img src={src} alt={alt} className={`h-auto w-full max-w-full! ${className}`} />
    </Zoom>
  </div>
);

export default CaseStudyImage;
