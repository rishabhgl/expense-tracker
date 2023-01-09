import './AddExpense.css';
import ExpenseForm from './ExpenseForm';

const AddExpense = (props) => {

    const formSubmitHandler = (expenseData) =>
    {
        const newExpense = {
            ...expenseData,
            id : Math.random().toString()
        };
        props.onNewExpenseReceived(newExpense);
    };


    return (<div className='new-expense'>
        <ExpenseForm onFormSubmit = {formSubmitHandler}/>
    </div>);
}

export default AddExpense;