import React from "react";
import { useOverrides, Override, Section } from "@quarkly/components";
import { Text } from "@quarkly/widgets";
import BlueButton from "./BlueButton";
const defaultProps = {
	"padding": "100px 0",
	"sm-padding": "40px 0"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"as": "h2",
			"font": "--headline1",
			"md-font": "--headline2",
			"margin": "20px 0 0 0",
			"children": "404"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"as": "p",
			"font": "--lead",
			"margin": "20px 0 0 0",
			"children": "Эта страница ещё не создана"
		}
	},
	"section": {
		"kind": "Section",
		"props": {}
	},
	"blueButton": {
		"kind": "BlueButton",
		"props": {
			"type": "button",
			"children": "На главную"
		}
	}
};

const Comp = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" align-items="center" />
		<Text {...override("text")} />
		<Text {...override("text1")} />
		<Section {...override("section")} />
		<BlueButton {...override("blueButton")} />
		{children}
	</Section>;
};

Object.assign(Comp, { ...Section,
	defaultProps,
	overrides
});
export default Comp;