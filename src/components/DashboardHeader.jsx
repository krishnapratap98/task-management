import React from 'react'
import "../styles/dashboardHeader.css";

function DashboardHeader() {
    return (

        <div className="dashboard-header">

            <div>
                <h1>Good Morning, Krishna! 👋</h1>
                <p>Here's what's happening with your tasks today.</p>
            </div>

            <button className="add-task-btn">
                + Add New Task
            </button>

        </div>

    )
}

export default DashboardHeader