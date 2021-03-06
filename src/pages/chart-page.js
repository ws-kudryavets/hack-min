import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
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
		<Components.Hack />
		<Components.Header />
		<Components.GoDash />
		<Text margin="16px 0px 16px 50px" font="--h2Minobr">
			Дефицит/профицит IT кадров по округам России на март-апрель 2021.
		</Text>
		<div class="chart-style" id="5df4747d-a543-4499-9479-180cb1e9447d" />
		<div class="chart-style" id="0603729e-6fc2-4147-a42d-1ad383ea34f3" />
		<Box />
		<div class="chart-style" id="5ea125cc-21f7-401e-adfb-003960b4c4f0" />
		<Text margin="16px 0px 16px 50px" font="bold 24px/120% --fontFamily-googleMontserrat">
			Федеральные округа
		</Text>
		<div class="chart-style" id="2710fd26-0c15-4357-85d0-6961c700434f" />
		<div class="chart-style" id="34a9c352-7ae8-431e-9c00-d8165caebf5b" />
		<div class="chart-style" id="2531717d-670f-40e0-ac5e-8200d8c67e57" />
		<div class="chart-style" id="45c4f6fd-400f-418d-a535-943bd77d1e05" />
		<div class="chart-style" id="f27023b2-39b4-4a3b-982c-8f7881f95b86" />
		<div class="chart-style" id="cb9bb09b-fe5e-4ce7-9f4d-ab15b622bcdb" />
		<div class="chart-style" id="a7cfd1c1-87a9-448b-ac91-ea55c497af19" />
		<div class="chart-style" id="1affe2b2-1980-4221-b48b-4576b2a391ea" />
		<Components.Footer>
			<Override slot="image" width="100%" />
		</Components.Footer>
		<Components.EmbedJS />
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
			<script src={"https://cdn.plot.ly/plotly-latest.min.js"} place={"endOfHead"} rawKey={"607b38e3cb6f61d825aac5b8"} />
			<style place={"endOfHead"} rawKey={"607b491ce4497f8ba39e6a65"}>
				{".chart-style {\nheight: 100vh;\n}"}
			</style>
			<script src={"https://cdn.plot.ly/plotly-latest.min.js"} place={"endOfHead"} rawKey={"607b353e7343674b423a53f8"} />
			<script place={"endOfHead"} rawKey={"607b35570effe8d58a158763"}>
				{"window.PlotlyConfig = {MathJaxConfig: 'local'};"}
			</script>
			<style place={"endOfHead"} rawKey={"607b41e62f3bdd9406dcb8d3"}>
				{".chart-style {\nheight: 100vh;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});