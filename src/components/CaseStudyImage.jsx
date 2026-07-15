import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const CaseStudyImage = ({ src, alt, className = "" }) => (
  <Zoom>
    <img src={src} alt={alt} className={`h-auto w-full max-w-full! ${className}`} />
  </Zoom>
);

export default CaseStudyImage;
