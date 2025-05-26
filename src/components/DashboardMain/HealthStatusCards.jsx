import "./HealthStatusCards.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth, faLungs, faBone } from '@fortawesome/free-solid-svg-icons';

const HealthStatusCards = () => {
  return (
    <div className="health-status-cards">
      <div className="health-card">
        <div className="health-card-top">
          <FontAwesomeIcon className="health-icon" icon={faLungs} />
          <span className="health-label">Lungs</span>
        </div>
        <div className="health-card-bottom">
          <div className="health-date">Date: 26 Okt 2021</div>
          <div className="health-progress-bar">
            <div className="health-progress" style={{ width: "20%", backgroundColor: "#ef5d5d" }}></div>
          </div>
        </div>
      </div>

      <div className="health-card">
        <div className="health-card-top">
          <FontAwesomeIcon className="health-icon" icon={faTooth} />
          <span className="health-label">Teeth</span>
        </div>
        <div className="health-card-bottom">
          <div className="health-date">Date: 26 Okt 2021</div>
          <div className="health-progress-bar">
            <div className="health-progress" style={{ width: "80%", backgroundColor: "#4cd964" }}></div>
          </div>
        </div>
      </div>

      <div className="health-card">
        <div className="health-card-top">
          <FontAwesomeIcon className="health-icon" icon={faBone} />
          <span className="health-label">Bone</span>
        </div>
        <div className="health-card-bottom">
          <div className="health-date">Date: 26 Okt 2021</div>
          <div className="health-progress-bar">
            <div className="health-progress" style={{ width: "30%", backgroundColor: "#f57f17" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthStatusCards;
