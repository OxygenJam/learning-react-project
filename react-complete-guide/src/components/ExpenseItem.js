// A component in react is just a function

// Only 1 root element in JSX

import './ExpenseItem.css';

function ExpenseItem(props) {
    const expenseDate = props.date;
    const expenseTitle = props.title;
    const expenseAmount = props.amount;

	return (
		<div className="expense-item">
			<div>{expenseDate.toLocaleDateString()}</div>
			<div className="expense-item__description">
				<h2>{expenseTitle}</h2>
				<div className="expense-item__price">${expenseAmount}</div>
			</div>
		</div>
	);
}

export default ExpenseItem;
