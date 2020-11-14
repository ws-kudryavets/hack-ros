import React from "react";
import { useOverrides, SocialMedia, Section } from "@quarkly/components";
import { Image, Box } from "@quarkly/widgets";
const defaultProps = {
	"height": "40px",
	"quarkly-title": "Footer"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"padding": "12px 0",
			"justify-content": "space-between",
			"align-items": "center",
			"flex-direction": "row",
			"md-flex-direction": "column"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "120px",
			"height": "64px",
			"src": "https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/logo2.png?v=2020-11-13T21:02:57.282Z"
		}
	},
	"socialMedia": {
		"kind": "SocialMedia",
		"props": {
			"facebook": "https://www.facebook.com/official.rosseti/",
			"vkontakte": "https://vk.com/rosseti",
			"instagram": "https://www.instagram.com/rosseti_official/?hl=ru"
		}
	}
};

const FooterTech = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<Image {...override("image")} />
			<SocialMedia {...override("socialMedia")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(FooterTech, { ...Section,
	defaultProps,
	overrides
});
export default FooterTech;