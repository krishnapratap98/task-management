import React from 'react'
import "../styles/TaskFilters.css"

function TaskFilters() {
    return (

        <div className="task-filters">

            <div className="filter-tabs">
                <button className="active-tab">All Tasks</button>
                <button>Pending</button>
                <button>Completed</button>
                <button>Priority</button>
            </div>

            <div className="filter-actions">
                <button>Filter</button>
                <button>Sort</button>
            </div>

        </div>

    )
}

export default TaskFilters