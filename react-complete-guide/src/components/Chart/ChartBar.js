import "./ChartBar.css";
const ChartBar = (props) => {
	let barFillHeight = "0%";

	if (props.max > 0) {
		barFillHeight = Math.round((props.value / props.max) * 100) + "%";
	}

	// Style attrib in JSX takes in an object and is not inherently the same
	// with style attrib in HTML, it is inherently similar to styles in jQuery
	return (
		<div className="chart-bar">
			<div className="chart-bar__inner">
				<div
					className="chart-bar__fill"
					style={{ height: barFillHeight }}
				></div>
			</div>
            <div className="chart-bar__label">{props.label}</div>
		</div>
	);
};

export default ChartBar;
