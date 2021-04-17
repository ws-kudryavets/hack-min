import React from "react";
import theme from "theme";
import { Theme, Link, Text, Strong, Input, Box, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, StackItem, Override, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"form"} />
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
		<Components.Header />
		<Section color="--dark">
			<Text as="h2" font="--h2Minobr" md-font="--headline2" margin="20px 0 0 0">
				Сведения о численности обучающихся
			</Text>
			<Stack margin="20px -16px -16px -16px" font="--minobrbold" quarkly-title="stroke">
				{"    "}
				<StackItem width="50%" display="flex" flex="20">
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						<Strong>
							Код учебного заведения
						</Strong>
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<Input font="--liadMinobr" padding="10px 16px 10px 16" height="50px" />
				<StackItem width="50%" display="flex" flex="10">
					<Override slot="StackItemContent" font="--liadMinobr" />
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						{" "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" flex="10">
					<Override slot="StackItemContent" font="--liadMinobr" />
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						{" "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" flex="10">
					<Override slot="StackItemContent" font="--liadMinobr" />
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						{"  "}
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<Box flex="50" height="50px" margin="0px 0px 40px 0px" />
			<Stack margin="20px -16px -16px -16px" font="--minobrbold" quarkly-title="head">
				{"    "}
				<StackItem width="50%" display="flex" flex="20">
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						Показатель
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" flex="10">
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						Всего обучающихся
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" flex="10">
					<Override slot="StackItemContent" font="--liadMinobr" />
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						На очной форме обучения
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" flex="10">
					<Override slot="StackItemContent" font="--liadMinobr" />
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						Расчётная численность
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" flex="10">
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						Среднегодовая численность обучающихся
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<Stack margin="20px -16px -16px -16px" font="--minobrbold">
				{"    "}
				<StackItem width="50%" display="flex" flex="20" padding="0 16px 16px 16px">
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						<Strong>
							Образовательные программы: высшего образования (бакалавриат, специалитет, магистратура)
						</Strong>
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<Input font="--liadMinobr" padding="10px 16px 10px 16" height="50px" />
				<Input font="--liadMinobr" padding="10px 16px 10px 16" height="50px" />
				<Input font="--liadMinobr" padding="10px 16px 10px 16" height="50px" />
				<Input font="--liadMinobr" padding="10px 16px 10px 16" height="50px" />
			</Stack>
			<Stack margin="20px -16px -16px -16px" font="--minobrbold" quarkly-title="stroke">
				{"    "}
				<StackItem width="50%" display="flex" flex="20">
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						Программы бакалавриата
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<Input font="--liadMinobr" padding="10px 16px 10px 16" height="50px" />
				<StackItem width="50%" display="flex" flex="10">
					<Override slot="StackItemContent" font="--liadMinobr" />
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						{" "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" flex="10">
					<Override slot="StackItemContent" font="--liadMinobr" />
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						{"  "}
					</Text>
					{"    "}
				</StackItem>
				<Input font="--liadMinobr" padding="10px 16px 10px 16" height="50px" />
			</Stack>
			<Stack margin="20px -16px -16px -16px" font="--minobrbold" quarkly-title="stroke">
				{"    "}
				<StackItem width="50%" display="flex" flex="20">
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						Программы специалитета
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<Input font="--liadMinobr" padding="10px 16px 10px 16" height="50px" />
				<StackItem width="50%" display="flex" flex="10">
					<Override slot="StackItemContent" font="--liadMinobr" />
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						{" "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" flex="10">
					<Override slot="StackItemContent" font="--liadMinobr" />
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						{"  "}
					</Text>
					{"    "}
				</StackItem>
				<Input font="--liadMinobr" padding="10px 16px 10px 16" height="50px" />
			</Stack>
			<Stack margin="20px -16px -16px -16px" font="--minobrbold" quarkly-title="stroke">
				{"    "}
				<StackItem width="50%" display="flex" flex="20">
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						Программы магистратуры
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<Input font="--liadMinobr" padding="10px 16px 10px 16" height="50px" />
				<StackItem width="50%" display="flex" flex="10">
					<Override slot="StackItemContent" font="--liadMinobr" />
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						{" "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" flex="10">
					<Override slot="StackItemContent" font="--liadMinobr" />
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						{"  "}
					</Text>
					{"    "}
				</StackItem>
				<Input font="--liadMinobr" padding="10px 16px 10px 16" height="50px" />
			</Stack>
			<Stack margin="20px -16px -16px -16px" font="--minobrbold">
				{"    "}
				<StackItem width="50%" display="flex" flex="20" padding="0 16px 16px 16px">
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						<Strong>
							Образовательные программы среднего образования
						</Strong>
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<Input font="--liadMinobr" padding="10px 16px 10px 16" height="50px" />
				<Input font="--liadMinobr" padding="10px 16px 10px 16" height="50px" />
				<Input font="--liadMinobr" padding="10px 16px 10px 16" height="50px" />
				<Input font="--liadMinobr" padding="10px 16px 10px 16" height="50px" />
			</Stack>
			<Stack margin="20px -16px -16px -16px" font="--minobrbold" quarkly-title="stroke">
				{"    "}
				<StackItem width="50%" display="flex" flex="20">
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						Из них программы подготовки квалифицированных рабочих, служащих
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<Input font="--liadMinobr" padding="10px 16px 10px 16" height="50px" />
				<StackItem width="50%" display="flex" flex="10">
					<Override slot="StackItemContent" font="--liadMinobr" />
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						{" "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" flex="10">
					<Override slot="StackItemContent" font="--liadMinobr" />
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						{"  "}
					</Text>
					{"    "}
				</StackItem>
				<Input font="--liadMinobr" padding="10px 16px 10px 16" height="50px" />
			</Stack>
			<Stack margin="20px -16px -16px -16px" font="--minobrbold" quarkly-title="stroke">
				{"    "}
				<StackItem width="50%" display="flex" flex="20">
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						Специалистов среднего звена
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<Input font="--liadMinobr" padding="10px 16px 10px 16" height="50px" />
				<StackItem width="50%" display="flex" flex="10">
					<Override slot="StackItemContent" font="--liadMinobr" />
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						{" "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" flex="10">
					<Override slot="StackItemContent" font="--liadMinobr" />
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						{"  "}
					</Text>
					{"    "}
				</StackItem>
				<Input font="--liadMinobr" padding="10px 16px 10px 16" height="50px" />
			</Stack>
			<Stack margin="20px -16px -16px -16px" font="--minobrbold" quarkly-title="stroke">
				{"    "}
				<StackItem width="50%" display="flex" flex="20">
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						Программы подготовки научно-педагогических кадров в аспирантуре, программы ординатуры, программы ассистентуры-стажировки
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<Input font="--liadMinobr" padding="10px 16px 10px 16" height="50px" />
				<StackItem width="50%" display="flex" flex="10">
					<Override slot="StackItemContent" font="--liadMinobr" />
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						{" "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" flex="10">
					<Override slot="StackItemContent" font="--liadMinobr" />
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						{"  "}
					</Text>
					{"    "}
				</StackItem>
				<Input font="--liadMinobr" padding="10px 16px 10px 16" height="50px" />
			</Stack>
			<Stack margin="20px -16px -16px -16px" font="--minobrbold" quarkly-title="stroke">
				{"    "}
				<StackItem width="50%" display="flex" flex="20">
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						Программы профессионального обучения
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" flex="10">
					<Override slot="StackItemContent" font="--liadMinobr" />
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						{" "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" flex="10">
					<Override slot="StackItemContent" font="--liadMinobr" />
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						{" "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" flex="10">
					<Override slot="StackItemContent" font="--liadMinobr" />
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						{"  "}
					</Text>
					{"    "}
				</StackItem>
				<Input font="--liadMinobr" padding="10px 16px 10px 16" height="50px" />
			</Stack>
			<Stack margin="20px -16px -16px -16px" font="--minobrbold" quarkly-title="stroke">
				{"    "}
				<StackItem width="50%" display="flex" flex="20">
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						Дополнительные профессиональные программы
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" flex="10">
					<Override slot="StackItemContent" font="--liadMinobr" />
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						{" "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" flex="10">
					<Override slot="StackItemContent" font="--liadMinobr" />
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						{" "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" flex="10">
					<Override slot="StackItemContent" font="--liadMinobr" />
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						{"  "}
					</Text>
					{"    "}
				</StackItem>
				<Input font="--liadMinobr" padding="10px 16px 10px 16" height="50px" />
			</Stack>
			<Button>
				Button
			</Button>
		</Section>
		<Components.Footer />
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
			<script place={"endOfBody"} rawKey={"607b24e2d02b1d71f54d3d75"}>
				{"if (document.getElementById(\"2710fd26-0c15-4357-85d0-6961c700434f\")) {\n                    Plotly.newPlot(\n                        '2710fd26-0c15-4357-85d0-6961c700434f',\n                        [{\"alignmentgroup\": \"True\", \"customdata\": [[\"\\u041c\\u043e\\u0441\\u043a\\u0432\\u0430\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", 86], [\"\\u041c\\u043e\\u0441\\u043a\\u0432\\u0430\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", 87], [\"\\u041c\\u043e\\u0441\\u043a\\u0432\\u0430\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", 86], [\"\\u041c\\u043e\\u0441\\u043a\\u0432\\u0430\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0435\\u0442\\u0438\", 77], [\"\\u041c\\u043e\\u0441\\u043a\\u0432\\u0430\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", 89], [\"\\u041c\\u043e\\u0441\\u043a\\u0432\\u0430\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 99], [\"\\u041c\\u043e\\u0441\\u043a\\u0432\\u0430\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 99], [\"\\u041c\\u043e\\u0441\\u043a\\u0432\\u0430\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\", 99], [\"\\u041c\\u043e\\u0441\\u043a\\u0432\\u0430\", \"\\u0412\\u0435\\u0431-\\u043c\\u0430\\u0441\\u0442\\u0435\\u0440\", 99]], \"hovertemplate\": \"city=%{customdata[0]}<br>profession=%{customdata[1]}<br>search hits score=%{customdata[2]}<extra></extra>\", \"legendgroup\": \"\\u041c\\u043e\\u0441\\u043a\\u0432\\u0430\", \"marker\": {\"color\": \"#636efa\"}, \"name\": \"\\u041c\\u043e\\u0441\\u043a\\u0432\\u0430\", \"offsetgroup\": \"\\u041c\\u043e\\u0441\\u043a\\u0432\\u0430\", \"orientation\": \"v\", \"showlegend\": true, \"textposition\": \"auto\", \"type\": \"bar\", \"x\": [\"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0435\\u0442\\u0438\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\", \"\\u0412\\u0435\\u0431-\\u043c\\u0430\\u0441\\u0442\\u0435\\u0440\"], \"xaxis\": \"x\", \"y\": [86, 87, 86, 77, 89, 99, 99, 99, 99], \"yaxis\": \"y\"}, {\"alignmentgroup\": \"True\", \"customdata\": [[\"\\u0412\\u043e\\u0440\\u043e\\u043d\\u0435\\u0436\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", 76], [\"\\u0412\\u043e\\u0440\\u043e\\u043d\\u0435\\u0436\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", 99], [\"\\u0412\\u043e\\u0440\\u043e\\u043d\\u0435\\u0436\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0435\\u0442\\u0438\", 71], [\"\\u0412\\u043e\\u0440\\u043e\\u043d\\u0435\\u0436\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", 99], [\"\\u0412\\u043e\\u0440\\u043e\\u043d\\u0435\\u0436\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 89], [\"\\u0412\\u043e\\u0440\\u043e\\u043d\\u0435\\u0436\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 93], [\"\\u0412\\u043e\\u0440\\u043e\\u043d\\u0435\\u0436\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\", 99]], \"hovertemplate\": \"city=%{customdata[0]}<br>profession=%{customdata[1]}<br>search hits score=%{customdata[2]}<extra></extra>\", \"legendgroup\": \"\\u0412\\u043e\\u0440\\u043e\\u043d\\u0435\\u0436\", \"marker\": {\"color\": \"#EF553B\"}, \"name\": \"\\u0412\\u043e\\u0440\\u043e\\u043d\\u0435\\u0436\", \"offsetgroup\": \"\\u0412\\u043e\\u0440\\u043e\\u043d\\u0435\\u0436\", \"orientation\": \"v\", \"showlegend\": true, \"textposition\": \"auto\", \"type\": \"bar\", \"x\": [\"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0435\\u0442\\u0438\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\"], \"xaxis\": \"x\", \"y\": [76, 99, 71, 99, 89, 93, 99], \"yaxis\": \"y\"}, {\"alignmentgroup\": \"True\", \"customdata\": [[\"\\u042f\\u0440\\u043e\\u0441\\u043b\\u0430\\u0432\\u043b\\u044c\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", 68], [\"\\u042f\\u0440\\u043e\\u0441\\u043b\\u0430\\u0432\\u043b\\u044c\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", 82], [\"\\u042f\\u0440\\u043e\\u0441\\u043b\\u0430\\u0432\\u043b\\u044c\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0435\\u0442\\u0438\", 56], [\"\\u042f\\u0440\\u043e\\u0441\\u043b\\u0430\\u0432\\u043b\\u044c\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", 99], [\"\\u042f\\u0440\\u043e\\u0441\\u043b\\u0430\\u0432\\u043b\\u044c\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 90], [\"\\u042f\\u0440\\u043e\\u0441\\u043b\\u0430\\u0432\\u043b\\u044c\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 87], [\"\\u042f\\u0440\\u043e\\u0441\\u043b\\u0430\\u0432\\u043b\\u044c\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\", 99]], \"hovertemplate\": \"city=%{customdata[0]}<br>profession=%{customdata[1]}<br>search hits score=%{customdata[2]}<extra></extra>\", \"legendgroup\": \"\\u042f\\u0440\\u043e\\u0441\\u043b\\u0430\\u0432\\u043b\\u044c\", \"marker\": {\"color\": \"#00cc96\"}, \"name\": \"\\u042f\\u0440\\u043e\\u0441\\u043b\\u0430\\u0432\\u043b\\u044c\", \"offsetgroup\": \"\\u042f\\u0440\\u043e\\u0441\\u043b\\u0430\\u0432\\u043b\\u044c\", \"orientation\": \"v\", \"showlegend\": true, \"textposition\": \"auto\", \"type\": \"bar\", \"x\": [\"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0435\\u0442\\u0438\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\"], \"xaxis\": \"x\", \"y\": [68, 82, 56, 99, 90, 87, 99], \"yaxis\": \"y\"}, {\"alignmentgroup\": \"True\", \"customdata\": [[\"\\u0420\\u044f\\u0437\\u0430\\u043d\\u044c\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", 53], [\"\\u0420\\u044f\\u0437\\u0430\\u043d\\u044c\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", 89], [\"\\u0420\\u044f\\u0437\\u0430\\u043d\\u044c\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", 99], [\"\\u0420\\u044f\\u0437\\u0430\\u043d\\u044c\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 65], [\"\\u0420\\u044f\\u0437\\u0430\\u043d\\u044c\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 99], [\"\\u0420\\u044f\\u0437\\u0430\\u043d\\u044c\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\", 99]], \"hovertemplate\": \"city=%{customdata[0]}<br>profession=%{customdata[1]}<br>search hits score=%{customdata[2]}<extra></extra>\", \"legendgroup\": \"\\u0420\\u044f\\u0437\\u0430\\u043d\\u044c\", \"marker\": {\"color\": \"#ab63fa\"}, \"name\": \"\\u0420\\u044f\\u0437\\u0430\\u043d\\u044c\", \"offsetgroup\": \"\\u0420\\u044f\\u0437\\u0430\\u043d\\u044c\", \"orientation\": \"v\", \"showlegend\": true, \"textposition\": \"auto\", \"type\": \"bar\", \"x\": [\"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\"], \"xaxis\": \"x\", \"y\": [53, 89, 99, 65, 99, 99], \"yaxis\": \"y\"}, {\"alignmentgroup\": \"True\", \"customdata\": [[\"\\u041b\\u0438\\u043f\\u0435\\u0446\\u043a\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", 48], [\"\\u041b\\u0438\\u043f\\u0435\\u0446\\u043a\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", 91], [\"\\u041b\\u0438\\u043f\\u0435\\u0446\\u043a\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", 99], [\"\\u041b\\u0438\\u043f\\u0435\\u0446\\u043a\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 70], [\"\\u041b\\u0438\\u043f\\u0435\\u0446\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 89], [\"\\u041b\\u0438\\u043f\\u0435\\u0446\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\", 99]], \"hovertemplate\": \"city=%{customdata[0]}<br>profession=%{customdata[1]}<br>search hits score=%{customdata[2]}<extra></extra>\", \"legendgroup\": \"\\u041b\\u0438\\u043f\\u0435\\u0446\\u043a\", \"marker\": {\"color\": \"#FFA15A\"}, \"name\": \"\\u041b\\u0438\\u043f\\u0435\\u0446\\u043a\", \"offsetgroup\": \"\\u041b\\u0438\\u043f\\u0435\\u0446\\u043a\", \"orientation\": \"v\", \"showlegend\": true, \"textposition\": \"auto\", \"type\": \"bar\", \"x\": [\"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\"], \"xaxis\": \"x\", \"y\": [48, 91, 99, 70, 89, 99], \"yaxis\": \"y\"}, {\"alignmentgroup\": \"True\", \"customdata\": [[\"\\u0422\\u0443\\u043b\\u0430\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", 61], [\"\\u0422\\u0443\\u043b\\u0430\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", 72], [\"\\u0422\\u0443\\u043b\\u0430\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", 99], [\"\\u0422\\u0443\\u043b\\u0430\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 98], [\"\\u0422\\u0443\\u043b\\u0430\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 67], [\"\\u0422\\u0443\\u043b\\u0430\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\", 99]], \"hovertemplate\": \"city=%{customdata[0]}<br>profession=%{customdata[1]}<br>search hits score=%{customdata[2]}<extra></extra>\", \"legendgroup\": \"\\u0422\\u0443\\u043b\\u0430\", \"marker\": {\"color\": \"#19d3f3\"}, \"name\": \"\\u0422\\u0443\\u043b\\u0430\", \"offsetgroup\": \"\\u0422\\u0443\\u043b\\u0430\", \"orientation\": \"v\", \"showlegend\": true, \"textposition\": \"auto\", \"type\": \"bar\", \"x\": [\"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\"], \"xaxis\": \"x\", \"y\": [61, 72, 99, 98, 67, 99], \"yaxis\": \"y\"}, {\"alignmentgroup\": \"True\", \"customdata\": [[\"\\u0411\\u0440\\u044f\\u043d\\u0441\\u043a\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", 50], [\"\\u0411\\u0440\\u044f\\u043d\\u0441\\u043a\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", 66], [\"\\u0411\\u0440\\u044f\\u043d\\u0441\\u043a\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", 71], [\"\\u0411\\u0440\\u044f\\u043d\\u0441\\u043a\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 67], [\"\\u0411\\u0440\\u044f\\u043d\\u0441\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 67], [\"\\u0411\\u0440\\u044f\\u043d\\u0441\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\", 99]], \"hovertemplate\": \"city=%{customdata[0]}<br>profession=%{customdata[1]}<br>search hits score=%{customdata[2]}<extra></extra>\", \"legendgroup\": \"\\u0411\\u0440\\u044f\\u043d\\u0441\\u043a\", \"marker\": {\"color\": \"#FF6692\"}, \"name\": \"\\u0411\\u0440\\u044f\\u043d\\u0441\\u043a\", \"offsetgroup\": \"\\u0411\\u0440\\u044f\\u043d\\u0441\\u043a\", \"orientation\": \"v\", \"showlegend\": true, \"textposition\": \"auto\", \"type\": \"bar\", \"x\": [\"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\"], \"xaxis\": \"x\", \"y\": [50, 66, 71, 67, 67, 99], \"yaxis\": \"y\"}, {\"alignmentgroup\": \"True\", \"customdata\": [[\"\\u041a\\u0443\\u0440\\u0441\\u043a\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", 64], [\"\\u041a\\u0443\\u0440\\u0441\\u043a\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", 96], [\"\\u041a\\u0443\\u0440\\u0441\\u043a\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", 99], [\"\\u041a\\u0443\\u0440\\u0441\\u043a\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 95], [\"\\u041a\\u0443\\u0440\\u0441\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 82], [\"\\u041a\\u0443\\u0440\\u0441\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\", 99]], \"hovertemplate\": \"city=%{customdata[0]}<br>profession=%{customdata[1]}<br>search hits score=%{customdata[2]}<extra></extra>\", \"legendgroup\": \"\\u041a\\u0443\\u0440\\u0441\\u043a\", \"marker\": {\"color\": \"#B6E880\"}, \"name\": \"\\u041a\\u0443\\u0440\\u0441\\u043a\", \"offsetgroup\": \"\\u041a\\u0443\\u0440\\u0441\\u043a\", \"orientation\": \"v\", \"showlegend\": true, \"textposition\": \"auto\", \"type\": \"bar\", \"x\": [\"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\"], \"xaxis\": \"x\", \"y\": [64, 96, 99, 95, 82, 99], \"yaxis\": \"y\"}, {\"alignmentgroup\": \"True\", \"customdata\": [[\"\\u0418\\u0432\\u0430\\u043d\\u043e\\u0432\\u043e\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", 72], [\"\\u0418\\u0432\\u0430\\u043d\\u043e\\u0432\\u043e\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", 71], [\"\\u0418\\u0432\\u0430\\u043d\\u043e\\u0432\\u043e\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", 86], [\"\\u0418\\u0432\\u0430\\u043d\\u043e\\u0432\\u043e\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 75], [\"\\u0418\\u0432\\u0430\\u043d\\u043e\\u0432\\u043e\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 82], [\"\\u0418\\u0432\\u0430\\u043d\\u043e\\u0432\\u043e\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\", 99]], \"hovertemplate\": \"city=%{customdata[0]}<br>profession=%{customdata[1]}<br>search hits score=%{customdata[2]}<extra></extra>\", \"legendgroup\": \"\\u0418\\u0432\\u0430\\u043d\\u043e\\u0432\\u043e\", \"marker\": {\"color\": \"#FF97FF\"}, \"name\": \"\\u0418\\u0432\\u0430\\u043d\\u043e\\u0432\\u043e\", \"offsetgroup\": \"\\u0418\\u0432\\u0430\\u043d\\u043e\\u0432\\u043e\", \"orientation\": \"v\", \"showlegend\": true, \"textposition\": \"auto\", \"type\": \"bar\", \"x\": [\"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\"], \"xaxis\": \"x\", \"y\": [72, 71, 86, 75, 82, 99], \"yaxis\": \"y\"}, {\"alignmentgroup\": \"True\", \"customdata\": [[\"\\u0422\\u0432\\u0435\\u0440\\u044c\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", 47], [\"\\u0422\\u0432\\u0435\\u0440\\u044c\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", 77], [\"\\u0422\\u0432\\u0435\\u0440\\u044c\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", 77], [\"\\u0422\\u0432\\u0435\\u0440\\u044c\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 77], [\"\\u0422\\u0432\\u0435\\u0440\\u044c\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 94], [\"\\u0422\\u0432\\u0435\\u0440\\u044c\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\", 99]], \"hovertemplate\": \"city=%{customdata[0]}<br>profession=%{customdata[1]}<br>search hits score=%{customdata[2]}<extra></extra>\", \"legendgroup\": \"\\u0422\\u0432\\u0435\\u0440\\u044c\", \"marker\": {\"color\": \"#FECB52\"}, \"name\": \"\\u0422\\u0432\\u0435\\u0440\\u044c\", \"offsetgroup\": \"\\u0422\\u0432\\u0435\\u0440\\u044c\", \"orientation\": \"v\", \"showlegend\": true, \"textposition\": \"auto\", \"type\": \"bar\", \"x\": [\"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\"], \"xaxis\": \"x\", \"y\": [47, 77, 77, 77, 94, 99], \"yaxis\": \"y\"}, {\"alignmentgroup\": \"True\", \"customdata\": [[\"\\u0411\\u0435\\u043b\\u0433\\u043e\\u0440\\u043e\\u0434\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", 67], [\"\\u0411\\u0435\\u043b\\u0433\\u043e\\u0440\\u043e\\u0434\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", 90], [\"\\u0411\\u0435\\u043b\\u0433\\u043e\\u0440\\u043e\\u0434\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", 99], [\"\\u0411\\u0435\\u043b\\u0433\\u043e\\u0440\\u043e\\u0434\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 99], [\"\\u0411\\u0435\\u043b\\u0433\\u043e\\u0440\\u043e\\u0434\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 99], [\"\\u0411\\u0435\\u043b\\u0433\\u043e\\u0440\\u043e\\u0434\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\", 99]], \"hovertemplate\": \"city=%{customdata[0]}<br>profession=%{customdata[1]}<br>search hits score=%{customdata[2]}<extra></extra>\", \"legendgroup\": \"\\u0411\\u0435\\u043b\\u0433\\u043e\\u0440\\u043e\\u0434\", \"marker\": {\"color\": \"#636efa\"}, \"name\": \"\\u0411\\u0435\\u043b\\u0433\\u043e\\u0440\\u043e\\u0434\", \"offsetgroup\": \"\\u0411\\u0435\\u043b\\u0433\\u043e\\u0440\\u043e\\u0434\", \"orientation\": \"v\", \"showlegend\": true, \"textposition\": \"auto\", \"type\": \"bar\", \"x\": [\"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\"], \"xaxis\": \"x\", \"y\": [67, 90, 99, 99, 99, 99], \"yaxis\": \"y\"}, {\"alignmentgroup\": \"True\", \"customdata\": [[\"\\u0412\\u043b\\u0430\\u0434\\u0438\\u043c\\u0438\\u0440\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", 67], [\"\\u0412\\u043b\\u0430\\u0434\\u0438\\u043c\\u0438\\u0440\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", 99], [\"\\u0412\\u043b\\u0430\\u0434\\u0438\\u043c\\u0438\\u0440\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", 99], [\"\\u0412\\u043b\\u0430\\u0434\\u0438\\u043c\\u0438\\u0440\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 89], [\"\\u0412\\u043b\\u0430\\u0434\\u0438\\u043c\\u0438\\u0440\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 99], [\"\\u0412\\u043b\\u0430\\u0434\\u0438\\u043c\\u0438\\u0440\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\", 99]], \"hovertemplate\": \"city=%{customdata[0]}<br>profession=%{customdata[1]}<br>search hits score=%{customdata[2]}<extra></extra>\", \"legendgroup\": \"\\u0412\\u043b\\u0430\\u0434\\u0438\\u043c\\u0438\\u0440\", \"marker\": {\"color\": \"#EF553B\"}, \"name\": \"\\u0412\\u043b\\u0430\\u0434\\u0438\\u043c\\u0438\\u0440\", \"offsetgroup\": \"\\u0412\\u043b\\u0430\\u0434\\u0438\\u043c\\u0438\\u0440\", \"orientation\": \"v\", \"showlegend\": true, \"textposition\": \"auto\", \"type\": \"bar\", \"x\": [\"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\"], \"xaxis\": \"x\", \"y\": [67, 99, 99, 89, 99, 99], \"yaxis\": \"y\"}, {\"alignmentgroup\": \"True\", \"customdata\": [[\"\\u0421\\u043c\\u043e\\u043b\\u0435\\u043d\\u0441\\u043a\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", 48], [\"\\u0421\\u043c\\u043e\\u043b\\u0435\\u043d\\u0441\\u043a\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", 80], [\"\\u0421\\u043c\\u043e\\u043b\\u0435\\u043d\\u0441\\u043a\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", 99], [\"\\u0421\\u043c\\u043e\\u043b\\u0435\\u043d\\u0441\\u043a\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 71], [\"\\u0421\\u043c\\u043e\\u043b\\u0435\\u043d\\u0441\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 89], [\"\\u0421\\u043c\\u043e\\u043b\\u0435\\u043d\\u0441\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\", 99]], \"hovertemplate\": \"city=%{customdata[0]}<br>profession=%{customdata[1]}<br>search hits score=%{customdata[2]}<extra></extra>\", \"legendgroup\": \"\\u0421\\u043c\\u043e\\u043b\\u0435\\u043d\\u0441\\u043a\", \"marker\": {\"color\": \"#00cc96\"}, \"name\": \"\\u0421\\u043c\\u043e\\u043b\\u0435\\u043d\\u0441\\u043a\", \"offsetgroup\": \"\\u0421\\u043c\\u043e\\u043b\\u0435\\u043d\\u0441\\u043a\", \"orientation\": \"v\", \"showlegend\": true, \"textposition\": \"auto\", \"type\": \"bar\", \"x\": [\"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\"], \"xaxis\": \"x\", \"y\": [48, 80, 99, 71, 89, 99], \"yaxis\": \"y\"}, {\"alignmentgroup\": \"True\", \"customdata\": [[\"\\u041a\\u0430\\u043b\\u0443\\u0433\\u0430\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", 52], [\"\\u041a\\u0430\\u043b\\u0443\\u0433\\u0430\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", 73], [\"\\u041a\\u0430\\u043b\\u0443\\u0433\\u0430\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", 85], [\"\\u041a\\u0430\\u043b\\u0443\\u0433\\u0430\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 61], [\"\\u041a\\u0430\\u043b\\u0443\\u0433\\u0430\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 78], [\"\\u041a\\u0430\\u043b\\u0443\\u0433\\u0430\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\", 99]], \"hovertemplate\": \"city=%{customdata[0]}<br>profession=%{customdata[1]}<br>search hits score=%{customdata[2]}<extra></extra>\", \"legendgroup\": \"\\u041a\\u0430\\u043b\\u0443\\u0433\\u0430\", \"marker\": {\"color\": \"#ab63fa\"}, \"name\": \"\\u041a\\u0430\\u043b\\u0443\\u0433\\u0430\", \"offsetgroup\": \"\\u041a\\u0430\\u043b\\u0443\\u0433\\u0430\", \"orientation\": \"v\", \"showlegend\": true, \"textposition\": \"auto\", \"type\": \"bar\", \"x\": [\"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\"], \"xaxis\": \"x\", \"y\": [52, 73, 85, 61, 78, 99], \"yaxis\": \"y\"}, {\"alignmentgroup\": \"True\", \"customdata\": [[\"\\u041e\\u0440\\u0451\\u043b\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", 42], [\"\\u041e\\u0440\\u0451\\u043b\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", 63], [\"\\u041e\\u0440\\u0451\\u043b\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", 63], [\"\\u041e\\u0440\\u0451\\u043b\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 43], [\"\\u041e\\u0440\\u0451\\u043b\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 62], [\"\\u041e\\u0440\\u0451\\u043b\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\", 99]], \"hovertemplate\": \"city=%{customdata[0]}<br>profession=%{customdata[1]}<br>search hits score=%{customdata[2]}<extra></extra>\", \"legendgroup\": \"\\u041e\\u0440\\u0451\\u043b\", \"marker\": {\"color\": \"#FFA15A\"}, \"name\": \"\\u041e\\u0440\\u0451\\u043b\", \"offsetgroup\": \"\\u041e\\u0440\\u0451\\u043b\", \"orientation\": \"v\", \"showlegend\": true, \"textposition\": \"auto\", \"type\": \"bar\", \"x\": [\"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\"], \"xaxis\": \"x\", \"y\": [42, 63, 63, 43, 62, 99], \"yaxis\": \"y\"}, {\"alignmentgroup\": \"True\", \"customdata\": [[\"\\u0422\\u0430\\u043c\\u0431\\u043e\\u0432\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", 38], [\"\\u0422\\u0430\\u043c\\u0431\\u043e\\u0432\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", 73], [\"\\u0422\\u0430\\u043c\\u0431\\u043e\\u0432\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", 78], [\"\\u0422\\u0430\\u043c\\u0431\\u043e\\u0432\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 50], [\"\\u0422\\u0430\\u043c\\u0431\\u043e\\u0432\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 72], [\"\\u0422\\u0430\\u043c\\u0431\\u043e\\u0432\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\", 99]], \"hovertemplate\": \"city=%{customdata[0]}<br>profession=%{customdata[1]}<br>search hits score=%{customdata[2]}<extra></extra>\", \"legendgroup\": \"\\u0422\\u0430\\u043c\\u0431\\u043e\\u0432\", \"marker\": {\"color\": \"#19d3f3\"}, \"name\": \"\\u0422\\u0430\\u043c\\u0431\\u043e\\u0432\", \"offsetgroup\": \"\\u0422\\u0430\\u043c\\u0431\\u043e\\u0432\", \"orientation\": \"v\", \"showlegend\": true, \"textposition\": \"auto\", \"type\": \"bar\", \"x\": [\"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\"], \"xaxis\": \"x\", \"y\": [38, 73, 78, 50, 72, 99], \"yaxis\": \"y\"}, {\"alignmentgroup\": \"True\", \"customdata\": [[\"\\u041a\\u043e\\u0441\\u0442\\u0440\\u043e\\u043c\\u0430\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", 40], [\"\\u041a\\u043e\\u0441\\u0442\\u0440\\u043e\\u043c\\u0430\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", 80], [\"\\u041a\\u043e\\u0441\\u0442\\u0440\\u043e\\u043c\\u0430\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", 89], [\"\\u041a\\u043e\\u0441\\u0442\\u0440\\u043e\\u043c\\u0430\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 76], [\"\\u041a\\u043e\\u0441\\u0442\\u0440\\u043e\\u043c\\u0430\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 81], [\"\\u041a\\u043e\\u0441\\u0442\\u0440\\u043e\\u043c\\u0430\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\", 99]], \"hovertemplate\": \"city=%{customdata[0]}<br>profession=%{customdata[1]}<br>search hits score=%{customdata[2]}<extra></extra>\", \"legendgroup\": \"\\u041a\\u043e\\u0441\\u0442\\u0440\\u043e\\u043c\\u0430\", \"marker\": {\"color\": \"#FF6692\"}, \"name\": \"\\u041a\\u043e\\u0441\\u0442\\u0440\\u043e\\u043c\\u0430\", \"offsetgroup\": \"\\u041a\\u043e\\u0441\\u0442\\u0440\\u043e\\u043c\\u0430\", \"orientation\": \"v\", \"showlegend\": true, \"textposition\": \"auto\", \"type\": \"bar\", \"x\": [\"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\"], \"xaxis\": \"x\", \"y\": [40, 80, 89, 76, 81, 99], \"yaxis\": \"y\"}, {\"alignmentgroup\": \"True\", \"customdata\": [[\"\\u0421\\u0442\\u0430\\u0440\\u044b\\u0439 \\u041e\\u0441\\u043a\\u043e\\u043b\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", 67], [\"\\u0421\\u0442\\u0430\\u0440\\u044b\\u0439 \\u041e\\u0441\\u043a\\u043e\\u043b\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", 99], [\"\\u0421\\u0442\\u0430\\u0440\\u044b\\u0439 \\u041e\\u0441\\u043a\\u043e\\u043b\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", 52], [\"\\u0421\\u0442\\u0430\\u0440\\u044b\\u0439 \\u041e\\u0441\\u043a\\u043e\\u043b\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 86], [\"\\u0421\\u0442\\u0430\\u0440\\u044b\\u0439 \\u041e\\u0441\\u043a\\u043e\\u043b\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 99], [\"\\u0421\\u0442\\u0430\\u0440\\u044b\\u0439 \\u041e\\u0441\\u043a\\u043e\\u043b\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\", 99]], \"hovertemplate\": \"city=%{customdata[0]}<br>profession=%{customdata[1]}<br>search hits score=%{customdata[2]}<extra></extra>\", \"legendgroup\": \"\\u0421\\u0442\\u0430\\u0440\\u044b\\u0439 \\u041e\\u0441\\u043a\\u043e\\u043b\", \"marker\": {\"color\": \"#B6E880\"}, \"name\": \"\\u0421\\u0442\\u0430\\u0440\\u044b\\u0439 \\u041e\\u0441\\u043a\\u043e\\u043b\", \"offsetgroup\": \"\\u0421\\u0442\\u0430\\u0440\\u044b\\u0439 \\u041e\\u0441\\u043a\\u043e\\u043b\", \"orientation\": \"v\", \"showlegend\": true, \"textposition\": \"auto\", \"type\": \"bar\", \"x\": [\"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\"], \"xaxis\": \"x\", \"y\": [67, 99, 52, 86, 99, 99], \"yaxis\": \"y\"}, {\"alignmentgroup\": \"True\", \"customdata\": [[\"\\u0411\\u0430\\u043b\\u0430\\u0448\\u0438\\u0445\\u0430\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", 36], [\"\\u0411\\u0430\\u043b\\u0430\\u0448\\u0438\\u0445\\u0430\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", 58], [\"\\u0411\\u0430\\u043b\\u0430\\u0448\\u0438\\u0445\\u0430\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", 51], [\"\\u0411\\u0430\\u043b\\u0430\\u0448\\u0438\\u0445\\u0430\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 41], [\"\\u0411\\u0430\\u043b\\u0430\\u0448\\u0438\\u0445\\u0430\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 65], [\"\\u0411\\u0430\\u043b\\u0430\\u0448\\u0438\\u0445\\u0430\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\", 56]], \"hovertemplate\": \"city=%{customdata[0]}<br>profession=%{customdata[1]}<br>search hits score=%{customdata[2]}<extra></extra>\", \"legendgroup\": \"\\u0411\\u0430\\u043b\\u0430\\u0448\\u0438\\u0445\\u0430\", \"marker\": {\"color\": \"#FF97FF\"}, \"name\": \"\\u0411\\u0430\\u043b\\u0430\\u0448\\u0438\\u0445\\u0430\", \"offsetgroup\": \"\\u0411\\u0430\\u043b\\u0430\\u0448\\u0438\\u0445\\u0430\", \"orientation\": \"v\", \"showlegend\": true, \"textposition\": \"auto\", \"type\": \"bar\", \"x\": [\"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\"], \"xaxis\": \"x\", \"y\": [36, 58, 51, 41, 65, 56], \"yaxis\": \"y\"}, {\"alignmentgroup\": \"True\", \"customdata\": [[\"\\u0425\\u0438\\u043c\\u043a\\u0438\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", 44], [\"\\u0425\\u0438\\u043c\\u043a\\u0438\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", 63], [\"\\u0425\\u0438\\u043c\\u043a\\u0438\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", 46], [\"\\u0425\\u0438\\u043c\\u043a\\u0438\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 42], [\"\\u0425\\u0438\\u043c\\u043a\\u0438\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 66], [\"\\u0425\\u0438\\u043c\\u043a\\u0438\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\", 98]], \"hovertemplate\": \"city=%{customdata[0]}<br>profession=%{customdata[1]}<br>search hits score=%{customdata[2]}<extra></extra>\", \"legendgroup\": \"\\u0425\\u0438\\u043c\\u043a\\u0438\", \"marker\": {\"color\": \"#FECB52\"}, \"name\": \"\\u0425\\u0438\\u043c\\u043a\\u0438\", \"offsetgroup\": \"\\u0425\\u0438\\u043c\\u043a\\u0438\", \"orientation\": \"v\", \"showlegend\": true, \"textposition\": \"auto\", \"type\": \"bar\", \"x\": [\"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\"], \"xaxis\": \"x\", \"y\": [44, 63, 46, 42, 66, 98], \"yaxis\": \"y\"}, {\"alignmentgroup\": \"True\", \"customdata\": [[\"\\u0420\\u044b\\u0431\\u0438\\u043d\\u0441\\u043a\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", 34], [\"\\u0420\\u044b\\u0431\\u0438\\u043d\\u0441\\u043a\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", 75], [\"\\u0420\\u044b\\u0431\\u0438\\u043d\\u0441\\u043a\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", 45], [\"\\u0420\\u044b\\u0431\\u0438\\u043d\\u0441\\u043a\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 40], [\"\\u0420\\u044b\\u0431\\u0438\\u043d\\u0441\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 61], [\"\\u0420\\u044b\\u0431\\u0438\\u043d\\u0441\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\", 99]], \"hovertemplate\": \"city=%{customdata[0]}<br>profession=%{customdata[1]}<br>search hits score=%{customdata[2]}<extra></extra>\", \"legendgroup\": \"\\u0420\\u044b\\u0431\\u0438\\u043d\\u0441\\u043a\", \"marker\": {\"color\": \"#636efa\"}, \"name\": \"\\u0420\\u044b\\u0431\\u0438\\u043d\\u0441\\u043a\", \"offsetgroup\": \"\\u0420\\u044b\\u0431\\u0438\\u043d\\u0441\\u043a\", \"orientation\": \"v\", \"showlegend\": true, \"textposition\": \"auto\", \"type\": \"bar\", \"x\": [\"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\"], \"xaxis\": \"x\", \"y\": [34, 75, 45, 40, 61, 99], \"yaxis\": \"y\"}, {\"alignmentgroup\": \"True\", \"customdata\": [[\"\\u041f\\u043e\\u0434\\u043e\\u043b\\u044c\\u0441\\u043a\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", 42], [\"\\u041f\\u043e\\u0434\\u043e\\u043b\\u044c\\u0441\\u043a\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", 55], [\"\\u041f\\u043e\\u0434\\u043e\\u043b\\u044c\\u0441\\u043a\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", 49], [\"\\u041f\\u043e\\u0434\\u043e\\u043b\\u044c\\u0441\\u043a\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 39], [\"\\u041f\\u043e\\u0434\\u043e\\u043b\\u044c\\u0441\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 61], [\"\\u041f\\u043e\\u0434\\u043e\\u043b\\u044c\\u0441\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\", 99]], \"hovertemplate\": \"city=%{customdata[0]}<br>profession=%{customdata[1]}<br>search hits score=%{customdata[2]}<extra></extra>\", \"legendgroup\": \"\\u041f\\u043e\\u0434\\u043e\\u043b\\u044c\\u0441\\u043a\", \"marker\": {\"color\": \"#EF553B\"}, \"name\": \"\\u041f\\u043e\\u0434\\u043e\\u043b\\u044c\\u0441\\u043a\", \"offsetgroup\": \"\\u041f\\u043e\\u0434\\u043e\\u043b\\u044c\\u0441\\u043a\", \"orientation\": \"v\", \"showlegend\": true, \"textposition\": \"auto\", \"type\": \"bar\", \"x\": [\"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\"], \"xaxis\": \"x\", \"y\": [42, 55, 49, 39, 61, 99], \"yaxis\": \"y\"}, {\"alignmentgroup\": \"True\", \"customdata\": [[\"\\u041a\\u043e\\u0440\\u043e\\u043b\\u0435\\u0432\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", 45], [\"\\u041a\\u043e\\u0440\\u043e\\u043b\\u0435\\u0432\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", 79], [\"\\u041a\\u043e\\u0440\\u043e\\u043b\\u0435\\u0432\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", 54], [\"\\u041a\\u043e\\u0440\\u043e\\u043b\\u0435\\u0432\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 41], [\"\\u041a\\u043e\\u0440\\u043e\\u043b\\u0435\\u0432\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", 79], [\"\\u041a\\u043e\\u0440\\u043e\\u043b\\u0435\\u0432\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\", 83]], \"hovertemplate\": \"city=%{customdata[0]}<br>profession=%{customdata[1]}<br>search hits score=%{customdata[2]}<extra></extra>\", \"legendgroup\": \"\\u041a\\u043e\\u0440\\u043e\\u043b\\u0435\\u0432\", \"marker\": {\"color\": \"#00cc96\"}, \"name\": \"\\u041a\\u043e\\u0440\\u043e\\u043b\\u0435\\u0432\", \"offsetgroup\": \"\\u041a\\u043e\\u0440\\u043e\\u043b\\u0435\\u0432\", \"orientation\": \"v\", \"showlegend\": true, \"textposition\": \"auto\", \"type\": \"bar\", \"x\": [\"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0431\\u0430\\u0437 \\u0434\\u0430\\u043d\\u043d\\u044b\\u0445\", \"\\u0410\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0430\\u0442\\u043e\\u0440 \\u0441\\u0430\\u0439\\u0442\\u0430\", \"\\u0410\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a \\u0431\\u0438\\u0437\\u043d\\u0435\\u0441 \\u043f\\u0440\\u043e\\u0446\\u0435\\u0441\\u0441\\u043e\\u0432\", \"\\u0421\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u044b\\u0439 \\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0411\\u0438\\u0437\\u043d\\u0435\\u0441-\\u0430\\u043d\\u0430\\u043b\\u0438\\u0442\\u0438\\u043a\", \"\\u0412\\u0435\\u0431-\\u0434\\u0438\\u0437\\u0430\\u0439\\u043d\\u0435\\u0440\"], \"xaxis\": \"x\", \"y\": [45, 79, 54, 41, 79, 83], \"yaxis\": \"y\"}],\n                        {\"barmode\": \"relative\", \"legend\": {\"orientation\": \"h\", \"title\": {\"text\": \"city\"}, \"tracegroupgap\": 0, \"x\": 0.5, \"xanchor\": \"center\", \"y\": -0.1, \"yanchor\": \"top\"}, \"polar\": {\"radialaxis\": {\"linewidth\": 0, \"showticklabels\": false, \"ticks\": \"\"}}, \"template\": {\"data\": {\"bar\": [{\"error_x\": {\"color\": \"#2a3f5f\"}, \"error_y\": {\"color\": \"#2a3f5f\"}, \"marker\": {\"line\": {\"color\": \"#E5ECF6\", \"width\": 0.5}}, \"type\": \"bar\"}], \"barpolar\": [{\"marker\": {\"line\": {\"color\": \"#E5ECF6\", \"width\": 0.5}}, \"type\": \"barpolar\"}], \"carpet\": [{\"aaxis\": {\"endlinecolor\": \"#2a3f5f\", \"gridcolor\": \"white\", \"linecolor\": \"white\", \"minorgridcolor\": \"white\", \"startlinecolor\": \"#2a3f5f\"}, \"baxis\": {\"endlinecolor\": \"#2a3f5f\", \"gridcolor\": \"white\", \"linecolor\": \"white\", \"minorgridcolor\": \"white\", \"startlinecolor\": \"#2a3f5f\"}, \"type\": \"carpet\"}], \"choropleth\": [{\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}, \"type\": \"choropleth\"}], \"contour\": [{\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}, \"colorscale\": [[0.0, \"#0d0887\"], [0.1111111111111111, \"#46039f\"], [0.2222222222222222, \"#7201a8\"], [0.3333333333333333, \"#9c179e\"], [0.4444444444444444, \"#bd3786\"], [0.5555555555555556, \"#d8576b\"], [0.6666666666666666, \"#ed7953\"], [0.7777777777777778, \"#fb9f3a\"], [0.8888888888888888, \"#fdca26\"], [1.0, \"#f0f921\"]], \"type\": \"contour\"}], \"contourcarpet\": [{\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}, \"type\": \"contourcarpet\"}], \"heatmap\": [{\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}, \"colorscale\": [[0.0, \"#0d0887\"], [0.1111111111111111, \"#46039f\"], [0.2222222222222222, \"#7201a8\"], [0.3333333333333333, \"#9c179e\"], [0.4444444444444444, \"#bd3786\"], [0.5555555555555556, \"#d8576b\"], [0.6666666666666666, \"#ed7953\"], [0.7777777777777778, \"#fb9f3a\"], [0.8888888888888888, \"#fdca26\"], [1.0, \"#f0f921\"]], \"type\": \"heatmap\"}], \"heatmapgl\": [{\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}, \"colorscale\": [[0.0, \"#0d0887\"], [0.1111111111111111, \"#46039f\"], [0.2222222222222222, \"#7201a8\"], [0.3333333333333333, \"#9c179e\"], [0.4444444444444444, \"#bd3786\"], [0.5555555555555556, \"#d8576b\"], [0.6666666666666666, \"#ed7953\"], [0.7777777777777778, \"#fb9f3a\"], [0.8888888888888888, \"#fdca26\"], [1.0, \"#f0f921\"]], \"type\": \"heatmapgl\"}], \"histogram\": [{\"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}, \"type\": \"histogram\"}], \"histogram2d\": [{\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}, \"colorscale\": [[0.0, \"#0d0887\"], [0.1111111111111111, \"#46039f\"], [0.2222222222222222, \"#7201a8\"], [0.3333333333333333, \"#9c179e\"], [0.4444444444444444, \"#bd3786\"], [0.5555555555555556, \"#d8576b\"], [0.6666666666666666, \"#ed7953\"], [0.7777777777777778, \"#fb9f3a\"], [0.8888888888888888, \"#fdca26\"], [1.0, \"#f0f921\"]], \"type\": \"histogram2d\"}], \"histogram2dcontour\": [{\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}, \"colorscale\": [[0.0, \"#0d0887\"], [0.1111111111111111, \"#46039f\"], [0.2222222222222222, \"#7201a8\"], [0.3333333333333333, \"#9c179e\"], [0.4444444444444444, \"#bd3786\"], [0.5555555555555556, \"#d8576b\"], [0.6666666666666666, \"#ed7953\"], [0.7777777777777778, \"#fb9f3a\"], [0.8888888888888888, \"#fdca26\"], [1.0, \"#f0f921\"]], \"type\": \"histogram2dcontour\"}], \"mesh3d\": [{\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}, \"type\": \"mesh3d\"}], \"parcoords\": [{\"line\": {\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}, \"type\": \"parcoords\"}], \"pie\": [{\"automargin\": true, \"type\": \"pie\"}], \"scatter\": [{\"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}, \"type\": \"scatter\"}], \"scatter3d\": [{\"line\": {\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}, \"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}, \"type\": \"scatter3d\"}], \"scattercarpet\": [{\"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}, \"type\": \"scattercarpet\"}], \"scattergeo\": [{\"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}, \"type\": \"scattergeo\"}], \"scattergl\": [{\"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}, \"type\": \"scattergl\"}], \"scattermapbox\": [{\"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}, \"type\": \"scattermapbox\"}], \"scatterpolar\": [{\"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}, \"type\": \"scatterpolar\"}], \"scatterpolargl\": [{\"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}, \"type\": \"scatterpolargl\"}], \"scatterternary\": [{\"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}, \"type\": \"scatterternary\"}], \"surface\": [{\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}, \"colorscale\": [[0.0, \"#0d0887\"], [0.1111111111111111, \"#46039f\"], [0.2222222222222222, \"#7201a8\"], [0.3333333333333333, \"#9c179e\"], [0.4444444444444444, \"#bd3786\"], [0.5555555555555556, \"#d8576b\"], [0.6666666666666666, \"#ed7953\"], [0.7777777777777778, \"#fb9f3a\"], [0.8888888888888888, \"#fdca26\"], [1.0, \"#f0f921\"]], \"type\": \"surface\"}], \"table\": [{\"cells\": {\"fill\": {\"color\": \"#EBF0F8\"}, \"line\": {\"color\": \"white\"}}, \"header\": {\"fill\": {\"color\": \"#C8D4E3\"}, \"line\": {\"color\": \"white\"}}, \"type\": \"table\"}]}, \"layout\": {\"annotationdefaults\": {\"arrowcolor\": \"#2a3f5f\", \"arrowhead\": 0, \"arrowwidth\": 1}, \"coloraxis\": {\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}, \"colorscale\": {\"diverging\": [[0, \"#8e0152\"], [0.1, \"#c51b7d\"], [0.2, \"#de77ae\"], [0.3, \"#f1b6da\"], [0.4, \"#fde0ef\"], [0.5, \"#f7f7f7\"], [0.6, \"#e6f5d0\"], [0.7, \"#b8e186\"], [0.8, \"#7fbc41\"], [0.9, \"#4d9221\"], [1, \"#276419\"]], \"sequential\": [[0.0, \"#0d0887\"], [0.1111111111111111, \"#46039f\"], [0.2222222222222222, \"#7201a8\"], [0.3333333333333333, \"#9c179e\"], [0.4444444444444444, \"#bd3786\"], [0.5555555555555556, \"#d8576b\"], [0.6666666666666666, \"#ed7953\"], [0.7777777777777778, \"#fb9f3a\"], [0.8888888888888888, \"#fdca26\"], [1.0, \"#f0f921\"]], \"sequentialminus\": [[0.0, \"#0d0887\"], [0.1111111111111111, \"#46039f\"], [0.2222222222222222, \"#7201a8\"], [0.3333333333333333, \"#9c179e\"], [0.4444444444444444, \"#bd3786\"], [0.5555555555555556, \"#d8576b\"], [0.6666666666666666, \"#ed7953\"], [0.7777777777777778, \"#fb9f3a\"], [0.8888888888888888, \"#fdca26\"], [1.0, \"#f0f921\"]]}, \"colorway\": [\"#636efa\", \"#EF553B\", \"#00cc96\", \"#ab63fa\", \"#FFA15A\", \"#19d3f3\", \"#FF6692\", \"#B6E880\", \"#FF97FF\", \"#FECB52\"], \"font\": {\"color\": \"#2a3f5f\"}, \"geo\": {\"bgcolor\": \"white\", \"lakecolor\": \"white\", \"landcolor\": \"#E5ECF6\", \"showlakes\": true, \"showland\": true, \"subunitcolor\": \"white\"}, \"hoverlabel\": {\"align\": \"left\"}, \"hovermode\": \"closest\", \"mapbox\": {\"style\": \"light\"}, \"paper_bgcolor\": \"white\", \"plot_bgcolor\": \"#E5ECF6\", \"polar\": {\"angularaxis\": {\"gridcolor\": \"white\", \"linecolor\": \"white\", \"ticks\": \"\"}, \"bgcolor\": \"#E5ECF6\", \"radialaxis\": {\"gridcolor\": \"white\", \"linecolor\": \"white\", \"ticks\": \"\"}}, \"scene\": {\"xaxis\": {\"backgroundcolor\": \"#E5ECF6\", \"gridcolor\": \"white\", \"gridwidth\": 2, \"linecolor\": \"white\", \"showbackground\": true, \"ticks\": \"\", \"zerolinecolor\": \"white\"}, \"yaxis\": {\"backgroundcolor\": \"#E5ECF6\", \"gridcolor\": \"white\", \"gridwidth\": 2, \"linecolor\": \"white\", \"showbackground\": true, \"ticks\": \"\", \"zerolinecolor\": \"white\"}, \"zaxis\": {\"backgroundcolor\": \"#E5ECF6\", \"gridcolor\": \"white\", \"gridwidth\": 2, \"linecolor\": \"white\", \"showbackground\": true, \"ticks\": \"\", \"zerolinecolor\": \"white\"}}, \"shapedefaults\": {\"line\": {\"color\": \"#2a3f5f\"}}, \"ternary\": {\"aaxis\": {\"gridcolor\": \"white\", \"linecolor\": \"white\", \"ticks\": \"\"}, \"baxis\": {\"gridcolor\": \"white\", \"linecolor\": \"white\", \"ticks\": \"\"}, \"bgcolor\": \"#E5ECF6\", \"caxis\": {\"gridcolor\": \"white\", \"linecolor\": \"white\", \"ticks\": \"\"}}, \"title\": {\"x\": 0.05}, \"xaxis\": {\"automargin\": true, \"gridcolor\": \"white\", \"linecolor\": \"white\", \"ticks\": \"\", \"title\": {\"standoff\": 15}, \"zerolinecolor\": \"white\", \"zerolinewidth\": 2}, \"yaxis\": {\"automargin\": true, \"gridcolor\": \"white\", \"linecolor\": \"white\", \"ticks\": \"\", \"title\": {\"standoff\": 15}, \"zerolinecolor\": \"white\", \"zerolinewidth\": 2}}}, \"title\": {\"text\": \"\\u0426\\u0435\\u043d\\u0442\\u0440\\u0430\\u043b\\u044c\\u043d\\u044b\\u0439 \\u043e\\u043a\\u0440\\u0443\\u0433\"}, \"xaxis\": {\"anchor\": \"y\", \"domain\": [0.0, 1.0], \"title\": {\"text\": \"profession\"}}, \"yaxis\": {\"anchor\": \"x\", \"domain\": [0.0, 1.0], \"title\": {\"text\": \"search hits score\"}}},\n                        {\"responsive\": true}\n                    )\n                };"}
			</script>
		</RawHtml>
	</Theme>;
});