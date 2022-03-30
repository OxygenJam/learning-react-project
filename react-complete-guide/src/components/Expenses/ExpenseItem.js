// A component in react is just a function

//Let's you defines values as state, wherein changes to these values reloads the DOM
import { useState } from "react";

// Only 1 root element in JSX
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
	// Can only be called inside the component functions
	const [title, setTitle] = useState(props.title);
	// Returns an array the first is the state value, second is the function to access it
	// useStates are per component instance
	// think of it [getter, setter]
	// React checks is the useState is initially called, then sets the props.title
	// if it isn't it re-uses the state value defined in the previous component function calls

	const expenseAmount = props.amount;

	// recommended to name functions tied to event to end with Handler
	// const clickHandler = () =>{
	// 	setTitle("Updated!");
	// 	// Setting value are non-linear as such the updated data is once DOM loads or function call ends
	// }

	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={props.date} />
				<div className="expense-item__description">
					<h2>{title}</h2>
					<div className="expense-item__price">${expenseAmount}</div>
				</div>
			</Card>
		</li>
	);
};

export default ExpenseItem;
