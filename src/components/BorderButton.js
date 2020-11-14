import React from "react";
import { useOverrides } from "@quarkly/components";
import { Button } from "@quarkly/widgets";
const defaultProps = {
	"padding": "8px 18px 8px 18px",
	"font": "--base",
	"letter-spacing": "2px",
	"z-index": "5",
	"md-display": "none",
	"white-space": "nowrap",
	"border-radius": "2px",
	"hover-transform": "translateY(-4px)",
	"transition": "transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s",
	"border-color": "#0077cc",
	"background": "#ffffff",
	"color": "#0077cc",
	"border-width": "2px",
	"active-border-width": "2px",
	"active-border-color": "#ffa750",
	"border-style": "solid",
	"disabled-color": "#ffffff",
	"active-background": "#ffa750",
	"focus-border-width": "1px",
	"children": "Личный кабинет"
};
const overrides = {};

const BorderButton = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Button {...rest}>
		{children}
	</Button>;
};

Object.assign(BorderButton, { ...Button,
	defaultProps,
	overrides
});
export default BorderButton;