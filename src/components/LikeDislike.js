import React from "react";
import { useOverrides } from "@quarkly/components";
import { Icon, Box } from "@quarkly/widgets";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
const defaultProps = {
	"width": "140px",
	"display": "flex"
};
const overrides = {
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "ai",
			"icon": AiOutlineDislike,
			"size": "50px",
			"color": "#d83d3d"
		}
	},
	"icon1": {
		"kind": "Icon",
		"props": {
			"category": "ai",
			"icon": AiOutlineLike,
			"size": "50px",
			"color": "#189c18",
			"margin": "0px 0px 0px 20px"
		}
	}
};

const LikeDislike = props => {
	const [active, setActive] = React.useState(0);
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Icon onClick={() => setActive(1)} {...override("icon")} style={active === 2 ? {
			color: '#999'
		} : {}} />
		<Icon onClick={() => setActive(2)} {...override("icon1")} style={active === 1 ? {
			color: '#999'
		} : {}} />
		{children}
	</Box>;
};

Object.assign(LikeDislike, { ...Box,
	defaultProps,
	overrides
});
export default LikeDislike;