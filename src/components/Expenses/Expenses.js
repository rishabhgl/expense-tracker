import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';
import {useState} from 'react';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {

    const [filterOption,setFilterOption] = useState('2021');

    const filterOptionHandler = (optionValue) => {
        setFilterOption(optionValue);
    }

    const filteredExpenses = props.expenses.filter(expense => expense.date.toLocaleString('en-US',{year: "numeric"}) === filterOption);

    return (
        <Card className="expenses">
            <ExpenseFilter filterValue = {filterOption} onFilterChange = {filterOptionHandler}/>
            <ExpenseChart expenseList = {filteredExpenses} />
            <ExpensesList expenseList = {filteredExpenses} />
        </Card>
    );
}

export default Expenses;