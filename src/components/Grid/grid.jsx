import React from "react";
import './grid.css'
import GridItem from "../GridItem/gridItem";

const Grid = ({ itens, setItens }) => {

  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <table>

      <thead>
        <tr>
          <td className="td-title">Descrição</td>
          <td className="td-title">Valor</td>
          <td className="td-title">Tipo</td>
          <td className="td-title">Deletar</td>
        </tr>

      </thead>



      <tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </tbody>

    </table>
  )
}

export default Grid