import React from 'react';
import atomize from "@quarkly/atomize";

const Data = props => <div {...props}>
	Say hello Data
</div>;

export default atomize(Data)({
	name: "Data",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "Data — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});