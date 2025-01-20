import React from 'react'
import './DepositCard.css'

const DepositCard = ({ deposit }) => {

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
    </div>
  )
}

export default DepositCard