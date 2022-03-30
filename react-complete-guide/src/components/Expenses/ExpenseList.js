import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
	// Alternative for showing conditional JSX
	// let expensesContent = <p>No expenses found.</p>;

	if (props.items.length === 0) {
		return <h2 className="expenses-list__fallback">Found no expenses</h2>
	}

	return (
		<ul className="expenses-list">
			{props.items.map((d) => {
				return (
					<ExpenseItem
						key={d.id}
						title={d.title}
						amount={d.amount}
						date={d.date}
					/>
				);
			})}
		</ul>
	);
};

export default ExpenseList;
