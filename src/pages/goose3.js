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
		<Components.MenuTech>
			<Override slot="button" type="button" />
		</Components.MenuTech>
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
			<Override slot="image" src="https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/4.svg?v=2020-11-15T00:25:12.030Z" />
		</Components.Track>
		<Section
			padding="64px 0 64px 0"
			sm-padding="40px 0"
			font="--base"
			color="--dark"
			background="--color-light"
			margin="-10px 0 0 0"
			height="800px"
		>
			<Text font="normal 500 20px/1.5 --fontFamily-sans" color="#6F839F">
				Заполните блоки
			</Text>
			<Stack margin="0 -16px 0 -16px">
				<StackItem
					width="50%"
					lg-width="100%"
					lg-order="2"
					margin="20px 0px 0px 0px"
					background="--color-light"
				>
					<Override slot="StackItemContent" text-align="center" background="--color-light" height="500px" />
					<StackItem width="100%" sm-width="100%" height="280px">
						<Override
							slot="StackItemContent"
							flex-direction="column"
							box-shadow="2px 4px 10px 0 rgba(0, 0, 0, 0.28)"
							background="#ffffff"
							height="700px"
						/>
						<Text font="normal 900 36px/1.2 --fontFamily-sans" text-align="left" margin="16px 0px 16px 20px" color="--primary">
							IED 1
						</Text>
						<Stack height="50px" margin="0 -16px -16px -16px">
							{"    "}
							<StackItem width="40%" display="flex" height="50px">
								<Override slot="StackItemContent" margin="0px 0px 0px 10px" width="50%" />
								{"        "}
								<Text font="normal 500 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" margin="0px 0px 0px 10px" display="inline-block">
									Имя GCB{" \n"}
									<br />
									{"\n\n\n"}
								</Text>
								{"    "}
							</StackItem>
							{"    "}
							<Input width="45%" border-color="--color-primary" height="50px" border-width="1px" />
						</Stack>
						<Stack margin="40px -16px -16px -16px">
							{"    "}
							<StackItem width="40%" display="flex">
								<Override slot="StackItemContent" margin="0px 0px 0px 10px" width="50%" />
								{"        "}
								<Text font="normal 500 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" margin="0px 0px 0px 10px" display="inline-block">
									GOOSE ID
									<br />
									{"\n\n\n"}
								</Text>
								{"    "}
							</StackItem>
							{"    "}
							<Input width="45%" border-color="--color-primary" height="50px" border-width="1px" />
						</Stack>
						<Stack margin="40px -16px -16px -16px">
							{"    "}
							<StackItem width="40%" display="flex">
								<Override slot="StackItemContent" margin="0px 0px 0px 10px" width="50%" />
								{"        "}
								<Text font="normal 500 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" margin="0px 0px 0px 10px" display="inline-block">
									MAC адрес{" \n"}
									<br />
									{"\n\n\n"}
								</Text>
								{"    "}
							</StackItem>
							{"    "}
							<Input width="45%" border-color="--color-primary" height="50px" border-width="1px" />
						</Stack>
						<Stack margin="40px -16px -16px -16px">
							{"    "}
							<StackItem width="40%" display="flex">
								<Override slot="StackItemContent" margin="0px 0px 0px 10px" width="50%" />
								{"        "}
								<Text font="normal 500 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" margin="0px 0px 0px 10px" display="inline-block">
									APP ID{" \n"}
									<br />
									{"\n\n\n"}
								</Text>
								{"    "}
							</StackItem>
							{"    "}
							<Input width="45%" border-color="--color-primary" height="50px" border-width="1px" />
						</Stack>
						<Stack margin="40px -16px -16px -16px">
							{"    "}
							<StackItem width="40%" display="flex">
								<Override slot="StackItemContent" margin="0px 0px 0px 10px" width="50%" />
								{"        "}
								<Text font="normal 500 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" margin="0px 0px 0px 10px" display="inline-block">
									VLAN ID{" \n"}
									<br />
									{"\n\n\n"}
								</Text>
								{"    "}
							</StackItem>
							{"    "}
							<Input width="45%" border-color="--color-primary" height="50px" border-width="1px" />
						</Stack>
						<Stack margin="40px -16px -16px -16px">
							{"    "}
							<StackItem width="40%" display="flex">
								<Override slot="StackItemContent" margin="0px 0px 0px 10px" width="50%" />
								{"        "}
								<Text font="normal 500 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" margin="0px 0px 0px 10px" display="inline-block">
									Min Time{" \n"}
									<br />
									{"\n\n\n"}
								</Text>
								{"    "}
							</StackItem>
							{"    "}
							<Input width="45%" border-color="--color-primary" height="50px" border-width="1px" />
						</Stack>
						<Stack margin="40px -16px -16px -16px">
							{"    "}
							<StackItem width="40%" display="flex">
								<Override slot="StackItemContent" margin="0px 0px 0px 10px" width="50%" />
								{"        "}
								<Text font="normal 500 24px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" margin="0px 0px 0px 10px" display="inline-block">
									Max Time
									<br />
									{"\n\n\n"}
								</Text>
								{"    "}
							</StackItem>
							{"    "}
							<Input width="45%" border-color="--color-primary" height="50px" border-width="1px" />
						</Stack>
					</StackItem>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" lg-margin-bottom="24px" flex-direction="column" width="100%" />
					<Text
						color="#6F839F"
						letter-spacing="1px"
						margin="20px 0 10px 0"
						font="normal normal 300 16px/1.5 --fontFamily-sans"
						width="100%"
					>
						В полях ввода справа нужно задать соответствующие настройки:
						<br />
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							1) Имя GCB{" "}
						</Strong>
						(GOOSE CONTROL BLOCK). Пример: GOOSE1 — важно, чтобы имя не начиналось с цифры.
						<br />
						{"\n"}
						<br />
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							2) GOOSE ID{" "}
						</Strong>
						(идентификатор GOOSE). Пример: GS1.
						<br />
						<br />
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							3) MAC адрес
						</Strong>
						{" "}для мультикаст-рассылки. Пример: 01:0С:СD:01:00:01
						<br />
						При этом важно что первые четыре октета 01:0С:СD:01 должны быть указаны обязательно, т.к. закреплены стандартом. Последние два октета могут быть выбраны произвольно из диапазона 00:00–01:FF. Для двух устройств они обязательно должны быть разными.
						<br />
						<br />
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							4){" "}
						</Strong>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							AppID
						</Strong>
						{" "}— может быть задан произвольно в диапазоне 8000–BFFF, для GOOSE-сообщений действующих на отключение коммутационных аппаратов (согласно корпоративному профилю МЭК 61850 Приложение 3).
						<br />
						<br />
						<Strong>
							5) Идентификатор виртуальной подсети VLAN ID
						</Strong>
						. Может быть задан в диапазоне от 0 до 4095.
						<br />
						<br />
						<Strong>
							6) Минимальное время между отправками дублирующих GOOSE
						</Strong>
						{" "}— сообщений Min Time — должно быть 4 мс, для быстрых GOOSE-сообщений (согласно корпоративному профилю МЭК 61850 Приложение 3).
						<br />
						<br />
						<Strong>
							7) Временной интервал между отправкой штатных GOOSE-сообщений Max Time
						</Strong>
						. Должно быть 1000 мс (согласно корпоративному профилю МЭК 61850 Приложение 3).{" \n\n"}
						<br />
						{"\n\n\n"}
					</Text>
					<Components.BlueButton width="60%" disabled={false} margin="26px 0px 0px 0px" type="button">
						<Link
							href="goose1"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							quarkly-title="LinkC"
							color="#fff"
							text-decoration-line="initial"
						>
							Сохранить
						</Link>
					</Components.BlueButton>
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