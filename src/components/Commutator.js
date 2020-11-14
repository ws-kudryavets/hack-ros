import React from "react";
import { useOverrides, Override, StackItem } from "@quarkly/components";
import { Box, Link } from "@quarkly/widgets";
const defaultProps = {
	"width": "300px",
	"sm-width": "100%",
	"height": "200px",
	"margin": "0px 0px 0px 0px"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"width": "290px",
			"height": "150px",
			"margin": "5px auto 0 auto",
			"background": "url(https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/30-01-01.jpg?v=2020-11-14T10:38:26.003Z) 50% 0/cover no-repeat",
			"border-radius": 0,
			"padding": "0 0px 0px 0px"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "#",
			"font": "normal 500 18px/1.2 --fontFamily-sans",
			"margin": "10px 0px 10px 0px",
			"text-align": "center",
			"children": <>
				Коммутатор
				<br />
				{"\n\n\n"}
			</>
		}
	}
};

const Commutator = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <StackItem {...rest}>
		<Override
			slot="StackItemContent"
			flex-direction="column"
			background="--color-lightD1"
			box-shadow="2px 4px 10px 0 rgba(0, 0, 0, 0.28)"
			opacity="0.3"
		/>
		<Box {...override("box")} />
		<Link {...override("link")} />
		{children}
	</StackItem>;
};

Object.assign(Commutator, { ...StackItem,
	defaultProps,
	overrides
});
export default Commutator;