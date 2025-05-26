import AnatomySection from "./AnatomySection";
import ActivityFeed from "./ActivityFeed";
import CalendarView from "./CalendarView";
import HealthStatusCards from "./HealthStatusCards";
import UpcomingSchedule from "./UpcomingSchedule";
import "./DashboardOverview.css";

function DashboardOverview() {
  return (
    <div className="dashboard-grid dashboard-cardHover">
      <h1 className="dashboard-heading dashboard-cardHover">Dashboard</h1>
      <div className="dashboard-row">
        <div className="anatomy-and-health dashboard-cardHover">
          <AnatomySection className="anatomy-dashboard" />
          <HealthStatusCards />
        </div>
        <div className="calendar-view dashboard-cardHover">
          <CalendarView />
        </div>
      </div>
      <div className="dashboard-row">
        <div className="activity-feed dashboard-cardHover"><ActivityFeed /></div>
        <div className="upcoming-schedule dashboard-cardHover"><UpcomingSchedule /></div>
      </div>
    </div>
  );
}

export default DashboardOverview;
