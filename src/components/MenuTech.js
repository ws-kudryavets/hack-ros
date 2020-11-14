import React from "react";
import { useOverrides, Override, StackItem, Stack, Section } from "@quarkly/components";
import { Image, Link, Button } from "@quarkly/widgets";
const defaultProps = {
	"margin": "0 0 0 0",
	"padding": "16px 0 16px 0",
	"box-sizing": "border-box",
	"quarkly-title": "Header",
	"justify-content": "center"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"display": "flex",
			"quarkly-title": "Logo",
			"md-width": "75%",
			"width": "25%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "/",
			"position": "relative",
			"transition": "opacity 200ms ease",
			"quarkly-title": "Link"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/%D0%BB%D0%BE%D0%B3%D0%BE-04.jpg?v=2020-11-14T08:34:33.642Z",
			"width": "80%",
			"z-index": "3"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"display": "flex",
			"quarkly-title": "Side",
			"width": "75%",
			"md-display": "none"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center",
			"justify-content": "flex-end"
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"padding": "8px 18px 8px 18px",
			"font": "--base",
			"letter-spacing": "0.5px",
			"z-index": "5",
			"background": "--color-primary",
			"md-display": "none",
			"white-space": "nowrap",
			"border-radius": "0px",
			"hover-transform": "translateY(-4px)",
			"transition": "transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s",
			"children": <>
				Личный кабинет{"\n\n"}
			</>
		}
	}
};

const MenuTech = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			width="100%"
			margin="0px 32px 0px 32px"
			md-margin="0px 16px 0px 16px"
			min-width="auto"
		/>
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				{"        "}
				<Link {...override("link")}>
					<Image {...override("image")} />
				</Link>
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				<Button {...override("button")} />
				{"   "}
			</StackItem>
			{"    "}
		</Stack>
		{children}
	</Section>;
};

Object.assign(MenuTech, { ...Section,
	defaultProps,
	overrides
});
export default MenuTech;