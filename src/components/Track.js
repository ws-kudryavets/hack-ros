import React from "react";
import { useOverrides, Override, Section } from "@quarkly/components";
import { Image } from "@quarkly/widgets";
const defaultProps = {
	"color": "--light",
	"padding": "0 0 0 0",
	"sm-padding": "40px 0",
	"position": "relative",
	"height": "48px"
};
const overrides = {
	"image": {
		"kind": "Image",
		"props": {
			"width": "100%",
			"height": "64px",
			"src": "https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/1.svg?v=2020-11-14T18:12:08.840Z"
		}
	}
};

const Track = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" width="100%" />
		<Image {...override("image")} />
		{children}
	</Section>;
};

Object.assign(Track, { ...Section,
	defaultProps,
	overrides
});
export default Track;