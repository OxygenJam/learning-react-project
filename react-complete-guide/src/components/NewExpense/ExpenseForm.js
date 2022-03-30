import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	// This is most commonly used in real life
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

	// Alternatively
	// const [userInput, setUserInput] = useState({
	//     enteredTitle:'',
	//     enteredAmount:'',
	//     enteredDate:''
	// });

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
		// setUserInput({
		//     ...userInput,
		//     enteredTitle:event.target.value
		// })

		// If you depend on the value of the previous state you should use this
		// as state snapshot are non-linear and could not be latest
		// This method is used when you use 1 singular useState
		// setUserInput((prevState) =>{
		//     return {
		//         ...prevState,
		//         enteredTitle:event.target.value
		//     }
		// })
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
		// setUserInput({
		//     ...userInput,
		//     enteredAmount:event.target.value
		// })
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
		// setUserInput({
		//     ...userInput,
		//     enteredDate:event.target.value
		// })
	};

	const submitHandler = (event) => {

        // Prevents the request of being sent
        // as such avoids page reloading upon page submission
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);

        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };
    // Two way binding : able to listen for events and send value to the element
	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						onChange={amountChangeHandler}
                        value = {enteredAmount}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2022-03-29"
						max="2023-12-31"
						onChange={dateChangeHandler}
                        value = {enteredDate}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
