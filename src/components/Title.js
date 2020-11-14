import React from "react";
import { useOverrides, Override, Section } from "@quarkly/components";
import { Text, Strong, Span } from "@quarkly/widgets";
const defaultProps = {
	"color": "--light",
	"padding": "50px 0 50px 0",
	"sm-padding": "40px 0",
	"position": "relative"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "6px 0",
			"font": "--headline3",
			"color": "#5f5f5f",
			"width": "100%",
			"children": <>
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Задание 1.{" \n\n"}
				</Strong>
				<Span
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Настройка IED на прием-передачу GOOSE-сообщений{" \n"}
					<br />
					{"\n\n\n"}
				</Span>
			</>
		}
	}
};

const Title = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override slot="SectionContent" />
		<Text {...override("text")} />
		{children}
	</Section>;
};

Object.assign(Title, { ...Section,
	defaultProps,
	overrides
});
export default Title;