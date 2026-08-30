import react from "react";
import Navbar from "../components/Navbar";
import DashboardHeader from "../components/DashboardHeader";
import StatsCards from "../components/StatsCards";
import TaskFilters from "../components/TaskFilters";
import RecentTasks from "../components/RecentTasks";
import "../styles/dashboard.css";
import CalendarCard from "../components/CalendarCard";
import UpcomingTasks from "../components/UpcomingTasks";
import {useDispatch, useSelector} from "react-redux";
import {addTask, selectAllTasks} from "../store/tasksSlice"

function Dashboard() {

    const tasks = useSelector(selectAllTasks)

    const dispatch = useDispatch()



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