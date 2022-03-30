import { useState } from "react";

import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import Card from "../UI/Card";
import "./Expense.css";


const Expense = (props) => {
	const expenses = props.expenses;
	const [dateFilter, setDateFilter] = useState("2022");

	const getDateFilterHandler = (event) => {
		setDateFilter(event);
		console.log("Current year filtered is ", event);
	};

	const filteredData = expenses.filter((d) => {
		return d.date.getFullYear() === +dateFilter;
	});

	// Long statements in JSX is not allowed like if, else statements and loops
	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={dateFilter}
					onGetDateFilter={getDateFilterHandler}
				/>
				<ExpenseChart expenses={filteredData} />
				<ExpenseList items={filteredData}/>
			</Card>
		</div>
	);
};

export default Expense;
