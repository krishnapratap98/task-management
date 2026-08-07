import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo">
                <h1>TaskFlow</h1>
            </div>

            <div className="sidebar-section">
                <p className="section-title">MAIN MENU</p>

                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            Dashboard
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/all-tasks" className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            All Tasks
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/important" className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            Important
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/completed"  className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            Completed
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/settings" className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            Settings
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="sidebar-section">
                <p className="section-title">TOOLS</p>

                <ul>
                    <li>Calendar</li>
                </ul>
            </div>

            <div className="upgrade-card">
                <h3>Upgrade Pro</h3>
                <p>Unlock all premium features</p>
                <button>Upgrade</button>
            </div>
        </div>
    );
}

export default Sidebar;