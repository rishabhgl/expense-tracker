import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {

    const dataPointvalues = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxHeight = Math.max(...dataPointvalues);
    return ( <div className="chart">
        {props.dataPoints.map(dataPoint => {
            return (
                <ChartBar key = {dataPoint.label} label = {dataPoint.label} value = {dataPoint.value} maxValue = {maxHeight} />
            )
        })}
    </div> );
}
 
export default Chart;