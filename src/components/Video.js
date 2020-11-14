import React from "react";
import { useOverrides, Section } from "@quarkly/components";
const defaultProps = {
	"background": "--color-darkL2"
};
const overrides = {
	"image": {
		"kind": "Image",
		"props": {
			"width": "100%",
			"src": "https://uploads.quarkly.io/5fae1bc508b41a001fec14bc/images/Screenshot_1.png?v=2020-11-14T09:46:00.671Z"
		}
	}
};

const Video = props => {
	const {
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<div style={{
			width: '100%'
		}}>
			<iframe title="video" width="100%" height="315" src="https://www.youtube.com/embed/9J1ZG7pt3Bw"></iframe>
		</div>
	</Section>;
};

Object.assign(Video, { ...Section,
	defaultProps,
	overrides
});
export default Video;