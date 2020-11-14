import React from "react";
import theme from "theme";
import { Theme, Link, Image, Strong, Span, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section, SocialMedia } from "@quarkly/components";
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
		<Section
			margin="0 0 0 0"
			padding="16px 0 16px 0"
			box-sizing="border-box"
			quarkly-title="Header"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Stack>
				{"    "}
				<StackItem display="flex" quarkly-title="Logo" md-width="75%" width="25%">
					<Override slot="StackItemContent" align-items="center" />
					{"        "}
					<Link href="/" position="relative" transition="opacity 200ms ease" quarkly-title="Link">
						<Image src="https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-logo.svg?v=2020-11-06T17:26:21.226Z" width="120px" z-index="3" />
					</Link>
				</StackItem>
				<StackItem display="flex" quarkly-title="Side" width="75%" md-display="none">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
					<Components.BorderButton />
					{"   "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section color="--light" padding="50px 0 50px 0" sm-padding="40px 0" position="relative">
			<Override slot="SectionContent" height="70px" />
			<StackItem width="50%" md-width="100%">
				<Override slot="StackItemContent" flex-direction="column" />
			</StackItem>
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
			padding="64px 0"
			sm-padding="40px 0"
			font="--base"
			color="--dark"
			background="--color-light"
		>
			<Stack>
				<StackItem width="30%" lg-width="100%" lg-order="2">
					<Override slot="StackItemContent" text-align="center" />
					<Stack>
						<StackItem width="50%" sm-width="100%" height="200px">
							<Override slot="StackItemContent" flex-direction="column" background="--color-lightD1" box-shadow="2px 4px 10px 0 rgba(0, 0, 0, 0.28)" />
							<Box
								width="100%"
								height="120px"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/29-01-02.jpg?v=2020-11-14T07:28:13.307Z) 50% 0/cover no-repeat"
								border-radius={0}
							/>
							<Link href="#" font="normal 500 18px/1.2 --fontFamily-sans" margin="20px 0px 10px 0px">
								РЗА
							</Link>
						</StackItem>
						<StackItem width="50%" sm-width="100%" height="200px">
							<Override slot="StackItemContent" flex-direction="column" background="--color-lightD1" box-shadow="2px 4px 10px 0 rgba(0, 0, 0, 0.28)" />
							<Box
								width="100%"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/29-01-02.jpg?v=2020-11-14T07:28:13.307Z) 50% 0/cover no-repeat"
								border-radius={0}
								height="120px"
							/>
							<Link href="#" font="normal 500 18px/1.2 --fontFamily-sans" margin="20px 0px 10px 0px">
								РЗА
							</Link>
						</StackItem>
						<StackItem width="50%" sm-width="100%" height="200px">
							<Override slot="StackItemContent" flex-direction="column" background="--color-lightD1" box-shadow="2px 4px 10px 0 rgba(0, 0, 0, 0.28)" />
							<Box
								width="100%"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/29-01-01.jpg?v=2020-11-14T07:29:20.309Z) 50% 0/cover no-repeat"
								border-radius={0}
								height="120px"
							/>
							<Link href="#" font="normal 500 18px/1.2 --fontFamily-sans" margin="20px 0px 10px 0px">
								РЗА
							</Link>
						</StackItem>
						<StackItem width="50%" sm-width="100%" height="200px">
							<Override slot="StackItemContent" flex-direction="column" background="--color-lightD1" box-shadow="2px 4px 10px 0 rgba(0, 0, 0, 0.28)" />
							<Box
								width="100%"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/photo_2020-11-14_00-17-22.jpg?v=2020-11-14T05:14:12.201Z) 50% 0/cover no-repeat"
								border-radius={0}
								height="120px"
							/>
							<Link href="#" font="normal 500 18px/1.2 --fontFamily-sans" margin="20px 0px 10px 0px">
								РЗА
							</Link>
						</StackItem>
						<StackItem width="50%" sm-width="100%" height="200px">
							<Override slot="StackItemContent" flex-direction="column" background="--color-lightD1" box-shadow="2px 4px 10px 0 rgba(0, 0, 0, 0.28)" />
							<Box
								width="100%"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/photo_2020-11-14_00-17-22.jpg?v=2020-11-14T05:14:12.201Z) 50% 0/cover no-repeat"
								border-radius={0}
								height="120px"
							/>
							<Link href="#" font="normal 500 18px/1.2 --fontFamily-sans" margin="20px 0px 10px 0px">
								РЗА
							</Link>
						</StackItem>
						<StackItem width="50%" sm-width="100%" height="200px">
							<Override slot="StackItemContent" flex-direction="column" background="--color-lightD1" box-shadow="2px 4px 10px 0 rgba(0, 0, 0, 0.28)" />
							<Box
								width="100%"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/photo_2020-11-14_00-17-22.jpg?v=2020-11-14T05:14:12.201Z) 50% 0/cover no-repeat"
								border-radius={0}
								height="120px"
							/>
							<Link href="#" font="normal 500 18px/1.2 --fontFamily-sans" margin="20px 0px 10px 0px">
								РЗА
							</Link>
						</StackItem>
					</Stack>
				</StackItem>
				<StackItem width="70%" lg-width="100%">
					<Override slot="StackItemContent" lg-margin-bottom="24px" flex-direction="column" />
					<Text color="--grey" letter-spacing="1px" margin="0 0 10px 0" font="--lead">
						Выберите необходимые устройства и перетащите на поле{"\n\n"}
					</Text>
					<Box
						height="540px"
						width="100%"
						border-style="dashed"
						border-width="1px"
						border-color="--color-primary"
						background="#ffffff"
					/>
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