import React from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
	const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };

        console.log(expenseData);
        props.onAddExpense(expenseData);
    };
	// Passing data from child to parent you make use to
	// user defined attributes to a specific component
	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />
		</div>
	);
};

export default NewExpense;
