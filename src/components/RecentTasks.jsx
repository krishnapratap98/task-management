import { FaEdit, FaTrash } from "react-icons/fa";
import "../styles/recentTasks.css";

function RecentTasks() {
  const tasks = [
    {
      id: 1,
      title: "Dashboard UI Design",
      category: "Design",
      priority: "High",
      due: "Today",
    },
    {
      id: 2,
      title: "Build React Components",
      category: "Development",
      priority: "Medium",
      due: "Tomorrow",
    },
    {
      id: 3,
      title: "Fix Responsive Layout",
      category: "Frontend",
      priority: "Low",
      due: "Friday",
    },
  ];

  return (
    <div className="task-section">
      <div className="section-header">
        <h2>Recent Tasks</h2>
        <button className="add-task-btn">+ Add Task</button>
      </div>

      {tasks.map((task) => (
        <div className="task-row" key={task.id}>

          <div className="task-left">

            <input type="checkbox" />

            <div className="task-details">
              <h3>{task.title}</h3>

              <div className="task-meta">
                <span>{task.category}</span>
                <span className={task.priority.toLowerCase()}>
                  {task.priority}
                </span>
                <span>{task.due}</span>
              </div>

            </div>

          </div>

          <div className="task-actions">
            <FaEdit />
            <FaTrash />
          </div>

        </div>
      ))}
    </div>
  );
}

export default RecentTasks;