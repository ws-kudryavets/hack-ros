import React from "react";
import theme from "theme";
import { Theme, Link, Text, Span, Strong, Image, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Section, Stack, SocialMedia } from "@quarkly/components";
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
			<Override slot="SectionContent" height="70px" />
			<StackItem width="50%" md-width="100%">
				<Override slot="StackItemContent" flex-direction="column" />
			</StackItem>
			<Text
				as="p"
				margin="6px 0"
				font="--headline2"
				color="#5f5f5f"
				width="100%"
			>
				Ваша учебная траектория
			</Text>
		</Section>
		<Section
			padding="30px 0 30px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Stack margin-top="auto" color="--grey" font="--base">
				<StackItem width="30%" md-width="100%" height="400px">
					<Text
						as="p"
						margin="6px 0"
						font="--headline3"
						color="#000000"
						width="100%"
						height="400px"
					>
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
							>
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
								>
									Тема 1
								</Span>
							</Strong>
						</Span>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{" "}
						</Strong>
						<br />
						{"\n\n\n\n"}
						<br />
						Настройка IED на
						<br />
						прием-передачу
						<br />
						GOOSE-сообщений{" \n"}
						<br />
						{"\n\n\n \n"}
						<br />
						{"\n\n\n"}
					</Text>
				</StackItem>
				<StackItem width="70%" md-width="100%">
					<Image width="100%" height="500px" src="https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/track-01.svg?v=2020-11-14T00:20:52.500Z" />
				</StackItem>
			</Stack>
			<Components.BlackButton
				background="#0077cc"
				width="20%"
				focus-border-color="#ffffff"
				focus-border-radius={0}
				focus-background="#FFA750"
			>
				Начать обучение
			</Components.BlackButton>
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