import React from 'react'

export default ({ children, title }) => (
  <div className="card">
    <div className="card-title">{title}</div>
    <div className="card-content">{children}</div>
  </div>
)
