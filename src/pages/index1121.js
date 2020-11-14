import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Span, Text, Image, Box, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section, Stack, StackItem, SocialMedia } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.MenuTech />
		<Section color="--light" padding="50px 0 50px 0" sm-padding="40px 0" position="relative">
			<Override slot="SectionContent" />
			<Text
				as="p"
				margin="6px 0"
				font="--headline3"
				color="#5f5f5f"
				width="100%"
			>
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Задание 1.{" \n\n"}
				</Strong>
				<Span
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Настройка IED на прием-передачу GOOSE-сообщений{" \n"}
					<br />
					{"\n\n\n"}
				</Span>
			</Text>
		</Section>
		<Section
			padding="64px 0 64px 0"
			sm-padding="40px 0"
			font="--base"
			color="--dark"
			background="--color-light"
			margin="-10px 0 0 0"
			height="700px"
		>
			<Text font="normal 500 20px/1.5 --fontFamily-sans" color="#6F839F">
				Укажите сетевые настройки
			</Text>
			<Stack margin="0 -16px 0 -16px">
				<StackItem
					width="60%"
					lg-width="100%"
					lg-order="2"
					margin="20px 0px 0px 0px"
					background="--color-light"
				>
					<Override slot="StackItemContent" text-align="center" background="--color-light" height="500px" />
					<Stack margin="0 -16px -16px -16px" width="100%">
						<Components.Input1 width="100%">
							<Override slot="StackItemContent" width="100%" />
							<Override slot="text1" />
						</Components.Input1>
						<Components.Input1 width="100%">
							<Override slot="StackItemContent" width="100%" />
							<Override slot="text">
								LED 2
							</Override>
						</Components.Input1>
					</Stack>
				</StackItem>
				<StackItem width="40%" lg-width="100%">
					<Override slot="StackItemContent" lg-margin-bottom="24px" flex-direction="column" height="500px" />
					<Text color="#6F839F" letter-spacing="1px" margin="34px 0 10px 0" font="normal 500 20px/1.5 --fontFamily-sans">
						Необходимо правильно задать IP адрес
						<br />
						и маску подсети. Правильность настройки
						<br />
						заключается в том, чтобы все устройства
						<br />
						были в одной подсети с одинаковой
						<br />
						маской.
						<br />
						{"\n\n\n"}
					</Text>
					<Section height="500px">
						<Override slot="SectionContent" height="300px" />
					</Section>
					<StackItem>
						<Override slot="StackItemContent" margin="40px 0px 0px 0px" />
						<Components.BlueButton width="60%" />
					</StackItem>
				</StackItem>
			</Stack>
		</Section>
		<Section height="40px" quarkly-title="Footer">
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Image width="120px" height="64px" src="https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/logo2.png?v=2020-11-13T21:02:57.282Z" />
				<SocialMedia facebook="https://www.facebook.com/official.rosseti/" vkontakte="https://vk.com/rosseti" instagram="https://www.instagram.com/rosseti_official/?hl=ru" />
			</Box>
		</Section>
		<Box />
		<Box />
		<Text>
			Some text
		</Text>
		<Input />
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