import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask, selectAllTasks } from "../store/tasksSlice";
import { useNavigate, useParams } from "react-router-dom";

function EditTask() {
    const { id } = useParams()

    const tasks = useSelector(selectAllTasks);

    const task = tasks.find((task) => task.id === Number(id));

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setCategory(task.category);
            setPriority(task.priority);
            setDue(task.due);
        }
    }, [task]);

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [priority, setPriority] = useState("Medium");
    const [due, setDue] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedTask = {
            id: Number(id),
            title,
            category,
            priority,
            due,
            completed: task.completed || false,
        };

        dispatch(updateTask(updatedTask));
        navigate("/");
    };

    return (
        <div className="add-task-form">
            <h2>Edit Task</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Task Title</label>
                    <input
                        type="text"
                        value={title}
                        placeholder="Enter task title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div>
                    <label>Category</label>
                    <input
                        type="text"
                        value={category}
                        placeholder="Enter category"
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>

                <div>
                    <label>Priority</label>
                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>

                <div>
                    <label>Due Date</label>
                    <input
                        type="date"
                        value={due}
                        onChange={(e) => setDue(e.target.value)}
                    />
                </div>

                <button type="submit">
                    Update Task
                </button>
            </form>
        </div>
    );
}

export default EditTask;