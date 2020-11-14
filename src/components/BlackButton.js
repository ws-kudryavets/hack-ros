import React from "react";
import { useOverrides } from "@quarkly/components";
import { Button } from "@quarkly/widgets";
const defaultProps = {
	"background": "--color-dark",
	"width": "160px",
	"focus-background": "#cd8c1c",
	"focus-color": "#000000",
	"active-background": "#003d9c",
	"type": "button",
	"disabled": false,
	"children": "Войти"
};
const overrides = {};

const BlackButton = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Button {...rest}>
		{children}
	</Button>;
};

Object.assign(BlackButton, { ...Button,
	defaultProps,
	overrides
});
export default BlackButton;