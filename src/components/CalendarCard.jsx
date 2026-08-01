import React from "react";
import "../styles/calendarCard.css"

function CalendarCard() {
    const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

    const dates = [
        "", "", "", 1, 2, 3, 4,
        5, 6, 7, 8, 9, 10, 11,
        12, 13, 14, 15, 16, 17, 18,
        19, 20, 21, 22, 23, 24, 25,
        26, 27, 28, 29, 30, 31
    ];

    return (
        <div className="calendar-card">

            <div className="calendar-header">
                <h3>October 2026</h3>
            </div>

            <div className="week-days">
                {
                    weekDays.map((day) => (
                        <span key={day}>{day}</span>
                    ))
                }
            </div>

            <div className="calendar-grid">
                {
                    dates.map((date, index) => (
                        <div
                            key={index}
                            className={date === 18 ? "active-date" : ""}
                        >
                            {date}
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default CalendarCard;