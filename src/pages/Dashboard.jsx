import React from "react";
import Navbar from "../components/Navbar";
import DashboardHeader from "../components/DashboardHeader";
import StatsCards from "../components/StatsCards";
import TaskFilters from "../components/TaskFilters";
import RecentTasks from "../components/RecentTasks";
import "../styles/dashboard.css";
import CalendarCard from "../components/CalendarCard";
import UpcomingTasks from "../components/UpcomingTasks";

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
                        
                        <CalendarCard />

                       <UpcomingTasks />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;