import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    //lifting the expenseData up to parent componet i.e. app.js
    props.onAddExpense(expenseData)
  }

  return <div className='new-expense'>
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
  </div>
}

export default NewExpense