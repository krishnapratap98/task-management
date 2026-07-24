import React from 'react'
import "../styles/navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <input
          type='text'
          placeholder='Search tasks...'
          className='search-input'
        />
      </div>

      <div className='navbar-right'>
        <button className='notification-btn'>
          🔔
        </button>

        <div className='profile'>
          <img src="https://i.pravatar.cc/40" 
          alt='profile' 
          />
          <span>Krishna</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar