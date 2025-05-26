import "./CalendarView.css";

const CalendarView = () => {
  return (
    <div className="calendar-view">
      <h3 className="calendar-title">October 2021</h3>

      <div className="calendar-weekdays">
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
        <div>Sun</div>
      </div>

      <div className="calendar-grid">
        <div className="calendar-box">
          <strong>25</strong>
          <p>10:00</p>
          <p>11:00</p>
          <p>12:00</p>
        </div>
        <div className="calendar-box">
          <strong>26</strong>
          <p>8:00</p>
          <p className="p-color">10:00</p>
          <p>12:00</p>
        </div>
        <div className="calendar-box">
          <strong>27</strong>
          <p>12:00</p>
          <p>...</p>
          <p>14:00</p>
        </div>
        <div className="calendar-box">
          <strong>28</strong>
          <p className="p-color">11:00</p>
          <p >...</p>
          <p className="p-color">14:00</p>
        </div>
        <div className="calendar-box">
          <strong>29</strong>
          <p>14:00</p>
          <p>16:00</p>
        </div>
        <div className="calendar-box">
          <strong>30</strong>
          <p className="p-color">12:00</p>
          <p>14:00</p>
          <p className="p-color">16:00</p>
        </div>
        <div className="calendar-box">
          <strong>31</strong>
          <p>09:00</p>
          <p>...</p>
          <p>16:00</p>
        </div>
      </div>

      <div className="calendar-appointments">
        <div className="calendar-card dentist-card">
          <h4>🦷 Dentist</h4>
          <p>10:00-11:00</p>
          <p>Dr. Maheshwari</p>
        </div>
        <div className="calendar-card physiotherapy-card">
          <h4>🧑‍⚕️ Physiotherapy Appointment</h4>
          <p>12:00 - 13:00</p>
          <p>Dr. Rathi</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;