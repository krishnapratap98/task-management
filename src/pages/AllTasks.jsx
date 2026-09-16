import { useSelector, useDispatch } from "react-redux";
import PageLayout from "../components/PageLayout";
import { selectAllTasks, toggleTask,deleteTask } from "../store/tasksSlice";
import { useNavigate } from "react-router-dom";

function AllTasks() {

  const dispatch = useDispatch();

  const tasks = useSelector(selectAllTasks);

  const navigate = useNavigate();

  return (
    
    <PageLayout
      title="All Tasks"
      subtitle="Manage all your tasks from one place."
    >
      {
        tasks.map((task) => (
          <div key={task.id}>
            <input type="checkbox" 
            checked={task.completed || false} 
            onChange={() => dispatch(toggleTask(task.id))} />

            <h3 className={task.completed ? "completed-task" : ""}>
              {task.title}
            </h3>
            <p>{task.category}</p>
            <p>{task.priority}</p>
            <p>{task.due}</p>
            <button onClick={()=>navigate(`/edit-task/${task.id}`)}> Edit</button>&nbsp;
            <button onClick={()=>dispatch(deleteTask(task.id))}>Delete</button>
          </div>
        ))
      }
    </PageLayout>
  );
}

export default AllTasks;