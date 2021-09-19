import React, {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
  // setting state for title input
  const[eneteredTitle, setEnteredtitle] = useState('')
  const titleChangeHandler = (event) => {
    setEnteredtitle(event.target.value)
  }
  // setting state for amount input
  const [enteredAmount, setEnteredAmount] = useState('')
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }
  // setting state for date input
  const [enteredDate, setEnteredDate] = useState('')
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }
  const submitHandler = (event) => {
    event.preventDefault()
    

    const expenseData = {
      title: eneteredTitle,
      amount: enteredAmount,
      date: new Date (enteredDate)
    }
    console.log(expenseData)
    setEnteredtitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  
 return <form onSubmit={submitHandler}>
   <div className='new-expense__controls'>
     <div className='new-expense__control'>
       <label>Title</label>
        <input type='text' value={eneteredTitle} onChange={titleChangeHandler}></input>
     </div>
     <div className='new-expense__control'>
       <label>Amount</label>
       <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}></input>
     </div>
     <div className='new-expense__control'>
       <label>Date</label>
       <input 
       type='date'
       min='2019-01-01'
       max='2022-12-32' value={enteredDate} onChange={dateChangeHandler} />
     </div>
   </div>
   <div className='new-expense__actions'>
    <button type='submit'>Add Expense</button>
   </div>
</form>
}

export default ExpenseForm