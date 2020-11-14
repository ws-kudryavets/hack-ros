import React from "react";
import { useOverrides, Override, Section } from "@quarkly/components";
import { Text, Strong, Input, Link } from "@quarkly/widgets";
import BlackButton from "./BlackButton";
import BlueButton from "./BlueButton";
const defaultProps = {
	"width": "30%"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"font": "normal 500 20px/1.5 --fontFamily-sans",
			"color": "--grey",
			"margin": "0 0px 16px 0px",
			"children": <>
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Вопрос к лекции:
				</Strong>
				<br />
				Опишите для чего применяются GOOSE-сообщения и в чём их преимущества
			</>
		}
	},
	"input": {
		"kind": "Input",
		"props": {
			"height": "200px"
		}
	},
	"section": {
		"kind": "Section",
		"props": {
			"height": "230px"
		}
	},
	"sectionOverride": {
		"kind": "Override",
		"props": {
			"slot": "SectionContent"
		}
	},
	"blackButton": {
		"kind": "BlackButton",
		"props": {
			"background": "#0077cc",
			"width": "50%",
			"disabled": true,
			"margin": "0px 0px 0px 180px",
			"children": "Отравить"
		}
	},
	"blueButton": {
		"kind": "BlueButton",
		"props": {
			"width": "100%",
			"children": <Link
				href="goose"
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
				color="#fff"
				text-decoration-line="initial"
			>
				Далее
			</Link>
		}
	}
};

const AskQuestionAndNext = props => {
	const [text, setText] = React.useState('');
	const [isAsk, setAsk] = React.useState(false);
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Text {...override("text")} />
		<Input {...override("input")} onChange={e => setText(e.target.value)} />
		<Section {...override("section")}>
			<Override {...override("sectionOverride")} />
			<BlackButton {...override("blackButton")} onClick={() => !isAsk && setAsk(true)} disabled={!text.length} />
			{isAsk && 'Ответ принят'}
		</Section>
		<BlueButton {...override("blueButton")} disabled={!text.length || !isAsk} />
		{children}
	</Section>;
};

Object.assign(AskQuestionAndNext, { ...Section,
	defaultProps,
	overrides
});
export default AskQuestionAndNext;