import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, StackItem, Stack, Section, Override } from "@quarkly/components";
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
		<Components.ChartPage display="flex" align-items="center" justify-content="center" />
		<Box />
		<Text margin="16px 0px 16px 50px" font="--h2Minobr">
			Карта России
		</Text>
		<Box height="400px">
			<div id="5ea125cc-21f7-401e-adfb-003960b4c4f0" />
			<div id="a9bfa545-420c-4036-99ab-cfc289b59bd4" />
		</Box>
		<Text margin="16px 0px 16px 50px" font="bold 24px/120% --fontFamily-googleMontserrat">
			Федеральные округа
		</Text>
		<Section>
			<Stack>
				{"    "}
				<StackItem width="25%" display="flex">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block" width="25%">
						Центральный{" "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						Северо-Западный
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						Южный
					</Text>
					{"    "}
				</StackItem>
				<StackItem display="flex" width="25%">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						Северо-Кавказский
					</Text>
					{"    "}
				</StackItem>
				<StackItem display="flex" width="25%">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block" width="25%">
						Приволжский
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem display="flex" width="25%">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						Уральский
					</Text>
					{"    "}
				</StackItem>
				<StackItem display="flex" width="25%">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						Сибирский
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						Дальневосточный
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
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
			<script place={"endOfHead"} rawKey={"607a0eca5caa12c15fe82123"}>
				{"window.PlotlyConfig = {MathJaxConfig: 'local'};"}
			</script>
			<script src={"https://cdn.plot.ly/plotly-latest.min.js"} place={"endOfHead"} rawKey={"607a0ed815bece49fec80856"} />
		</RawHtml>
	</Theme>;
});