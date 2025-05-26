import "./ActivityFeed.css";

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <h4 className="activity-title">Activity</h4>
      <p className="activity-subtext">3 appointments this week</p>
      <div className="activity-bars-wrapper">
        <div className="activity-day-bar">
          <div className="activity-bar">
            <div className="activity-bar-fill" ></div>
          </div>
          <span className="day-label">Mon</span>
        </div>
        <div className="activity-day-bar">
          <div className="activity-bar">
            <div className="activity-bar-fill" style={{ height: "40px" }}></div>
          </div>
          <span className="day-label">Tue</span>
        </div>
        <div className="activity-day-bar">
          <div className="activity-bar">
            <div className="activity-bar-fill active" ></div>
          </div>
          <span className="day-label">Wed</span>
        </div>
        <div className="activity-day-bar">
          <div className="activity-bar">
            <div className="activity-bar-fill" style={{ height: "70px" }}></div>
          </div>
          <span className="day-label">Thu</span>
        </div>
        <div className="activity-day-bar">
          <div className="activity-bar">
            <div className="activity-bar-fill" ></div>
          </div>
          <span className="day-label">Fri</span>
        </div>
        <div className="activity-day-bar">
          <div className="activity-bar">
            <div className="activity-bar-fill" style={{ height: "80px" }}></div>
          </div>
          <span className="day-label">Sat</span>
        </div>
        <div className="activity-day-bar">
          <div className="activity-bar">
            <div className="activity-bar-fill" ></div>
          </div>
          <span className="day-label">Sun</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
