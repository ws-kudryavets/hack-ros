import React from "react";
import theme from "theme";
import { Theme, Link, Image, Button, Text, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { MdMenu, MdFace } from "react-icons/md";
import { FaRegGem, FaRegLifeRing, FaRegCalendarCheck, FaRegStar } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				About | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"About | Website Example"} />
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
				margin="0px 32px 0px 32px"
				width="100%"
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
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
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
						lg-font="--headline2"
					>
						About Us.
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			sm-padding="0px 0 0px 0"
			quarkly-title="About"
			box-sizing="border-box"
			padding="90px 0px 100px 0px"
			background="--color-lightD1"
			border-color="--color-lightD2"
			border-style="solid"
			border-width="1px 0px 1px 0px"
			lg-padding="50px 0px 50px 0px"
			md-padding="50px 0px 50px 0px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				margin="0px 32px 0px 32px"
				sm-padding="24px 0px 24px 0px"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Text
				text-align="center"
				font="--base"
				opacity="0.6"
				letter-spacing="1px"
				margin="0px 0px 10px 0px"
				color="--dark"
				lg-margin="0px 0px 6px 0px"
				lg-text-align="center"
				quarkly-title="Title"
				text-transform="uppercase"
			>
				Who we are
			</Text>
			<Text
				font="--headline3"
				margin="0px 0px 0px 0px"
				letter-spacing="1px"
				color="--dark"
				text-align="center"
				width="85%"
				lg-font="--lead"
				sm-font="--base"
			>
				We’re a group of creatives who've built a business to make the world a better place.
			</Text>
		</Section>
		<Section
			box-sizing="border-box"
			padding="100px 0px 100px 0px"
			quarkly-title="Our Services"
			xl-padding="100px 0px 100px 0px"
			lg-padding="50px 0px 50px 0px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Text
				font="--base"
				margin="0px 0px 10px 0px"
				letter-spacing="1px"
				color="--dark"
				opacity="0.6"
				text-align="center"
				text-transform="uppercase"
				lg-margin="0px 0px 6px 0px"
				lg-text-align="center"
				quarkly-title="Title"
			>
				WHAT WE DO BEST
			</Text>
			<Text
				font="--headline2"
				margin="0px 0px 72px 0px"
				color="--dark"
				text-align="center"
				lg-text-align="center"
				lg-margin="0px 0px 48px 0px"
				md-font="--headline3"
				sm-margin="0px 0px 36px 0px"
			>
				Our Services
			</Text>
			<Stack width="100%" sm-margin="-16px 0px -16px 0px">
				{"    "}
				<StackItem
					width="33.33%"
					display="flex"
					lg-width="50%"
					margin="0px 0px 24px 0px"
					md-margin="0px 0px 0px 0px"
					md-width="100%"
				>
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					<Icon
						category="fa"
						icon={FaRegGem}
						size="82px"
						margin="0px 0px 19px 0px"
						font="36px sans-serif"
						color="--primary"
					/>
					<Text font="--lead" margin="0px 0px 10px 0px" display="inline-block" color="--darkL2">
						High Quality
					</Text>
					<Text
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
						color="--darkL2"
						lg-text-align="center"
						text-align="center"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="33.33%"
					display="flex"
					lg-width="50%"
					margin="0px 0px 24px 0px"
					md-margin="0px 0px 0px 0px"
					md-width="100%"
				>
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					<Icon
						category="fa"
						icon={FaRegLifeRing}
						size="82px"
						margin="0px 0px 19px 0px"
						font="36px sans-serif"
						color="--primary"
					/>
					<Text font="--lead" margin="0px 0px 10px 0px" display="inline-block" color="--darkL2">
						Best Support
					</Text>
					<Text
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
						color="--darkL2"
						lg-text-align="center"
						text-align="center"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="33.33%"
					display="flex"
					lg-width="50%"
					margin="0px 0px 24px 0px"
					md-margin="0px 0px 0px 0px"
					md-width="100%"
				>
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					<Icon
						category="md"
						icon={MdFace}
						size="82px"
						margin="0px 0px 19px 0px"
						font="36px sans-serif"
						color="--primary"
					/>
					<Text font="--lead" margin="0px 0px 10px 0px" display="inline-block" color="--darkL2">
						Personal Approach
					</Text>
					<Text
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
						color="--darkL2"
						lg-text-align="center"
						text-align="center"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="33.33%"
					display="flex"
					lg-width="50%"
					margin="0px 0px 24px 0px"
					md-margin="0px 0px 0px 0px"
					md-width="100%"
				>
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					<Icon
						category="fa"
						icon={FaRegCalendarCheck}
						size="82px"
						margin="0px 0px 19px 0px"
						font="36px sans-serif"
						color="--primary"
					/>
					<Text font="--lead" margin="0px 0px 10px 0px" display="inline-block" color="--darkL2">
						Flexible Schedule
					</Text>
					<Text
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
						color="--darkL2"
						lg-text-align="center"
						text-align="center"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="33.33%"
					display="flex"
					lg-width="50%"
					margin="0px 0px 24px 0px"
					md-width="100%"
					md-margin="0px 0px 0px 0px"
				>
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					<Icon
						category="fa"
						icon={FaRegStar}
						size="82px"
						margin="0px 0px 19px 0px"
						font="36px sans-serif"
						color="--primary"
					/>
					<Text font="--lead" margin="0px 0px 10px 0px" display="inline-block" color="--darkL2">
						Extensive Experience
					</Text>
					<Text
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
						color="--darkL2"
						lg-text-align="center"
						text-align="center"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="33.33%"
					display="flex"
					lg-width="50%"
					margin="0px 0px 24px 0px"
					md-width="100%"
					md-margin="0px 0px 0px 0px"
				>
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					<Icon
						category="ai"
						icon={AiOutlineThunderbolt}
						size="82px"
						margin="0px 0px 19px 0px"
						font="36px sans-serif"
						color="--primary"
					/>
					<Text font="--lead" margin="0px 0px 10px 0px" display="inline-block" color="--darkL2">
						Better Efficiency
					</Text>
					<Text
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
						color="--darkL2"
						lg-text-align="center"
						text-align="center"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			box-sizing="border-box"
			padding="80px 0px 80px 0px"
			quarkly-title="About"
			background="--color-lightD1"
			border-width="1px 0px 1px 0px"
			border-style="solid"
			border-color="--color-lightD2"
			lg-padding="50px 0px 50px 0px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Stack>
				{"    "}
				<StackItem width="33.33%" display="flex" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text
						font="--headline3"
						margin="0px 0px 10px 0px"
						display="inline-block"
						color="--darkL2"
						lg-margin="0px 0px 0px 0px"
						md-font="--lead"
					>
						Hi! I'm a paragraph.{" "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.33%" display="flex" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" />
					<Text
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
						color="--darkL2"
						lg-text-align="left"
						text-align="left"
					>
						Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer.
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="33.33%" display="flex" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text
						font="--base"
						margin="0px 0px 0px 0px"
						display="inline-block"
						opacity="0.6"
						color="--darkL2"
						lg-text-align="left"
						text-align="left"
					>
						Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			quarkly-title="USP"
			padding="75px 0 50px 0"
			lg-padding="50px 0 25px 0"
			sm-padding="50px 0 25px 0"
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
						white-space="nowrap"
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