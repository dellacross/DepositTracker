import React from 'react'
import './DepositCard.css'

const DepositCard = ({ goal }) => {
  return (
    <div id="deposit-card">
        <h1>{`R$ ${goal.amount},00`}</h1>
        <p>Payment Date: {goal.paymentDate || '-'}</p>
        <p>User Payer: {goal.userPayer || '-'}</p>
    </div>
  )
}

export default DepositCard