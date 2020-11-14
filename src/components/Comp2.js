import React from "react";
import { useOverrides, Override, StackItem } from "@quarkly/components";
import { Box, Link } from "@quarkly/widgets";
import BlueButton from "./BlueButton";
const defaultProps = {
	"width": "20%",
	"sm-width": "100%",
	"height": "200px",
	"margin": "10px 0px 0px 140px",
	"box-shadow": "2px 4px 10px 0 rgba(0, 0, 0, 0.28)"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"width": "100%",
			"height": "120px",
			"margin": "0 auto",
			"background": "url(https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/29-01-02.jpg?v=2020-11-14T07:28:13.307Z) 50% 0/cover no-repeat",
			"border-radius": 0
		}
	},
	"blueButton": {
		"kind": "BlueButton",
		"props": {
			"width": "90%",
			"margin": "0px 0px 0px 8px",
			"children": <Link href="goose1" color="#fff" text-decoration-line="initial">
				Настроить
			</Link>
		}
	}
};

const Comp2 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <StackItem {...rest}>
		<Override slot="StackItemContent" flex-direction="column" background="#ffffff" />
		<Box {...override("box")} />
		<BlueButton {...override("blueButton")} />
		{children}
	</StackItem>;
};

Object.assign(Comp2, { ...StackItem,
	defaultProps,
	overrides
});
export default Comp2;