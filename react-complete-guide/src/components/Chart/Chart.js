import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map((d) =>{
        return d.value;
    });

    const totalMaximum = Math.max(...dataPointValues);

	return (
		<div className="chart">
			{props.dataPoints.map((d) => {
				return (
					<ChartBar key={d.label} value={d.value} max={totalMaximum} label={d.label} />
				);
			})}
		</div>
	);
};

export default Chart;
