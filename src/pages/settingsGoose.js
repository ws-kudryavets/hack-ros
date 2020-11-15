import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Span, Text, Input, Image, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section, StackItem, Stack, SocialMedia } from "@quarkly/components";
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
					Задание 4.{"  "}
				</Strong>
				<Span
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Тренажёр{" "}
				</Span>
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					«
				</Strong>
				<Span
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Настройка IED на прием-передачу GOOSE-сообщений»{"  "}
					<br />
					{"\n\n\n"}
				</Span>
			</Text>
		</Section>
		<Components.Track>
			<Override slot="image" src="https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/4.svg?v=2020-11-14T18:34:33.374Z" />
		</Components.Track>
		<Section
			padding="64px 0 64px 0"
			sm-padding="40px 0"
			font="--base"
			color="--dark"
			background="--color-light"
			margin="-10px 0 0 0"
			height="759px"
		>
			<Text font="normal 500 20px/1.5 --fontFamily-sans" color="#6F839F">
				Задача подписать два устройства на
				<br />
				GOOSE-сообщения друг друга. Кликайте на поля{"  "}
				<br />
				{"\n\n\n"}
			</Text>
			<StackItem
				width="60%"
				lg-width="100%"
				lg-order="2"
				margin="0 0px 0px 0px"
				background="--color-light"
			>
				<Override slot="StackItemContent" text-align="center" background="--color-light" height="320px" />
				<Stack margin="0 -16px -16px -16px" width="100%">
					<StackItem width="100%" sm-width="100%" height="320px">
						<Override
							slot="StackItemContent"
							flex-direction="column"
							box-shadow="2px 4px 10px 0 rgba(0, 0, 0, 0.28)"
							background="#ffffff"
							height="300px"
						/>
						<Text
							font="normal 900 28px/1.2 --fontFamily-sans"
							text-align="left"
							margin="16px 0px 16px 370px"
							color="--primary"
							width="40%"
						>
							IED 1
						</Text>
						<Stack margin="-20px -16px -16px -16px">
							{"    "}{"    "}
							<StackItem width="95px" display="flex" margin="0px 0px 0px 370px">
								<Override slot="StackItemContent" width="40%" margin="0px 0px 0px 100" />
								{"        "}
								<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
									<Strong font="700 18px/30px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif" margin="0px 0px 0px 0">
										Вход 1
									</Strong>
								</Text>
								{"    "}
							</StackItem>
							<StackItem width="95px" display="flex" margin="0px 0px 0px 0px">
								<Override slot="StackItemContent" width="60px" />
								{"        "}
								<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
									<Strong
										font="700 18px/30px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Вход 2
									</Strong>
								</Text>
								{"    "}
							</StackItem>
							<StackItem width="95px" display="flex" margin="0px 0px 0px 0px">
								<Override slot="StackItemContent" width="100px" />
								{"        "}
								<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
									<Strong
										font="700 18px/30px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Вход 3
									</Strong>
								</Text>
								{"    "}
							</StackItem>
						</Stack>
						<Stack height="36px" margin="20px -16px -31px -16px">
							{"    "}
							<Text font="normal 500 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" margin="0px 0px 0px 10px" display="inline-block" width="50%">
								IED 2 Выход 1{" "}
								<br />
								{"\n\n\n"}
							</Text>
							{"    "}
							<Input
								width="5%"
								border-color="--color-primary"
								height="36px"
								border-width="1px"
								margin="0px 0px 0px 20px"
							/>
							<Input
								width="5%"
								border-color="--color-primary"
								height="36px"
								border-width="1px"
								margin="0px 0px 0px 40px"
							/>
							<Input
								width="5%"
								border-color="--color-primary"
								height="36px"
								border-width="1px"
								margin="0px 0px 0px 40px"
							/>
						</Stack>
						<Stack height="36px" margin="50px -16px -31px -16px">
							{"    "}
							<Text font="normal 500 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" margin="0px 0px 0px 10px" display="inline-block" width="50%">
								IED 2 Выход 2{" "}
								<br />
								{"\n\n\n"}
							</Text>
							{"    "}
							<Input
								width="5%"
								border-color="--color-primary"
								height="36px"
								border-width="1px"
								margin="0px 0px 0px 20px"
							/>
							<Input
								width="5%"
								border-color="--color-primary"
								height="36px"
								border-width="1px"
								margin="0px 0px 0px 40px"
							/>
							<Input
								width="5%"
								border-color="--color-primary"
								height="36px"
								border-width="1px"
								margin="0px 0px 0px 40px"
							/>
						</Stack>
						<Stack height="36px" margin="50px -16px -31px -16px">
							{"    "}
							<Text font="normal 500 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" margin="0px 0px 0px 10px" display="inline-block" width="50%">
								IED 2 Выход 2{" "}
								<br />
								{"\n\n\n"}
							</Text>
							{"    "}
							<Input
								width="5%"
								border-color="--color-primary"
								height="36px"
								border-width="1px"
								margin="0px 0px 0px 20px"
							/>
							<Input
								width="5%"
								border-color="--color-primary"
								height="36px"
								border-width="1px"
								margin="0px 0px 0px 40px"
							/>
							<Input
								width="5%"
								border-color="--color-primary"
								height="36px"
								border-width="1px"
								margin="0px 0px 0px 40px"
							/>
						</Stack>
					</StackItem>
					<StackItem width="100%" sm-width="100%" height="320px">
						<Override
							slot="StackItemContent"
							flex-direction="column"
							box-shadow="2px 4px 10px 0 rgba(0, 0, 0, 0.28)"
							background="#ffffff"
							height="300px"
						/>
						<Text
							font="normal 900 28px/1.2 --fontFamily-sans"
							text-align="left"
							margin="16px 0px 16px 370px"
							color="--primary"
							width="40%"
						>
							IED 2
						</Text>
						<Stack margin="-20px -16px -16px -16px">
							{"    "}{"    "}
							<StackItem width="95px" display="flex" margin="0px 0px 0px 370px">
								<Override slot="StackItemContent" width="40%" margin="0px 0px 0px 100" />
								{"        "}
								<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
									<Strong
										font="700 18px/30px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
										margin="0px 0px 0px 0"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Вход 1
									</Strong>
								</Text>
								{"    "}
							</StackItem>
							<StackItem width="95px" display="flex" margin="0px 0px 0px 0px">
								<Override slot="StackItemContent" width="60px" />
								{"        "}
								<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
									<Strong
										font="700 18px/30px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Вход 2
									</Strong>
								</Text>
								{"    "}
							</StackItem>
							<StackItem width="95px" display="flex" margin="0px 0px 0px 0px">
								<Override slot="StackItemContent" width="100px" />
								{"        "}
								<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
									<Strong
										font="700 18px/30px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
									>
										Вход 3
									</Strong>
								</Text>
								{"    "}
							</StackItem>
						</Stack>
						<Stack height="36px" margin="20px -16px -31px -16px">
							{"    "}
							<Text font="normal 500 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" margin="0px 0px 0px 10px" display="inline-block" width="50%">
								IED 1 Выход 1{" "}
								<br />
								{"\n\n\n"}
							</Text>
							{"    "}
							<Input
								width="5%"
								border-color="--color-primary"
								height="36px"
								border-width="1px"
								margin="0px 0px 0px 20px"
							/>
							<Input
								width="5%"
								border-color="--color-primary"
								height="36px"
								border-width="1px"
								margin="0px 0px 0px 40px"
							/>
							<Input
								width="5%"
								border-color="--color-primary"
								height="36px"
								border-width="1px"
								margin="0px 0px 0px 40px"
							/>
						</Stack>
						<Stack height="36px" margin="50px -16px -31px -16px">
							{"    "}
							<Text font="normal 500 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" margin="0px 0px 0px 10px" display="inline-block" width="50%">
								IED 1 Выход 2{" "}
								<br />
								{"\n\n\n"}
							</Text>
							{"    "}
							<Input
								width="5%"
								border-color="--color-primary"
								height="36px"
								border-width="1px"
								margin="0px 0px 0px 20px"
							/>
							<Input
								width="5%"
								border-color="--color-primary"
								height="36px"
								border-width="1px"
								margin="0px 0px 0px 40px"
							/>
							<Input
								width="5%"
								border-color="--color-primary"
								height="36px"
								border-width="1px"
								margin="0px 0px 0px 40px"
							/>
						</Stack>
						<Stack height="36px" margin="50px -16px -31px -16px">
							{"    "}
							<Text font="normal 500 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" margin="0px 0px 0px 10px" display="inline-block" width="50%">
								IED 1 Выход 2{" "}
								<br />
								{"\n\n\n"}
							</Text>
							{"    "}
							<Input
								width="5%"
								border-color="--color-primary"
								height="36px"
								border-width="1px"
								margin="0px 0px 0px 20px"
							/>
							<Input
								width="5%"
								border-color="--color-primary"
								height="36px"
								border-width="1px"
								margin="0px 0px 0px 40px"
							/>
							<Input
								width="5%"
								border-color="--color-primary"
								height="36px"
								border-width="1px"
								margin="0px 0px 0px 40px"
							/>
						</Stack>
					</StackItem>
					<StackItem width="100%" display="flex" align-items="center" justify-content="center">
						<Override slot="StackItemContent" align-items="center" justify-content="center" />
						<Components.BlueButton margin="20px 0px 0px 0">
							<Link href="goose-final" color="#fff" text-decoration-line="initial">
								Отправить
							</Link>
						</Components.BlueButton>
					</StackItem>
				</Stack>
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