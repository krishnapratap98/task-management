import { FaEdit, FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { selectAllTasks, toggleTask, deleteTask, updateTask } from "../store/tasksSlice";
import { useNavigate } from "react-router-dom";
import "../styles/recentTasks.css";

function RecentTasks() {

  const tasks = useSelector(selectAllTasks);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // console.log(tasks);

  

  return (
    <div className="task-section">
      <div className="section-header">
        <h2>Recent Tasks</h2>

        <button
          className="add-task-btn"
          onClick={() => {
            navigate("/add-task");
          }}
        >
          + Add Task
        </button>
      </div>

      {tasks.map((task) => (
        <div className="task-row" key={task.id}>

          <div className="task-left">

            <input type="checkbox"
              checked={task.completed || false}
              onChange={() => dispatch(toggleTask(task.id))}
            />

            <div className="task-details">
              <h3 className={task.completed ? "completed-task" : ""}>
                {task.title}</h3>

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
            <FaEdit onClick={() => navigate(`/edit-task/${task.id}`)} />
            <FaTrash onClick={()=> dispatch(deleteTask(task.id))} />
          </div>

        </div>
      ))}
    </div>
  );
}

export default RecentTasks;