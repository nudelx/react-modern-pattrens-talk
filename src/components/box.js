import React from 'react'

export default ({ title, children, center }) => (
  <div className={`box`}>
    <div className="box-title">{title}</div>
    <div className={`box-content ${center ? 'box-center' : ''}`}>
      {children}
    </div>
  </div>
)
