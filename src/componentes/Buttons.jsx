import React from 'react'
import imagen from "../assets/pngwing.com (33).png"

const Buttons = () => {
  return (
    <div>
      <button>Follow</button>
      <button>
        <img src={imagen} alt="" />
      </button>
    </div>
  )
}

export default Buttons
