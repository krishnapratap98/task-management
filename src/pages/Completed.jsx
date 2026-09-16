import { useDispatch, useSelector } from "react-redux";
import PageLayout from "../components/PageLayout";
import { selectAllTasks, toggleTask, deleteTask } from "../store/tasksSlice";

function AllTasks() {

  const dispatch = useDispatch();
  const tasks = useSelector(selectAllTasks);

  const completeTasks = tasks.filter((task) => task.completed)

  return (
    <PageLayout
      title="Completed Tasks"
      subtitle="All completed work appears here."
    >
      {
        completeTasks.map((task) => (
          <div key={task.id}>
            <input type="checkbox"
              checked={task.completed || false}
              onChange={() => dispatch(toggleTask(task.id))} />

            <h3 className="completed-task">
              {task.title}
            </h3>
            <p>{task.category}</p>
            <p>{task.priority}</p>
            <p>{task.due}</p>
            <button onClick={()=> dispatch(deleteTask(task.id))}>Delete</button>
          </div>
        ))
      }

    </PageLayout>
  );
}

export default AllTasks;