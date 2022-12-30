import React from "react";
import './gridItem.css'
import { AiOutlineArrowUp } from "react-icons/ai"
import { AiOutlineArrowDown } from "react-icons/ai"
import { BsTrash } from "react-icons/bs"
const GridItem = ({ item, onDelete }) => {
  return (
    <tr>
      <td>{item.desc}</td>
      <td>{`R$ ${item.amount}`}</td>
      <td>
        {item.expense ? (
          <AiOutlineArrowDown color="red" />
        ) : (
          <AiOutlineArrowUp color="green" />
        )}
      </td>
      <td>
        <BsTrash className="icon-trash" onClick={() => onDelete(item.id)} />
      </td>
    </tr>
  )
}

export default GridItem