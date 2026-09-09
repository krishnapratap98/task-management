import { Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar'

import Dashboard from './pages/Dashboard'
import AllTasks from './pages/AllTasks'
import Completed from './pages/Completed'
import Important from './pages/Important'
import Settings from './pages/Settings'
import AddTask from './components/AddTask'
import EditTask from "./components/EditTask";

function App() {

  return (
    <>
      <div className='app'>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/all-tasks" element={<AllTasks />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/important" element={<Important />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/edit-task/:id" element={<EditTask />} />
        </Routes>

      </div>
    </>
  )
}

export default App;
