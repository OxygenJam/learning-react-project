import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expense.css";

const Expense = (props) => {
	const expenses = props.expenses;
	const [dateFilter, setDateFilter] = useState("2022");

	const getDateFilterHandler = (event) => {
		setDateFilter(event);
		console.log("Current year filtered is ", event);
	};

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter selected={dateFilter} onGetDateFilter={getDateFilterHandler} />
				<ExpenseItem
					title={expenses[0].title}
					amount={expenses[0].amount}
					date={expenses[0].date}
				></ExpenseItem>
				<ExpenseItem
					title={expenses[1].title}
					amount={expenses[1].amount}
					date={expenses[1].date}
				></ExpenseItem>
				<ExpenseItem
					title={expenses[2].title}
					amount={expenses[2].amount}
					date={expenses[2].date}
				></ExpenseItem>
				<ExpenseItem
					title={expenses[3].title}
					amount={expenses[3].amount}
					date={expenses[3].date}
				></ExpenseItem>
			</Card>
		</div>
	);
};

export default Expense;
