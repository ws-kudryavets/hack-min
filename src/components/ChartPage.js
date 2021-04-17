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
			  
			<Chart
				width={'500px'}
				height={'300px'}
				chartType="BubbleChart"
				loader={<div>
					Loading Chart
				</div>}
				data={[['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'], ['CAN', 80.66, 1.67, 'North America', 33739900], ['DEU', 79.84, 1.36, 'Europe', 81902307], ['DNK', 78.6, 1.84, 'Europe', 5523095], ['EGY', 72.73, 2.78, 'Middle East', 79716203], ['GBR', 80.05, 2, 'Europe', 61801570], ['IRN', 72.49, 1.7, 'Middle East', 73137148], ['IRQ', 68.09, 4.77, 'Middle East', 31090763], ['ISR', 81.55, 2.96, 'Middle East', 7485600], ['RUS', 68.6, 1.54, 'Europe', 141850000], ['USA', 78.09, 2.05, 'North America', 307007000]]}
				options={{
					title: 'Correlation between life expectancy, fertility rate ' + 'and population of some world countries (2010)',
					hAxis: {
						title: 'Life Expectancy'
					},
					vAxis: {
						title: 'Fertility Rate'
					},
					bubble: {
						textStyle: {
							fontSize: 11
						}
					}
				}}
				rootProps={{
					'data-testid': '1'
				}}
			/>
			<Chart
				width={'500px'}
				height={'300px'}
				chartType="ComboChart"
				loader={<div>
					Loading Chart
				</div>}
				data={[['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'], ['2004/05', 165, 938, 522, 998, 450, 614.6], ['2005/06', 135, 1120, 599, 1268, 288, 682], ['2006/07', 157, 1167, 587, 807, 397, 623], ['2007/08', 139, 1110, 615, 968, 215, 609.4], ['2008/09', 136, 691, 629, 1026, 366, 569.6]]}
				options={{
					title: 'Monthly Coffee Production by Country',
					vAxis: {
						title: 'Cups'
					},
					hAxis: {
						title: 'Month'
					},
					seriesType: 'bars',
					series: {
						5: {
							type: 'line'
						}
					}
				}}
				rootProps={{
					'data-testid': '1'
				}}
			/>
			<Chart
				width={'500px'}
				height={'300px'}
				chartType="PieChart"
				loader={<div>
					Loading Chart
				</div>}
				data={[['Task', 'Hours per Day'], ['Work', 11], ['Eat', 2], ['Commute', 2], ['Watch TV', 2], ['Sleep', 7]]}
				options={{
					title: 'My Daily Activities'
				}}
				rootProps={{
					'data-testid': '1'
				}}
			/>
			<Chart
				width={'500px'}
				height={'300px'}
				chartType="TreeMap"
				loader={<div>
					Loading Chart
				</div>}
				data={[['Location', 'Parent', 'Market trade volume (size)', 'Market increase/decrease (color)'], ['Global', null, 0, 0], ['America', 'Global', 0, 0], ['Europe', 'Global', 0, 0], ['Asia', 'Global', 0, 0], ['Australia', 'Global', 0, 0], ['Africa', 'Global', 0, 0], ['Brazil', 'America', 11, 10], ['USA', 'America', 52, 31], ['Mexico', 'America', 24, 12], ['Canada', 'America', 16, -23], ['France', 'Europe', 42, -11], ['Germany', 'Europe', 31, -2], ['Sweden', 'Europe', 22, -13], ['Italy', 'Europe', 17, 4], ['UK', 'Europe', 21, -5], ['China', 'Asia', 36, 4], ['Japan', 'Asia', 20, -12], ['India', 'Asia', 40, 63], ['Laos', 'Asia', 4, 34], ['Mongolia', 'Asia', 1, -5], ['Iran', 'Asia', 18, 13], ['Pakistan', 'Asia', 11, -52], ['Egypt', 'Africa', 21, 0], ['S. Africa', 'Africa', 30, 43], ['Sudan', 'Africa', 12, 2], ['Congo', 'Africa', 10, 12], ['Zaire', 'Africa', 8, 10]]}
				options={{
					minColor: '#f00',
					midColor: '#ddd',
					maxColor: '#0d0',
					headerHeight: 15,
					fontColor: 'black',
					showScale: true
				}}
				rootProps={{
					'data-testid': '1'
				}}
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