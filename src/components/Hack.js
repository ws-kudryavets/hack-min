import React, { useEffect } from 'react';
import atomize from "@quarkly/atomize";

const Hack = props => {
	useEffect(() => {
		if (document.querySelector('a[href="https://quarkly.io/"')) {
			document.querySelector('a[href="https://quarkly.io/"').hidden = true;
		}
	}, []);
	return <div {...props} />;
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