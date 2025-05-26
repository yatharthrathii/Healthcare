import "./AnatomySection.css";
import anatomyImage from "../../assets/AnatomyImage.png";
import { BsZoomIn } from "react-icons/bs";

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-image-wrapper">
        <BsZoomIn className="anatomy-icon" />
        <img src={anatomyImage} alt="Anatomy" className="anatomy-img" />
        <span className="anatomy-label heart">Healthy Heart</span>
        <span className="anatomy-label leg">Healthy Leg</span>
      </div>
    </div>
  );
};

export default AnatomySection;
