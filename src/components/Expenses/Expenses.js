import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import {useState} from 'react';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {

    const [filterOption,setFilterOption] = useState('2021');

    const filterOptionHandler = (optionValue) => {
        setFilterOption(optionValue);
    }
    const expenses = props.expenses;
    return (
        <Card className="expenses">
            <ExpenseFilter filterValue = {filterOption} onFilterChange = {filterOptionHandler}/>
            <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount} />
            <ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount} />
            <ExpenseItem date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount} />
            <ExpenseItem date={expenses[3].date} title={expenses[3].title} amount={expenses[3].amount} />
        </Card>
    );
}

export default Expenses;