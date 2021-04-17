import React from 'react';
import { Box } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import Widget from './Widget'; // import Chart from "react-google-charts";
// import atomize from "@quarkly/atomize";

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
			  
			<div id="widget">
				  
				<Widget type="GEO_MAP" keyword="егэ по информатике" url="https://ssl.gstatic.com/trends_nrtr/2051_RC11/embed_loader.js" />
				  
			</div>
			  
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