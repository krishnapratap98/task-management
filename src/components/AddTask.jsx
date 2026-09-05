
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/tasksSlice";

function AddTask() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [priority, setPriority] = useState("Medium");
    const [due, setDue] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            id: Date.now(),
            title,
            category,
            priority,
            due,
        };

        dispatch(addTask(newTask));

        setTitle("");
        setCategory("");
        setPriority("Medium");
        setDue("");
    };

    return (
        <div className="add-task-form">
            <h2>Add New Task</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Task Title</label>
                    <input
                        value={title}
                        type="text"
                        placeholder="Enter task title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div>
                    <label>Category</label>
                    <input
                        value={category}
                        type="text"
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
                    Add Task
                </button>
            </form>
        </div>
    );
}

export default AddTask;

