import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Span, Text, Box, Image } from "@quarkly/widgets";
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
						<Components.CompStandart>
							<Override slot="StackItemContent" background="#ffffff" />
						</Components.CompStandart>
						<StackItem width="50%" sm-width="100%" height="200px">
							<Override slot="StackItemContent" flex-direction="column" box-shadow="2px 4px 10px 0 rgba(0, 0, 0, 0.28)" background="#ffffff" />
							<Box
								width="100%"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/29-01-02.jpg?v=2020-11-14T07:28:13.307Z) 50% 0/cover no-repeat"
								border-radius={0}
								height="120px"
							/>
							<Link href="https://www.mtrele.ru/shop/relejnaya-zashhita/bmrz/" font="normal 500 18px/1.2 --fontFamily-sans" margin="20px 0px 10px 0px">
								РЗА IED 2
								<br />
								{"\n\n\n"}
							</Link>
						</StackItem>
						<StackItem width="50%" sm-width="100%" height="200px">
							<Override slot="StackItemContent" flex-direction="column" box-shadow="2px 4px 10px 0 rgba(0, 0, 0, 0.28)" background="#ffffff" />
							<Box
								width="100%"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/29-01-01.jpg?v=2020-11-14T10:30:35.471Z) 50% 0/cover no-repeat"
								border-radius={0}
								height="120px"
							/>
							<Link href="http://files.qtech.ru/public/datasheets/products/switchers/QSW-3750/QSW-3750-12T-I-POE-DC/836K_020719_QSW-3750-12T-I_r4_datasheet.pdf" font="normal 500 18px/1.2 --fontFamily-sans" margin="20px 0px 10px 0px">
								Коммутатор
							</Link>
						</StackItem>
						<Components.DragBox />
						<StackItem width="50%" sm-width="100%" height="200px">
							<Override slot="StackItemContent" flex-direction="column" box-shadow="2px 4px 10px 0 rgba(0, 0, 0, 0.28)" background="#ffffff" />
							<Box
								width="100%"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/29-01-06.jpg?v=2020-11-14T09:37:16.369Z) 50% 0/cover no-repeat"
								border-radius={0}
								height="120px"
							/>
							<Link href="#" font="normal 500 18px/1.2 --fontFamily-sans" margin="20px 0px 10px 0px">
								Кабель USB  A-B
							</Link>
						</StackItem>
						<StackItem width="50%" sm-width="100%" height="200px">
							<Override slot="StackItemContent" flex-direction="column" box-shadow="2px 4px 10px 0 rgba(0, 0, 0, 0.28)" background="#ffffff" />
							<Box
								width="100%"
								margin="0 auto"
								background="url(https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/29-01-07.jpg?v=2020-11-14T09:37:16.127Z) 50% 0/cover no-repeat"
								border-radius={0}
								height="120px"
							/>
							<Link href="#" font="normal 500 18px/1.2 --fontFamily-sans" margin="20px 0px 10px 0px">
								Патч-корд
							</Link>
						</StackItem>
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
						<Stack margin="0 -16px -16px -16px">
							{"    "}
							<Components.CompStandart width="20%" margin="10px 0px 0px 160px" opacity="0.3" box-shadow="inset 0 0 20px 0 rgba(6, 15, 40, 0.46)">
								<Override slot="link" text-align="center" />
								<Override slot="StackItemContent" background="#ffffff" box-shadow="0 0 0 0 0px" />
							</Components.CompStandart>
							<Components.CompStandart width="20%" margin="10px 0px 0px 280px" box-shadow="inset 0 0 20px 0 rgba(6, 15, 40, 0.46)" opacity="0.3">
								<Override slot="link" text-align="center" />
								<Override slot="StackItemContent" background="#ffffff" box-shadow="0 0 0 0 0px" />
								<Override slot="box" width="100%" height="120px" />
							</Components.CompStandart>
							{"    "}
						</Stack>
						<Stack>
							{"    "}
							<StackItem width="50%" display="flex">
								{"        "}
								<Box width="120px" height="60px" margin="0px 0px 0px 200px" />
								{"    "}
							</StackItem>
							{"    "}
							<StackItem width="50%" display="flex">
								{"        "}{"    "}
							</StackItem>
						</Stack>
						<Box />
						<Stack width="400px">
							{"    "}{"    "}
						</Stack>
						<StackItem>
							<Override slot="StackItemContent" height="200px" />
							<Components.CompStandart margin="0px 0px 0px 0px" height="200px" width="300px">
								<Override
									slot="box"
									background="url(https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/30-01-01.jpg?v=2020-11-14T10:38:26.003Z) 50% 0/cover no-repeat"
									height="150px"
									width="290px"
									padding="0 0px 0px 0px"
									margin="5px auto 0 auto"
								/>
								<Override
									slot="StackItemContent"
									margin="0px 0px 0px 324px"
									width="100%"
									background="#ffffff"
									opacity="0.3"
									box-shadow="inset 0 0 20px 0 rgba(6, 15, 40, 0.46)"
								/>
								<Override slot="link" text-align="center" margin="10px 0px 10px 0px">
									Коммутатор
									<br />
									{"\n\n\n"}
								</Override>
							</Components.CompStandart>
						</StackItem>
						<Section padding="0 0 0 0" margin="36px 0 0 0">
							<Override slot="SectionContent" margin="-10px 44.3125px 10px 44.3125px" padding="0px 0px 0 0px" />
							<Components.BorderButton width="60%" margin="0px 0px 10px 190px" padding="8px 10px 8px 10px">
								Подписки GOOSE-сообщений{" \n"}
								<br />
								{"\n\n\n"}
							</Components.BorderButton>
						</Section>
					</Box>
				</StackItem>
			</Stack>
			<Components.BlueButton>
				<Link href="goose1" color="#fff" text-decoration-line="initial">
					Пропустить
				</Link>
			</Components.BlueButton>
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