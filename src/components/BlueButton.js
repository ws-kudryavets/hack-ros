import React from "react";
import { useOverrides } from "@quarkly/components";
import BlackButton from "./BlackButton";
const defaultProps = {
	"background": "#0077cc",
	"width": "20%"
};
const overrides = {};

const BlueButton = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <BlackButton {...rest}>
		{children}
	</BlackButton>;
};

Object.assign(BlueButton, { ...BlackButton,
	defaultProps,
	overrides
});
export default BlueButton;