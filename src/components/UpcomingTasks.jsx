import React from 'react'
import "../styles/upcomingTasks.css";

function UpcomingTasks() {

    const upcoming = [
        {
            id: 1,
            title: "Client Meeting",
            time: "10:00 AM"
        },
        {
            id: 2,
            title: "UI Review",
            time: "2:30 PM"
        },
        {
            id: 3,
            title: "Deploy Project",
            time: "6:00 PM"
        },
    ]
    return (
        <div className='upcoming-card'>
            <h2>Upcoming Tasks</h2>
            <div className='upcoming-list'>
                {
                    upcoming.map((task)=>(
                        <div className='upcoming-item' key={task.id}>
                            <div>
                                <h4>{task.title}</h4>
                                <p>{task.time}</p>
                            </div>
                            <button>view</button>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default UpcomingTasks;