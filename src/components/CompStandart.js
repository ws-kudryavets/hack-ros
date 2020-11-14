import React from "react";
import { useOverrides, Override, StackItem } from "@quarkly/components";
import { Box, Link } from "@quarkly/widgets";
const defaultProps = {
	"width": "50%",
	"sm-width": "100%",
	"height": "200px"
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
	"link": {
		"kind": "Link",
		"props": {
			"href": "#",
			"font": "normal 500 18px/1.2 --fontFamily-sans",
			"margin": "20px 0px 10px 0px",
			"children": <>
				РЗА IED 1
				<br />
				{"\n\n\n"}
			</>
		}
	}
};

const CompStandart = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <StackItem {...rest}>
		<Override slot="StackItemContent" flex-direction="column" background="--color-lightD1" box-shadow="2px 4px 10px 0 rgba(0, 0, 0, 0.28)" />
		<Box {...override("box")} />
		<Link {...override("link")} />
		{children}
	</StackItem>;
};

Object.assign(CompStandart, { ...StackItem,
	defaultProps,
	overrides
});
export default CompStandart;