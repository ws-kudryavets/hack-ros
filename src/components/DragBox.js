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
			"margin": "0 auto",
			"background": "url(https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/29-01-05.jpg?v=2020-11-14T09:37:16.129Z) 50% 0/cover no-repeat",
			"border-radius": 0,
			"height": "120px"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "#",
			"font": "normal 500 18px/1.2 --fontFamily-sans",
			"margin": "20px 0px 10px 0px",
			"children": "Кабель \nRS485"
		}
	}
};

const DragBox = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <StackItem {...rest}>
		<Override slot="StackItemContent" flex-direction="column" box-shadow="2px 4px 10px 0 rgba(0, 0, 0, 0.28)" background="#ffffff" />
		<Box {...override("box")} />
		<Link {...override("link")} />
		{children}
	</StackItem>;
};

Object.assign(DragBox, { ...StackItem,
	defaultProps,
	overrides
});
export default DragBox;