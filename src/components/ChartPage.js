import React from 'react';
import { Box } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import Chart from "react-google-charts"; // import atomize from "@quarkly/atomize";

const overrides = {
	'ChartPageMain': {
		kind: 'Box'
	}
};

const ChartPage = props => {
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	return <Box {...rest}>
		  
		<Box {...override('ChartPageMain')}>
			  
			<Chart
				width={400}
				height={300}
				chartType="ColumnChart"
				loader={<div>
					Loading Chart
				</div>}
				data={[['City', '2010 Population', '2000 Population'], ['New York City, NY', 8175000, 8008000], ['Los Angeles, CA', 3792000, 3694000], ['Chicago, IL', 2695000, 2896000], ['Houston, TX', 2099000, 1953000], ['Philadelphia, PA', 1526000, 1517000]]}
				options={{
					title: 'Population of Largest U.S. Cities',
					chartArea: {
						width: '30%'
					},
					hAxis: {
						title: 'Total Population',
						minValue: 0
					},
					vAxis: {
						title: 'City'
					}
				}}
				legendToggle
			/>
			  
		</Box>
		  
	</Box>;
};

export default Object.assign(ChartPage, {
	title: 'Chart page',
	description: {
		en: 'Chart page'
	},
	overrides
});