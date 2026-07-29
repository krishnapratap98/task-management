import React from 'react'
import { FaTasks, FaCheckCircle, FaClock, FaFlag } from "react-icons/fa";
import "../styles/statsCards.css"


function StatsCards() {

    const stats = [
        {
            title: "Total Tasks",
            value: 24,
            icon: <FaTasks />,
            color: "#6C63FF",
        },
        {
            title: "Completed",
            value: 16,
            icon: <FaCheckCircle />,
            color: "#22C55E",
        },
        {
            title: "Pending",
            value: 8,
            icon: <FaClock />,
            color: "#F59E0B",
        },
        {
            title: "Priority",
            value: 5,
            icon: <FaFlag />,
            color: "#EF4444",
        },
    ]
    return (
        <div className="stats-container">
            {stats.map((item) => (
                <div className="stat-card" key={item.title}>
                    <div
                        className="stat-icon"
                        style={{ background: item.color }}
                    >
                        {item.icon}
                    </div>


                    <div className="stat-info">
                        <h4>{item.title}</h4>
                        <h2>{item.value}</h2>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default StatsCards