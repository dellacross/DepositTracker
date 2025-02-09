import React, { useEffect, useState } from 'react'
import './DepositCard.css'
import axios from 'axios'

const DepositCard = ({ deposit }) => {

  const [existDeposit, setExistDeposit] = useState(deposit?.depositDate)
  const [date, setDate] = useState<string>()

  useEffect(() => {
    if(deposit?.depositDate) formatDate(deposit?.depositDate)
  }, [deposit])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    setDate(`${day}-${month}-${year}`)
  };

  const handleNewDeposit = async () => {
    await axios
    .put(`http://localhost:3333/updatedeposit`, {
      id: deposit?.id,
      depositDate: date
    })
    .then((response) => {
      setExistDeposit(true)
      formatDate(response.data?.deposit?.depositDate)
      console.log('new', response.data)
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
      console.log('clear', response.data)
    })
    .catch((error) => {
      console.log(error)
    })  
  }

  const handleDeposit = () => {
    (deposit?.paymentDate || existDeposit) ? handleClearDeposit() : handleNewDeposit()
  }

  return (
    <div 
      id="deposit-card"
      className={(existDeposit && deposit?.depositDate) ? 'exist-deposit' : 'non-deposit'}
      onClick={() => handleDeposit()}
    >
      <h1>{`R$ ${deposit?.amount},00`}</h1>
      { (date !== '' || date !== undefined) && date && <p>Payment Date: {date}</p> }
    </div>
  )
}

export default DepositCard