import React from "react";
import Navbar from "../components/Navbar";
import DashboardHeader from "../components/DashboardHeader";
import StatsCards from "../components/StatsCards";
import TaskFilters from "../components/TaskFilters";
import RecentTasks from "../components/RecentTasks";
import "../styles/dashboard.css";

function Dashboard() {
    return (
        <div className="dashboard">
            <Navbar />

            <div className="dashboard-content">
                <DashboardHeader />
                
               <StatsCards />
               <TaskFilters />

                <div className="dashboard-body">

                   <RecentTasks />

                    <div className="right-panel">
                        <div className="calendar-card">
                            <h2>Calender</h2>
                        </div>

                        <div className="upcoming-card">
                            <h2>Upcoming task</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;