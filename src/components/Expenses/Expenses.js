import React, { useState } from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import Expensefilter from './ExpenseFilter'

const Expenses = (props) => {
    const [FilteredYear, setFilteredYear] = useState('2020')
    const filterchangeHandler = selectedYear =>{
        setFilteredYear()
    }
 
    return(
        <div>
        <Card className='expenses'>
        <Expensefilter selected={FilteredYear} onChangeFilter={filterchangeHandler} />
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}>
            </ExpenseItem>
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}>
            </ExpenseItem>
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}>
            </ExpenseItem>
        </Card>
        </div>
    )
    
}

export default Expenses