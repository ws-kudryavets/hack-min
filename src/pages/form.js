import React from "react";
import theme from "theme";
import { Theme, Link, Text, Strong, Input, Box, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { StackItem, Override, Stack, Section } from "@quarkly/components";
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
			<Stack margin="100px -16px 100px -16px" font="--minobrbold" quarkly-title="stroke">
				{"    "}
				<StackItem width="50%" display="flex" flex="20">
					{"        "}
					<Text font="--liadMinobr" margin="0px 0px 0px 0px" display="inline-block">
						{" "}
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
				<Button flex="15">
					Отправить
				</Button>
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
	</Theme>;
});