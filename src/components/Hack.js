import React, { useEffect } from 'react';
import atomize from "@quarkly/atomize";

const Hack = props => {
	useEffect(() => {
		var data = [{
			type: 'densitymapbox',
			lon: [10, 20, 30],
			lat: [15, 25, 35],
			z: [1, 3, 2]
		}];
		var layout = {
			width: 600,
			height: 400,
			mapbox: {
				style: 'stamen-terrain'
			}
		};
		document.querySelector('#myDiv') && Plotly.newPlot('myDiv', data, layout);

		if (document.querySelector('a[href="https://quarkly.io/"')) {
			document.querySelector('a[href="https://quarkly.io/"').remove();
		}
	});
	return <div {...props}></div>;
};

export default atomize(Hack)({
	name: "Hack",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "Hack — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});