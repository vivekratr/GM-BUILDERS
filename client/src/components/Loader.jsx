import React from 'react'
import './css/Loader.css'

const Loader = (props) => {
  return (
    <div className={`${props.run?'':'hidden'}`}>
      <div className="loader">
    <span className="loader-text">loading</span>
      <span className="load"></span>
  </div>

    </div>
  )
}

export default Loader
