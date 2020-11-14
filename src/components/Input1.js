import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Text, Input } from "@quarkly/widgets";
const defaultProps = {
	"width": "100%",
	"sm-width": "100%",
	"height": "280px"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"font": "normal 900 36px/1.2 --fontFamily-sans",
			"text-align": "left",
			"margin": "16px 0px 16px 20px",
			"children": "LED 1"
		}
	},
	"stack": {
		"kind": "Stack",
		"props": {
			"height": "50px",
			"margin": "0 -16px -16px -16px"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex",
			"height": "50px"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"margin": "0px 0px 0px 10px",
			"width": "50%"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--headline3",
			"margin": "0px 0px 0px 10px",
			"display": "inline-block",
			"children": <>
				IP адрес{" \n"}
				<br />
				{"\n\n\n"}
			</>
		}
	},
	"input": {
		"kind": "Input",
		"props": {
			"width": "45%",
			"border-color": "--color-primary",
			"height": "50px",
			"border-width": "1px"
		}
	},
	"stack1": {
		"kind": "Stack",
		"props": {
			"margin": "40px -16px -16px -16px"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"margin": "0px 0px 0px 10px",
			"width": "50%"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "--headline3",
			"margin": "0px 0px 0px 10px",
			"display": "inline-block",
			"children": <>
				Маска подсети{" \n"}
				<br />
				{"\n\n\n"}
			</>
		}
	},
	"input1": {
		"kind": "Input",
		"props": {
			"width": "45%",
			"border-color": "--color-primary",
			"height": "50px",
			"border-width": "1px"
		}
	}
};

const Input1 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <StackItem {...rest}>
		<Override
			slot="StackItemContent"
			flex-direction="column"
			box-shadow="2px 4px 10px 0 rgba(0, 0, 0, 0.28)"
			background="#ffffff"
			height="200px"
		/>
		<Text {...override("text")} />
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				{"        "}
				<Text {...override("text1")} />
				{"    "}
			</StackItem>
			{"    "}
			<Input {...override("input")} />
		</Stack>
		<Stack {...override("stack1")}>
			{"    "}
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				{"        "}
				<Text {...override("text2")} />
				{"    "}
			</StackItem>
			{"    "}
			<Input {...override("input1")} />
		</Stack>
		{children}
	</StackItem>;
};

Object.assign(Input1, { ...StackItem,
	defaultProps,
	overrides
});
export default Input1;