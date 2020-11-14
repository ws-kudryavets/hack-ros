import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Span, Text, Box, Image } from "@quarkly/widgets";
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
			</Override>
		</Components.TitleMain>
		<Components.Track />
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
						Посмотрите видео с теорией{" "}
					</Text>
					<Box
						height="500px"
						width="100%"
						border-style="none"
						border-width="1px"
						border-color="--color-primary"
						background="#ffffff"
					>
						<Stack margin="0 -16px -16px -16px">
							{"    "}{"    "}
						</Stack>
						<Components.Video padding="0 0px 0 0px">
							<Override
								slot="SectionContent"
								align-self="center"
								width="756.109px"
								min-width="346px"
								flex-direction="row-reverse"
								align-items="center"
								justify-content="center"
								max-width="1297px"
								margin="0px 0 0px 0"
							/>
						</Components.Video>
					</Box>
					<StackItem width="100%" display="flex">
						<Override slot="StackItemContent" width="100%" margin="0px 0px 0px 380px" />
						{"        "}
						<Components.LikeDislike />
						{"    "}
					</StackItem>
				</StackItem>
				<Components.AskQuestionAndNext />
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