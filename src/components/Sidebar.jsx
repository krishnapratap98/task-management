import React from "react";
import "../styles/sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo">
                <h1>TaskFlow</h1>
            </div>
            <div className="sidebar-section">
                <p className="section-title">Main Menu</p>

                <ul>
                    <li className="active"> Dashboard</li>
                    <li> All Tasks</li>
                    <li> Important</li>
                    <li> Completed</li>
                    <li> Settings</li>
                </ul>
            </div>
            <div className="sidebar-section">
                <p className="section-title">TOOLS</p>

                <ul>
                    <li>calendar</li>
                    <li>Settings</li>
                </ul>
            </div>

            <div className="upgrade-card">

                <h3>Upgrade Pro</h3>
                <p>Unlock all premium features</p>
                <button>Upgrade</button>
                
            </div>
        </div>
    )
}
export default Sidebar;