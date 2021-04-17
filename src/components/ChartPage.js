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