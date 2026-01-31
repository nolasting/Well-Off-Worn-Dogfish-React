import React from 'react'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <svg
        fill="none"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
        height="32"
        stroke="currentColor"
        viewBox="0 0 32 32"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 2L4 8v10c0 7 5 12 12 14 7-2 12-7 12-14V8L16 2z"></path>
        <path d="M12 14l2 2 6-6"></path>
      </svg>
    </div>
  )
}

export default AppComponent
