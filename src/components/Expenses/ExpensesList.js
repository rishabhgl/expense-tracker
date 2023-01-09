import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

//Conditional rendering of two elements. Can only be done this way of the elements in question are the only elements in the component.

// Can also be done using turnary operator, by rendering a single variable ,initially feeding it one value and changing it when a condition is met, or by abusing logical operators.

const ExpenseList = (props) => {

    if (props.expenseList.length === 0) {
        return (
            <div className="expenses-list__fallback">
                No expenses found for the year.
            </div>
        );
    }

    return (<ul className="expenses-list">
        {props.expenseList.map(expense =>
            <ExpenseItem key={expense.id}
                title={expense.title}
                date={expense.date}
                amount={expense.amount} />)}
    </ul>);
}

export default ExpenseList;