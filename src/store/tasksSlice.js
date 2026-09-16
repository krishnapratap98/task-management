import { createSlice } from "@reduxjs/toolkit";

const savedTasks = JSON.parse(localStorage.getItem("tasks"));

const initialState = {
    tasks: savedTasks || [
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
    }
    ],
}

const tasksSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addTask: (state, action)=>{
            state.tasks.push(action.payload)
        },

        toggleTask: (state, action)=>{
          const task = state.tasks.find((task)=> task.id === action.payload)

          if(task){
            task.completed = !task.completed
          }
        },
        deleteTask: (state, action)=>{
          state.tasks = state.tasks.filter((task) => task.id !== action.payload) 
        },
        updateTask: (state, action) => {
          const index = state.tasks.findIndex((task)=> task.id === action.payload.id)
          if(index !== -1){
            state.tasks[index] = action.payload
          }
        }

    }
})

export const {addTask, toggleTask, deleteTask, updateTask} = tasksSlice.actions;

export const selectAllTasks = (state) => state.tasks.tasks;

export default tasksSlice.reducer;