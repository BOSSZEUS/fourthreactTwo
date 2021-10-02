import React, { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import Expensefilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'

const Expenses = (props) => {
    const [FilteredYear, setFilteredYear] = useState('2020')
    const filterchangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.items.filter((expense)=>{
        return expense.date.getFullYear().toString() === FilteredYear
    })
 
    return(
        <div>
        <Card className='expenses'>
        <Expensefilter selected={FilteredYear} onChangeFilter={filterchangeHandler} />
        <ExpensesList items={filteredExpenses} />
        </Card>
        </div>
    )
    
}

export default Expenses