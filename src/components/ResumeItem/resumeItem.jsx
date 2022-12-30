import React from "react"
import './resumeItem.css'

const ResumeItem = ({ title, value, icon }) => {
  return (
    <div className="resume-item">
      <h2 className="resume-title">{title}</h2>
      <span className="resume-number" >{value}</span>
      <span className="icon">{icon}</span>
    </div>
  )
}

export default ResumeItem