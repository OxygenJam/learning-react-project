import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};

		console.log(expenseData);
		props.onAddExpense(expenseData);
	};
	// Passing data from child to parent you make use to
	// user defined attributes to a specific component

	const [addExpenseToggle, setAddExpenseToggle] = useState(false);
	const toggleAddExpense = () => {
		setAddExpenseToggle((prevToggle) => {
			return prevToggle ? false : true;
		});
	};

	let addExpenseComponent = (
		<button onClick={toggleAddExpense}>Add New Expense</button>
	);

	if (addExpenseToggle) {
		addExpenseComponent = (
			<ExpenseForm
				onSaveExpenseData={saveExpenseDataHandler}
				onToggleAddExpense={toggleAddExpense}
			/>
		);
	}

	return <div className="new-expense">{addExpenseComponent}</div>;
};

export default NewExpense;
