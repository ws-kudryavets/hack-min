import React from 'react';
import atomize from "@quarkly/atomize";
const Div = atomize.div();

const TestDiv = props => <Div height="100vh" {...props} />;

export default atomize(TestDiv)({
	name: "TestDiv",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "TestDiv — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			id: ""
		}
	}
});