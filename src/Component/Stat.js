import React from "react";
import Paper from '@material-ui/core/Paper';

import {
ArgumentAxis,
ValueAxis,
Chart,
LineSeries,
} from '@devexpress/dx-react-chart-material-ui';

const App = () => {

const data = [
{ x: 1, y: 20 },
{ x: 2, y: 26},
{ x: 3, y: 16},
{ x: 4, y: 5},
{x: 5, y:25},
];
return (
	<paper>
		<Chart
		data={data}
		>
	<ArgumentAxis />
	<ValueAxis />

	<LineSeries valueField="y" argumentField="x" />
	</Chart>
  </paper>
);
 
}

export default App;