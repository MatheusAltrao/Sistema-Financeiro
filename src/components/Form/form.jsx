import React from "react"
import { useState } from "react"
import './form.css'
import Button from "../Button/button"
import Grid from "../Grid/grid"

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("")
  const [amount, setAmount] = useState("")
  const [isExpense, setExpense] = useState(false)

  const generateID = () => Math.round(Math.random() * 1000)

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!")
      return
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!")
      return
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    }

    handleAdd(transaction)



    setDesc("")
    setAmount("")
  }

  return (
    <div className="form">
      <div className="container">
        <div className="register">
          <label className="label-input">
            Descrição
            <input className="input-input " type="text" placeholder="Conta de luz" value={desc} onChange={(e) => setDesc(e.target.value)} />
          </label>

          <label className="label-input">
            Valor
            <input className="input-input " type="number" placeholder="2500" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </label>


          <div className="radios">

            <label className="label-inputRadio " >
              <input type="radio"
                id="rIncome"
                defaultChecked
                name="group1"
                onChange={() => setExpense(!isExpense)} />
              Entrada
            </label>

            <label className="label-inputRadio ">
              <input type="radio"
                id="rExpenses"
                name="group1"
                onChange={() => setExpense(!isExpense)} />

              Saída
            </label>
          </div>

          <Button title="Adicionar" onClick={handleSave}></Button>
        </div>
        <div className="line"></div>



        <Grid itens={transactionsList} setItens={setTransactionsList} />


      </div>

    </div >

  )
}

export default Form