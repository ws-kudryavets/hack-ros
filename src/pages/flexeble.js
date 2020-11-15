import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Span, Text, Input, Box, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Stack, StackItem, Section, SocialMedia } from "@quarkly/components";
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
		<Components.TitleMain>
			<Override slot="text">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Тема 5.{" \n\n"}
				</Strong>
				<Span
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Рефлексия{" "}
					<br />
					{"\n\n\n"}
				</Span>
			</Override>
		</Components.TitleMain>
		<Components.Track>
			<Override slot="image" src="https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/5.svg?v=2020-11-15T00:38:06.502Z" />
		</Components.Track>
		<Section
			padding="64px 0"
			sm-padding="40px 0"
			font="--base"
			color="--dark"
			background="--color-light"
		>
			<Stack>
				<StackItem width="70%" lg-width="100%">
					<Override slot="StackItemContent" lg-margin-bottom="24px" flex-direction="column" />
					<Text color="--grey" letter-spacing="1px" margin="0 0 10px 0" font="normal 500 20px/1.5 --fontFamily-sans">
						Ответьте на вопрос.{" "}
						<br />
						Какие полезные навыки вы приобрели в рамках прохождения занятия? И как вы сможете их применять в повседневной работе.
					</Text>
					<Box
						width="100%"
						border-style="none"
						border-width="1px"
						border-color="--color-primary"
						background="#ffffff"
					>
						<Input width="100%" height="400px" />
						<Stack margin="0 -16px -16px -16px">
							{"    "}{"    "}
						</Stack>
					</Box>
				</StackItem>
			</Stack>
			<StackItem>
				<Override slot="StackItemContent" justify-content="flex-end" />
				<Components.BlueButton width="30%" height="36px" margin="0px 0px 0px 0" color="#ffffff">
					<Link
						href="final"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						color="#fff"
						text-decoration-line="initial"
					>
						Сохранить
					</Link>
				</Components.BlueButton>
			</StackItem>
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