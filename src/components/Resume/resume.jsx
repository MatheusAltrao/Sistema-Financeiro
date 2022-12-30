import React from "react"
import './resume.css'
import ResumeItem from "../ResumeItem/resumeItem"
import { AiOutlineArrowUp } from "react-icons/ai"
import { AiOutlineArrowDown } from "react-icons/ai"
import { BsCurrencyDollar } from "react-icons/bs"

const Resume = ({ income, expense, total }) => {
  return (
    <div className="resume">
      <div className="container">
        <ResumeItem title="Entradas" value={income} icon={<AiOutlineArrowUp color="#00ff00" />} />
        <ResumeItem title="Saídas" value={expense} icon={<AiOutlineArrowDown color="#ff0000" />} />
        <ResumeItem title="Total" value={total} icon={<BsCurrencyDollar color="#7c17b4" />} />
      </div>
    </div>

  )
}

export default Resume