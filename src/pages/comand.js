import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"comand"} />
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
		<Section padding="64px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Text
				as="p"
				color="--grey"
				max-width="520px"
				margin="0 auto"
				text-align="center"
				font="14px/100% Montserrat, sans-serif"
				letter-spacing="inherit"
			>
				к о м а н д а
			</Text>
			<Text
				as="h1"
				font="--h2Minobr"
				md-font="--headline2"
				max-width="520px"
				margin="0 auto 5px auto"
				text-align="center"
				width="auto"
			>
				Мамихлапинатана
			</Text>
			<Stack margin-top="40px">
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/6079ce657c7120001f1ee250/images/image%2019.png?v=2021-04-17T12:28:20.615Z) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Manager
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Артём{" "}
						<br />
						Попов
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						Менеджер проекта, python разработчик.
						<br />
						<br />
						<Link href="#">
							{"\n"}popov.md5@gmail.com{"\n\n"}
						</Link>
						<br />
						{"\n"}@nuclear100{"\n\n"}
						<br />
						{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/6079ce657c7120001f1ee250/images/image%2018.png?v=2021-04-17T12:28:20.625Z) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Developer
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Александр Кудрявец
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						FullStack разработчик{"\n\n"}
						<br />
						<br />
						<Link href="#">
							{"\n"}07aleks26@gmail.com{"\n\n"}
						</Link>
						<br />
						@aleks_kudr{"\n\n"}
						<br />
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/6079ce657c7120001f1ee250/images/Mask%20Group.png?v=2021-04-17T12:28:20.619Z) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Data scientist
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Елизавета Виноградова
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						Data Scientist
						<br />
						<br />
						<Link href="#">
							{"\n"}vealiisa@mail.ru
						</Link>
						<br />
						@LisaVino{"\n\n\n\n"}
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box height="0" margin="0 0 20px 0" padding-bottom="100%" background="url(https://uploads.quarkly.io/6079ce657c7120001f1ee250/images/image%2017.png?v=2021-04-17T12:28:20.614Z) 50% 0/cover no-repeat" />
					<Text color="--grey" margin="0">
						Designer
						<br />
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0">
						Юлия{" "}
						<br />
						Карло
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						Админ команды, UI/UX дизайнер{"\n\n\n"}
						<br />
						<br />
						<Link href="#">
							{"\n"}freeza.carlo@gmail.com{"\n\n"}
						</Link>
						<br />
						{"\n"}@YukkiCarlo{"\n\n"}
					</Text>
				</StackItem>
			</Stack>
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
		</RawHtml>
	</Theme>;
});