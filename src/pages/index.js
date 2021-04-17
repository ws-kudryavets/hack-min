import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Hr, Text, Span, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Section, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
		<Box>
			<Section padding="10px 0 10px 0">
				<Override slot="SectionContent" min-height="none" min-width="none" />
				<Box
					display="flex"
					justify-content="space-between"
					align-items="center"
					flex-direction="row"
					md-flex-direction="column"
				>
					<Image width="350px" src="https://uploads.quarkly.io/6079ce657c7120001f1ee250/images/logo.svg?v=2021-04-16T18:58:04.338Z" min-width="none" min-height="none" />
				</Box>
			</Section>
			<Hr margin="0 0px 0 0px" padding="0px 0px 0 0px" />
		</Box>
		<Section
			color="#E7EAF2"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			quarkly-title="Contacts & Form"
			background="#E7EAF2"
		>
			<Stack color="--light" background="#ffffff">
				<StackItem width="50%" md-width="100%" color="--minobrDarkBlue">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						padding="0 0 0 64px"
						sm-padding="64px 0 0 0"
						margin="32px 0 0 0"
						max-width="360px"
						position="relative"
						font="16px --fontFamily-googleMontserrat"
					>
						<Text as="p" margin="6px 0" font="bold 28px/120% --fontFamily-googleMontserrat">
							Система мониторинга подготовки и трудоустройства IT-специалистов{" "}
						</Text>
					</Box>
				</StackItem>
				<StackItem width="50%" md-width="100%" quarkly-title="Form">
					<Override slot="StackItemContent" background="--color-minobrGray" />
					<Box
						max-width="560px"
						padding="56px 48px 56px 48px"
						margin="0 0 0 auto"
						md-max-width="100%"
						background="#ffffff"
						width="531px"
						box-shadow="--l"
						border-color="--color-minobrGray"
						border-radius="2px"
					>
						<Components.LoginForm font="700 24px / 28.8px Montserrat, sans-serif" min-width="none" min-height="none" width="auto">
							<Override
								slot="LoginEmail"
								border-radius="8px"
								background="#ffffff"
								width="400px"
								margin="0px 10px 15px 0px"
								border-color="#5e6b87"
								border-style="solid"
								color="#060606"
								font="--liadMinobr"
								border-width="1px"
								name="Login"
								flex="0 1 75%"
							/>
							<Override slot="LoginTitle" border-color="--color-minobrDarkBlue" color="--dark" margin="0 0px 16px 0px">
								<Span font-weight="normal">
									Личный кабинет
								</Span>
							</Override>
							<Override slot="LoginInput" />
							<Override
								slot="LoginButton"
								background="--color-minobrDarkBlue"
								padding="8px 24px 8px 24px"
								width="160px"
								margin="20px 0px 0px 0px"
							>
								Войти
							</Override>
							<Override
								slot="LoginPassword"
								width="400px"
								font="--liadMinobr"
								border-color="--color-minobrGray"
								border-width="1px"
								border-radius="8px"
								margin="0px 10px 0 0px"
								padding="6px 16px 10px 16px"
								height="32px"
								flex="0 1 75%"
							/>
							<Override slot="LoginError" border-color="#ff0000" />
							<Override
								slot="LoginTitleEmail"
								border-color="#3491ed"
								font="--liadMinobr"
								color="--darkL1"
								margin="0px 30px 0px 0px"
								flex="1"
							/>
							<Override slot="LoginTitlePassword" color="--darkL1" font="--liadMinobr" flex="1">
								Пароль{" "}
							</Override>
							<Override slot="LoginEmailInput" display="flex" align-items="flex-start" justify-content="space-between" />
							<Override slot="LoginPasswordInput" display="flex" justify-content="space-between" align-items="flex-start" />
						</Components.LoginForm>
					</Box>
				</StackItem>
			</Stack>
		</Section>
		<Components.Footer>
			<Override slot="text">
				Прототип разработан{" "}
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					<Link
						href="#"
						color="--light"
						link-color="--lightD2"
						hover-color="--minobrBlue"
						active-color="--minobrBlue"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						командой «Мамихлапинатана»
					</Link>
				</Strong>
				{" "}специально для конкурса «Цифровой прорыв». 2021
			</Override>
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
			<script src={"https://cdn.plot.ly/plotly-latest.min.js"} place={"endOfHead"} rawKey={"607b38e3cb6f61d825aac5b8"} />
			<style place={"endOfHead"} rawKey={"607b491ce4497f8ba39e6a65"}>
				{".chart-style {\nheight: 100vh;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});