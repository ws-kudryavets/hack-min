import React from 'react';
import atomize from "@quarkly/atomize";

const BigMap = props => <div {...props}>
	Say hello BigMap
</div>;

export default atomize(BigMap)({
	name: "BigMap",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "BigMap — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});