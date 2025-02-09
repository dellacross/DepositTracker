import React, { useEffect, useState } from 'react'
import './DepositCard.css'
import axios from 'axios'

const DepositCard = ({ deposit, setNewTracker }) => {

  const [existDeposit, setExistDeposit] = useState(false)
  const [date, setDate] = useState<string>()

  useEffect(() => {
    if(deposit?.depositDate) {
      formatDate(deposit?.depositDate)
      setExistDeposit(true)
    }
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
      setNewTracker(response.data?.tracker)
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
      setNewTracker(response.data?.tracker)
      console.log('clear', response.data)
    })
    .catch((error) => {
      console.log(error)
    })  
  }

  const handleDeposit = () => {
    existDeposit ? handleClearDeposit() : handleNewDeposit()
  }

  return (
    <div 
      id="deposit-card"
      className={existDeposit ? 'exist-deposit' : 'non-deposit'}
      onClick={() => handleDeposit()}
    >
      <h1>{`R$ ${deposit?.amount},00`}</h1>
      { (date !== '' || date !== undefined) && date && <p>Payment Date: {date}</p> }
    </div>
  )
}

export default DepositCard