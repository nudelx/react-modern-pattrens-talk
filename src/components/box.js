import React from 'react'

export default ({ title, children }) => (
  <div className="box">
    <div className="box-title">{title}</div>
    <div className="box-content">{children}</div>
  </div>
)
