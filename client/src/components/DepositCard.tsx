import React, { useState } from 'react'
import './DepositCard.css'
import axios from 'axios'

const DepositCard = ({ deposit }) => {

<<<<<<< HEAD
  const [existDeposit, setExistDeposit] = useState(deposit?.paymentDate)
  const [date, setDate] = useState<Date | string>()

  const handleDate = () => {
    const today = new Date(); // Obtém a data atual
    const day = today.getDate(); // Obtém o dia do mês (1-31)
    const month = today.getMonth() + 1; // Obtém o mês (0-11), então adicionamos 1
    const year = today.getFullYear(); // Obtém o ano
    const _date = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

    setDate(today)
  }

  const handleNewDeposit = async () => {
    handleDate()

    await axios
    .put(`http://localhost:3333/updatedeposit`, {
      id: deposit?.id,
      depositDate: date
    })
    .then((response) => {
      setExistDeposit(true)
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const handleClearDeposit = async () => {
    await axios
    .put(`http://localhost:3333/cleardeposit`, {
      id: deposit?.id
    })
    .then((response) => {
      setExistDeposit(false)
      setDate('')
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })  
  }

  const handleDeposit = () => {
    deposit?.paymentDate ? handleClearDeposit() : handleNewDeposit()
  }

  return (
    <div 
      id="deposit-card"
      className={existDeposit ? 'exist-deposit' : 'non-deposit'}
      onClick={() => handleDeposit()}
    >
      <h1>{`R$ ${deposit?.amount},00`}</h1>
      { date !== ''  && <p>Payment Date:</p> }
=======
  const handleDeposit = () => {
    axios
    .put('', {
      id: deposit.id,
      amout: deposit.amout,
      paymentDate: deposit.paymentDate
    })
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)})
  }

  return (
    <div id="deposit-card">
      <h1>{`R$ ${deposit.amount},00`}</h1>
      <p>Payment Date: {deposit.paymentDate || '-'}</p>
      <p>User Payer: {deposit.userPayer || '-'}</p>
>>>>>>> 6f8db96c7eb40219138a3ae4acec2a03d8e7d069
    </div>
  )
}

export default DepositCard