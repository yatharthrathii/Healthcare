import "./UpcomingSchedule.css";

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h4 className="upcoming-title">The Upcoming Schedule</h4>

      <div className="day-schedule">
        <h5>On Thursday</h5>
        <div className="schedule-card light">
          <p>Health checkup complete 👨‍⚕️</p>
          <span>11:00 AM</span>
        </div>
        <div className="schedule-card light">
          <p>Ophthalmologist 👁️</p>
          <span>14:00 PM</span>
        </div>
      </div>
      
      <div className="day-schedule">
        <h5>On Saturday</h5>
        <div className="schedule-card dark">
          <p>Cardiologist ❤️</p>
          <span>12:00 AM</span>
        </div>
        <div className="schedule-card dark">
          <p>Neurologist 🧠</p>
          <span>16:00 PM</span>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
