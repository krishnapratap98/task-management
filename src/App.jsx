import { useState } from 'react'
import Dashboard from './pages/Dashboard'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <Sidebar />
        <Dashboard />

      </div>
    </>
  )
}

export default App;
