import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput(prevState => {
        //     return { ...prevState, setEnteredTitle: event.target.value };
        // })
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput(prevState => {
        //     return { ...prevState, setEnteredAmount: event.target.value };
        // })
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput(prevState => {
        //     return { ...prevState, setEnteredDate: event.target.value };
        // })
    }

    function submitHandler(event) {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: enteredAmount
        };
        props.onFormSubmit(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    }

    return (<div>
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label> Amount</label>
                    <input type="numeric" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div >
                <button type="submit" className="actions"> Add Expense</button>
            </div>
        </form>
    </div>);
}

export default ExpenseForm;