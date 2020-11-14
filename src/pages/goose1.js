import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Span, Text, Box, Image } from "@quarkly/widgets";
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
		>
			<Stack>
				<StackItem width="30%" lg-width="100%" lg-order="2" margin="30px 0px 0px 0px">
					<Override slot="StackItemContent" text-align="center" />
					<Stack margin="0 -16px -16px -16px">
						<Components.DragBox />
						<Components.DragBox>
							<Override slot="box" background="url(https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/29-01-06.jpg?v=2020-11-14T09:37:16.369Z) 50% 0/cover no-repeat" />
						</Components.DragBox>
						<Components.DragBox>
							<Override slot="box" background="url(https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/29-01-07.jpg?v=2020-11-14T09:37:16.127Z) 50% 0/cover no-repeat" />
						</Components.DragBox>
					</Stack>
				</StackItem>
				<StackItem width="70%" lg-width="100%">
					<Override slot="StackItemContent" lg-margin-bottom="24px" flex-direction="column" />
					<Text color="--grey" letter-spacing="1px" margin="0 0 10px 0" font="normal 500 20px/1.5 --fontFamily-sans">
						Выберите необходимые устройства и перетащите на поле{"\n\n"}
					</Text>
					<Box
						height="540px"
						width="100%"
						border-style="dashed"
						border-width="1px"
						border-color="--color-primary"
						background="#ffffff"
					>
						<Stack margin="0 -16px -16px -16px" height="150px">
							{"    "}
							<Components.Comp2 />
							<Components.Comp2 margin="10px 0px 0px 280px" />
							{"    "}
						</Stack>
						<Section />
						<Stack width="400px">
							{"    "}{"    "}
						</Stack>
						<Box height="80px" />
						<StackItem>
							<Override slot="StackItemContent" height="200px" />
							<StackItem width="100%" sm-width="100%" margin="0px 0px 0px 220px">
								<Override
									slot="StackItemContent"
									flex-direction="column"
									box-shadow="2px 4px 10px 0 rgba(0, 0, 0, 0.28)"
									width="60%"
									margin="0px 0px 0px 40px"
									background="#ffffff"
								/>
								<Box
									width="300px"
									height="150px"
									margin="5px auto 0 auto"
									background="url(https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/30-01-01.jpg?v=2020-11-14T10:38:26.003Z) 50% 0/cover no-repeat"
									border-radius={0}
									padding="0 0px 0px 0px"
								/>
								<Components.BlueButton width="50%" margin="16px 0px 10px 110px">
									<Link
										href="goose2"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										color="#fff"
										text-decoration-line="initial"
									>
										Настроить сеть
									</Link>
								</Components.BlueButton>
							</StackItem>
						</StackItem>
						<Section padding="0 0 0 0" margin="36px 0 0 0">
							<Override slot="SectionContent" margin="0px 44.3125px 10px 44.3125px" padding="0px 0px 0 0px" />
							<Components.BorderButton width="60%" margin="0px 0px 10px 190px" padding="8px 10px 8px 10px">
								Подписки GOOSE-сообщений{" \n"}
								<br />
								{"\n\n\n"}
							</Components.BorderButton>
						</Section>
					</Box>
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