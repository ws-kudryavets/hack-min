import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"chart-page"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6079ce657c7120001f1ee250/images/Frame%201.png?v=2021-04-16T18:11:57.582Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6079ce657c7120001f1ee250/images/Frame%202.png?v=2021-04-16T18:12:25.178Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6079ce657c7120001f1ee250/images/Frame%202.png?v=2021-04-16T18:12:25.178Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6079ce657c7120001f1ee250/images/Frame%202.png?v=2021-04-16T18:12:25.178Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6079ce657c7120001f1ee250/images/Frame%202.png?v=2021-04-16T18:12:25.178Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6079ce657c7120001f1ee250/images/Frame%203.png?v=2021-04-16T18:12:25.173Z"} />
			<meta name={"msapplication-TileColor"} content={"#f7f9fe"} />
		</Helmet>
		<Components.ChartPage />
		<div id="myDiv" />
		<Components.Footer>
			<Override slot="image" width="100%" />
		</Components.Footer>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<script place={"endOfHead"} rawKey={"607a0eca5caa12c15fe82123"}>
				{"window.PlotlyConfig = {MathJaxConfig: 'local'};"}
			</script>
			<script src={"https://cdn.plot.ly/plotly-latest.min.js"} place={"endOfHead"} rawKey={"607a0ed815bece49fec80856"} />
			<script place={"endOfBody"} rawKey={"607a0ef07d0409aad24174f8"}>
				{"var data = [{type: 'densitymapbox', lon: [10, 20, 30], lat: [15, 25, 35], z: [1, 3, 2]}];\n\nvar layout = {width: 600, height: 400, mapbox: {style: 'stamen-terrain'}};\n\nPlotly.newPlot('myDiv', data, layout);"}
			</script>
			<script place={"endOfBody"} rawKey={"607a14a2e19561e1c538b22b"}>
				{"document.querySelector('a[href=\"https://quarkly.io/\"').remove()"}
			</script>
		</RawHtml>
	</Theme>;
});