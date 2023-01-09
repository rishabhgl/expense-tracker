import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {

    const [formEnabled, setFormEnabled] = useState(true);
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: +enteredAmount
        };
        props.onFormSubmit(expenseData);
        setEnteredAmount('');
        setEnteredTitle('');
        setEnteredDate('');
        setFormEnabled(false);
    }

    const cancelClickHandler = () => {
        setFormEnabled(false);
    }

    const formEnableHandler = () => {
        setFormEnabled(true);
    }

    if (!formEnabled) {
        return (
            <button onClick={formEnableHandler}>Add Expense</button>
        )
    }
    else {
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
                <button type="submit" className="actions">Add Expense</button>
                <button onClick={cancelClickHandler}>Cancel</button>
            </form>
        </div>);
    }

}

export default ExpenseForm;