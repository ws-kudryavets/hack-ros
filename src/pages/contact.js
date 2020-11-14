import React from "react";
import theme from "theme";
import { Theme, Link, Image, Button, Text, Input, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section, GoogleMap, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { MdMenu } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Contact | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"Contact | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			margin="0 0 0 0"
			padding="16px 0px 16px 0px"
			box-sizing="border-box"
			quarkly-title="Header"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
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
				<StackItem width="50%" display="block" quarkly-title="Menu" md-width="25%">
					<Override slot="StackItemContent" align-items="center" justify-content="center" md-justify-content="flex-end" />
					{"        "}
					<Components.BurgerMenu>
						<Override
							slot="menu"
							lg-transform="translateY(0px) translateX(0px)"
							lg-transition="transform 400ms ease 0s"
							md-position="fixed"
							display="flex"
							md-left={0}
							md-top={0}
							md-width="100%"
							md-height="100%"
							padding="0px 0 0px 0"
						>
							<Override
								slot="item"
								text-transform="uppercase"
								text-align="center"
								padding="8px 20px 8px 20px"
								md-padding="16px 40px 16px 40px"
							/>
							<Override slot="item-404" lg-display="none" display="none" />
							<Override slot="item-index" lg-display="none" display="none" />
							<Override
								slot="link"
								md-color="--dark"
								md-opacity=".5"
								md-transition="opacity .15s ease 0s"
								md-hover-opacity="1"
								md-active-opacity="1"
								md-font="16px/24px sans-serif"
								font="--base"
								text-decoration-line="initial"
								color="--dark"
								opacity=".5"
								transition="opacity .15s ease 0s"
								hover-opacity="1"
								letter-spacing="0.5px"
								text-transform="initial"
							/>
							<Override
								slot="link-active"
								md-opacity="1"
								md-cursor="default"
								opacity="1"
								color="--primary"
								cursor="default"
							/>
						</Override>
						<Override slot="icon,icon-close" category="md" icon={MdMenu} />
						<Override slot="icon" category="md" icon={MdMenu} size="36px" />
						<Override
							slot="menu-open"
							md-top={0}
							md-bottom={0}
							md-display="flex"
							md-flex-direction="column"
							md-align-items="center"
							md-justify-content="center"
						/>
						<Override slot="icon-open" md-position="fixed" md-top="24px" md-right="calc(4% + 4px)" />
					</Components.BurgerMenu>
					{"    "}
				</StackItem>
				<StackItem display="flex" quarkly-title="Side" width="25%" md-display="none">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
					<Button
						padding="8px 18px 8px 18px"
						font="--base"
						letter-spacing="0.5px"
						z-index="5"
						background="--color-primary"
						md-display="none"
						white-space="nowrap"
						border-radius="0px"
						hover-transform="translateY(-4px)"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
					>
						Contact Us
					</Button>
					{"   "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section quarkly-title="Hero" padding="25px 0 75px 0" lg-padding="25px 0 25px 0" justify-content="center">
			<Override
				slot="SectionContent"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
			/>
			<Stack>
				{"    "}
				<StackItem width="100%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						height="480px"
						background="radial-gradient(at center,--color-darkL2 23.3%,rgba(0,0,0,0) 82.4%),linear-gradient(180deg,rgba(155, 108, 252, 0.15) 0%,transparent 100%) 0 0 no-repeat,--color-darkL2"
						sm-height="180px"
						md-height="360px"
					/>
					{"        "}
					<Text
						font="--headline1"
						margin="0px 0px 0px 0px"
						display="flex"
						align-items="center"
						color="--light"
						justify-content="center"
						quarkly-title="Title"
						sm-font="normal 900 42px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
						sm-text-align="center"
						text-align="center"
						md-font="--headline2"
					>
						Contact Us.
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			box-sizing="border-box"
			quarkly-title="Contacts"
			padding="50px 0px 50px 0px"
			lg-padding="25px 0px 25px 0px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
			/>
			<Stack justify-content="flex-start" align-items="stretch" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem
					width="65%"
					display="flex"
					quarkly-title="Form"
					md-width="100%"
					sm-width="100%"
					md-margin="0px 0px 24px 0px"
					sm-margin="0px 0px 16px 0px"
				>
					<Override
						slot="StackItemContent"
						padding="48px 36px 54px 36px"
						flex-direction="column"
						sm-padding="24px 16px 24px 16px"
						background="--color-lightD1"
						md-padding="24px 36px 36px 36px"
						border-width="1px"
						border-style="solid"
						border-color="--color-lightD2"
					/>
					{"        "}
					<Text
						font="--headline3"
						margin="0px 0px 15px 0px"
						display="inline-block"
						quarkly-title="Title"
						md-font="--headline3"
					>
						Get in Touch.
					</Text>
					<Text
						font="--base"
						margin="0px 0px 28px 0px"
						display="inline-block"
						quarkly-title="Description"
						color="--dark"
						md-font="--base"
					>
						Feel free to contact us anytime. We'll get back to you as soon as possible!
					</Text>
					<Text
						font="--base"
						letter-spacing="1px"
						margin="0px 0px 10px 0px"
						quarkly-title="Name label"
						color="--dark"
					>
						NAME
					</Text>
					<Input
						margin="0px 0px 25px 0px"
						name="Name"
						border-color="--color-lightD2"
						border-width="1px"
						font="--base"
						padding="8px 16px 8px 16px"
						transition="border-color 400ms ease"
						type="text"
						quarkly-title="Name input"
						max-width="480px"
						focus-border-color="--color-primary"
						focus-border-width="1px"
					/>
					<Text
						font="--base"
						letter-spacing="1px"
						margin="0px 0px 10px 0px"
						quarkly-title="Email label"
						color="--dark"
					>
						EMAIL
					</Text>
					<Input
						margin="0px 0px 25px 0px"
						name="Name"
						border-width="1px"
						border-color="--color-lightD2"
						font="--base"
						padding="8px 16px 8px 16px"
						transition="border-color 400ms ease"
						type="email"
						quarkly-title="Email input"
						max-width="480px"
						focus-border-color="--color-primary"
						focus-border-width="1px"
					/>
					<Text
						font="--base"
						letter-spacing="1px"
						margin="0px 0px 10px 0px"
						quarkly-title="Message label"
						color="--dark"
					>
						MESSAGE
					</Text>
					<Input
						margin="0px 0px 25px 0px"
						name="Name"
						border-width="1px"
						border-color="--color-lightD2"
						font="--base"
						padding="8px 16px 8px 16px"
						transition="border-color 400ms ease"
						type="text"
						height="200px"
						as="textarea"
						required={false}
						quarkly-title="Message input"
						sm-margin="0px 0px 18px 0px"
						focus-border-color="--color-primary"
					/>
					<Button
						padding="8px 18px 8px 18px"
						font="--base"
						letter-spacing="0.5px"
						transition="opacity .15s ease 0s"
						position="relative"
						z-index="5"
						background="--color-primary"
						opacity="1"
						hover-opacity=".85"
						focus-box-shadow="none"
						hover-box-shadow="none"
						active-box-shadow="none"
						quarkly-title="Submit buton"
						border-radius="0px"
						md-font="--base"
					>
						Submit
					</Button>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="35%" display="flex" quarkly-title="Side" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						sm-margin="0px 0px 0px 0px"
						margin="0px 0px 0px 50px"
						align-items="flex-start"
						justify-content="flex-start"
						lg-margin="0px 0px 0px 0px"
						md-align-items="stretch"
					/>
					{"        "}
					<Box margin="0px 0px 36px 0px" xl-margin="0px 0px 24px 0px">
						<Text
							font="--base"
							letter-spacing="1px"
							margin="0px 0px 10px 0px"
							quarkly-title="Title"
							color="--dark"
							text-transform="uppercase"
							xl-margin="0px 0px 4px 0px"
						>
							Our location
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							display="inline-block"
							opacity="0.6"
							quarkly-title="Description"
							color="--dark"
						>
							4998 Hanover Street, New York, 10011
						</Text>
					</Box>
					<Box margin="0px 0px 36px 0px" quarkly-title="Working Hours" xl-margin="0px 0px 24px 0px">
						<Text
							font="--base"
							letter-spacing="1px"
							margin="0px 0px 10px 0px"
							quarkly-title="Title"
							color="--dark"
							text-transform="uppercase"
							xl-margin="0px 0px 4px 0px"
						>
							WORKING HOURS
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							display="inline-block"
							opacity="0.6"
							quarkly-title="Description"
							color="--dark"
						>
							6:00 a.m. - 10:00 p.m.
						</Text>
					</Box>
					<Box margin="0px 0px 36px 0px" quarkly-title="Contact" xl-margin="0px 0px 24px 0px">
						<Text
							font="--base"
							letter-spacing="1px"
							margin="0px 0px 10px 0px"
							quarkly-title="Title"
							color="--dark"
							text-transform="uppercase"
							xl-margin="0px 0px 4px 0px"
						>
							Contact us
						</Text>
						<Link
							href="mailto:hello@company.com"
							color="--dark"
							opacity="0.6"
							target="_blank"
							quarkly-title="Email"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							transition="opacity .15s ease 0s"
							hover-opacity="0.6"
							font="--base"
							text-decoration-line="initial"
							hover-text-decoration-line="underline"
						>
							hello@company.com
						</Link>
					</Box>
					<Box margin="0px 0px 36px 0px" quarkly-title="Working Hours" xl-margin="0px 0px 24px 0px">
						<Text
							font="--base"
							letter-spacing="1px"
							margin="0px 0px 10px 0px"
							quarkly-title="Title"
							color="--dark"
							text-transform="uppercase"
							xl-margin="0px 0px 4px 0px"
						>
							Call us
						</Text>
						<Link
							href="tel:+1(234)567-89-00"
							target="_blank"
							quarkly-title="Phone"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							display="block"
							color="--dark"
							text-decoration-line="initial"
							hover-opacity=".5"
							opacity="0.6"
							transition="opacity .15s ease 0s"
							font="--base"
						>
							+1(234)567-89-00
						</Link>
					</Box>
					<GoogleMap
						height="240px"
						width="100%"
						sm-height="240px"
						md-height="360px"
						query="New York Hanover Street"
						margin="auto 0px 0px 0px"
						filter="saturate(30%)"
					/>
					<Text
						font="--lead"
						display="inline-block"
						quarkly-title="Description"
						color="--dark"
						text-align="center"
						background="--color-lightD1"
						padding="14px 24px 14px 24px"
						margin="0px 0px 0px 0px"
						md-width="auto"
						xl-font="--base"
					>
						We're always happy to make valuable new contacts!
					</Text>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="50px 0px 50px 0px"
			quarkly-title="Team"
			box-sizing="border-box"
			lg-padding="25px 0px 25px 0px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				sm-min-width="none"
				sm-justify-content="flex-start"
				sm-flex-direction="column"
				sm-align-items="flex-start"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
			/>
			<Text
				text-align="center"
				font="--base"
				opacity="0.5"
				letter-spacing="1px"
				margin="0px 0px 10px 0px"
				color="--dark"
				text-transform="uppercase"
				lg-margin="0px 0px 6px 0px"
			>
				The team
			</Text>
			<Text
				font="--headline2"
				margin="0px 0px 55px 0px"
				color="--dark"
				text-align="center"
				width="100%"
				md-margin="0px 0px 16px 0px"
				lg-margin="0px 0px 30px 0px"
				md-font="--headline3"
				sm-text-align="left"
			>
				Meet Our Experts.
			</Text>
			<Stack
				lg-align-items="flex-start"
				lg-justify-content="center"
				quarkly-title="Cards"
				justify-content="space-between"
				md-justify-content="flex-start"
				sm-width="100%"
				sm-margin="-16px 0px -16px 0px"
			>
				<StackItem width="25%" lg-width="100%" lg-margin="0px 0px 0px 0px" quarkly-title="Description">
					<Override slot="StackItemContent" flex-direction="column" padding="0px 0px 0px 0px" />
					<Text
						font="--headline3"
						margin="0px 0px 8px 0px"
						text-align="left"
						color="--dark"
						quarkly-title="Name"
						md-font="--lead"
						sm-font="--base"
						lg-font="--lead"
						sm-margin="0px 0px 0px 0px"
					>
						We work every day to provide the best services and make our clients happy.
					</Text>
				</StackItem>
				<StackItem
					width="25%"
					lg-width="33.33%"
					sm-width="100%"
					lg-margin="0px 0px 30px 0px"
					quarkly-title="Card"
					md-width="100%"
					md-margin="0px 0px 0px 0px"
					sm-padding="16px 0px 16px 0px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						md-flex-direction="row"
						md-align-items="stretch"
						md-justify-content="flex-start"
						sm-flex-direction="row"
						md-max-height="100%"
					/>
					<Box
						background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-man.svg?v=2020-11-06T17:32:03.825Z) center center/100% no-repeat"
						width="100%"
						quarkly-title="Image"
						padding-bottom="(4 / 3) * 100%"
						padding="0px 0px 121% 0px"
						md-margin="0px 0px 0px 0px"
						hover-background="--color-lightD1 url(https://artemzhigalin.ru/src/default-website-user-man.svg) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						md-width="200px"
						md-padding="0px 0px 0px 0px"
						md-height="250px"
						sm-height="auto"
					/>
					<Box
						md-width="50%"
						md-margin="0px 0px 0px 24px"
						md-display="flex"
						md-flex-direction="column"
						sm-margin="0px 0px 0px 0px"
						sm-width="100%"
						sm-padding="0px 0px 10% 18px"
					>
						<Text
							font="--headline3"
							margin="24px 0px 8px 0px"
							text-align="left"
							color="--dark"
							quarkly-title="Name"
							md-margin="0px 0px 4px 0px"
							sm-margin="0px 0px 4px 0px"
							md-font="--lead"
						>
							Nathan K. Joe
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							text-align="left"
							opacity="0.6"
							color="--dark"
							quarkly-title="Position"
							md-margin="0px 0px 0px 0px"
						>
							Founder
						</Text>
						<Text
							font="--base"
							margin="18px 0px 0px 0px"
							display="inline-block"
							opacity="0.6"
							quarkly-title="Contacts"
							text-align="left"
							color="--dark"
							sm-margin="10px 0px 0px 0px"
						>
							<Link
								href="mailto:head@company.com"
								color="--dark"
								opacity="0.6"
								target="_blank"
								quarkly-title="Email"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								transition="opacity .15s ease 0s"
								font="--base"
								text-decoration-line="initial"
								hover-text-decoration-line="underline"
							>
								head@company.com
							</Link>
							<Link
								href="tel:+1(234)567-89-01"
								target="_blank"
								quarkly-title="Phone"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								display="block"
								color="--dark"
								text-decoration-line="initial"
								hover-opacity="1"
								opacity="1"
								transition="opacity .15s ease 0s"
								font="--base"
								hover-text-decoration-line="underline"
							>
								+1(234)567-89-01
							</Link>
						</Text>
					</Box>
				</StackItem>
				<StackItem
					lg-width="33.33%"
					sm-width="100%"
					width="25%"
					quarkly-title="Card"
					md-width="100%"
					sm-padding="16px 0px 16px 0px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						md-flex-direction="row"
						sm-flex-direction="row"
						md-align-items="stretch"
						md-max-height="100%"
					/>
					<Box
						background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-woman.svg?v=2020-11-06T17:32:24.681Z) center center/100% no-repeat"
						width="100%"
						quarkly-title="Image"
						padding="0px 0px 121% 0px"
						md-margin="0px 0px 0px 0px"
						md-padding="0px 0px 0px 0px"
						md-width="200px"
						hover-background="--color-lightD1 url(https://artemzhigalin.ru/src/default-website-user-woman.svg) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						md-height="250px"
						sm-height="auto"
					/>
					<Box
						md-margin="0px 0px 0px 24px"
						md-display="flex"
						md-flex-direction="column"
						md-width="50%"
						sm-margin="0px 0px 0px 0px"
						sm-width="100%"
						sm-padding="0px 0px 10% 18px"
					>
						<Text
							font="--headline3"
							margin="24px 0px 8px 0px"
							text-align="left"
							color="--dark"
							quarkly-title="Name"
							md-margin="0px 0px 4px 0px"
							md-font="--lead"
							sm-margin="0px 0px 4px 0px"
						>
							Claire R. Peery
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							text-align="left"
							opacity="0.6"
							color="--dark"
							quarkly-title="Position"
							md-margin="0px 0px 0px 0px"
						>
							Designer
						</Text>
						<Text
							font="--base"
							margin="18px 0px 0px 0px"
							display="inline-block"
							opacity="0.6"
							quarkly-title="Contacts"
							text-align="left"
							color="--dark"
							sm-margin="10px 0px 0px 0px"
						>
							<Link
								href="mailto:design@company.com"
								color="--dark"
								opacity="0.6"
								target="_blank"
								quarkly-title="Email"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								transition="opacity .15s ease 0s"
								font="--base"
								text-decoration-line="initial"
								hover-text-decoration-line="underline"
							>
								design@company.com
							</Link>
							<Link
								href="tel:+1(234)567-89-02"
								target="_blank"
								quarkly-title="Phone"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								display="block"
								color="--dark"
								text-decoration-line="initial"
								hover-opacity="1"
								opacity="1"
								transition="opacity .15s ease 0s"
								font="--base"
								hover-text-decoration-line="underline"
							>
								+1(234)567-89-02
							</Link>
						</Text>
					</Box>
				</StackItem>
				<StackItem
					lg-width="33.33%"
					sm-width="100%"
					width="25%"
					quarkly-title="Card"
					md-width="100%"
					sm-padding="16px 0px 16px 0px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						md-flex-direction="row"
						sm-flex-direction="row"
						md-align-items="stretch"
						md-max-height="100%"
					/>
					<Box
						background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-man.svg?v=2020-11-06T17:32:03.825Z) center center/100% no-repeat"
						width="100%"
						quarkly-title="Image"
						padding="0px 0px 121% 0px"
						md-margin="0px 0px 0px 0px"
						md-padding="0px 0px 0px 0px"
						md-width="200px"
						hover-background="--color-lightD1 url(https://artemzhigalin.ru/src/default-website-user-man.svg) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						md-height="250px"
						sm-height="auto"
					/>
					<Box
						md-margin="0px 0px 0px 24px"
						md-display="flex"
						md-flex-direction="column"
						md-width="50%"
						sm-margin="0px 0px 0px 0px"
						sm-width="100%"
						sm-padding="0px 0px 10% 18px"
					>
						<Text
							font="--headline3"
							margin="24px 0px 8px 0px"
							color="--dark"
							quarkly-title="Name"
							md-margin="0px 0px 4px 0px"
							md-font="--lead"
							sm-margin="0px 0px 4px 0px"
						>
							David R. Lema
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							opacity="0.6"
							color="--dark"
							quarkly-title="Position"
							md-margin="0px 0px 0px 0px"
						>
							Developer
						</Text>
						<Text
							font="--base"
							margin="18px 0px 0px 0px"
							display="inline-block"
							opacity="0.6"
							quarkly-title="Contacts"
							color="--dark"
							sm-margin="10px 0px 0px 0px"
						>
							<Link
								href="mailto:dev@company.com"
								color="--dark"
								opacity="0.6"
								target="_blank"
								quarkly-title="Email"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								transition="opacity .15s ease 0s"
								font="--base"
								text-decoration-line="initial"
								hover-text-decoration-line="underline"
							>
								dev@company.com
							</Link>
							<Link
								href="tel:+1(234)567-89-03"
								target="_blank"
								quarkly-title="Phone"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								display="block"
								color="--dark"
								text-decoration-line="initial"
								hover-opacity="1"
								opacity="1"
								transition="opacity .15s ease 0s"
								font="--base"
								hover-text-decoration-line="underline"
							>
								+1(234)567-89-03
							</Link>
						</Text>
					</Box>
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Section quarkly-title="USP" padding="75px 0 50px 0" lg-padding="25px 0 25px 0" justify-content="center">
			<Override
				slot="SectionContent"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
			/>
			<Stack>
				{"    "}
				<StackItem width="100%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						height="480px"
						background="linear-gradient(180deg,rgba(24, 29, 34, 0.5) 0%,transparent 100%) 0 0 no-repeat,--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-fireworks.svg?v=2020-11-06T17:22:27.801Z) center center/cover no-repeat"
						flex-direction="column"
						md-height="360px"
						padding="36px 24px 36px 24px"
						sm-height="280px"
					/>
					{"        "}
					<Text
						margin="10px 0px 15px 0px"
						font="--headline2"
						text-align="center"
						quarkly-title="Title"
						color="--light"
						md-font="--headline3"
					>
						Make It Work.
					</Text>
					<Text
						margin="0px 0px 28px 0px"
						font="--lead"
						opacity="0.6"
						text-align="center"
						quarkly-title="Description"
						color="--light"
						max-width="720px"
					>
						Good design adds value faster than it adds cost.
					</Text>
					<Button
						padding="8px 36px 8px 36px"
						font="--lead"
						letter-spacing="0.5px"
						transition="opacity .15s ease 0s"
						position="relative"
						z-index="5"
						background="--color-light"
						opacity="1"
						hover-opacity=".85"
						focus-box-shadow="none"
						hover-box-shadow="none"
						active-box-shadow="none"
						margin="10px auto 0px auto"
						width="fit-content"
						md-font="--base"
						color="--darkL2"
					>
						Start Now
					</Button>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			margin="0 0 0 0"
			padding="16px 0 16px 0"
			box-sizing="border-box"
			quarkly-title="Footer"
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
				<StackItem display="flex" quarkly-title="Logo" md-width="50%" width="25%">
					<Override slot="StackItemContent" align-items="center" />
					<Image width="28px" height="28px" src="https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-quarkly-logo-grey.svg?v=2020-11-06T17:24:35.270Z" />
					<Link
						href="https://quarkly.io/"
						font="--base"
						color="--dark"
						opacity="0.6"
						text-decoration-line="initial"
						text-align="left"
						margin="1px 0px 0px 10px"
						hover-text-decoration-line="underline"
					>
						Made on Quarkly
					</Link>
					{"        "}
				</StackItem>
				<StackItem display="flex" quarkly-title="Side" width="75%" md-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
					<SocialMedia facebook="https://www.facebook.com/quarklyapp/" twitter="https://twitter.com/quarklyapp" youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw">
						<Override slot="link" background="none" border-radius="50%" />
						<Override slot="icon" color="--dark" />
					</SocialMedia>
					{"   "}
				</StackItem>
				{"    "}
			</Stack>
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