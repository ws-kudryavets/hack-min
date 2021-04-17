import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your JS here:

const customJs = `
var data = [{type: 'densitymapbox', lon: [10, 20, 30], lat: [15, 25, 35], z: [1, 3, 2]}];

var layout = {width: 600, height: 400, mapbox: {style: 'stamen-terrain'}};

Plotly.newPlot('a9bfa545-420c-4036-99ab-cfc289b59bd4', data, layout);
`;

const EmbedJS = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		const script = document.createElement("script");
		script.innerHTML = customJs;
		ref.current.appendChild(script);
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedJS)({
	name: "EmbedJS",
	normalize: true,
	mixins: true
});