import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Text, Input, Link } from "@quarkly/widgets";
import BlackButton from "./BlackButton";
const defaultProps = {
	"gap": "16px"
};
const overrides = {
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "100%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"margin": "0 0 4px 0",
			"children": "Логин"
		}
	},
	"input": {
		"kind": "Input",
		"props": {
			"width": "100%",
			"name": "email",
			"type": "email",
			"required": true,
			"placeholder": "example@mail.com"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "100%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"margin": "0 0 4px 0",
			"children": "Пароль"
		}
	},
	"input1": {
		"kind": "Input",
		"props": {
			"width": "100%",
			"type": "text",
			"name": "password",
			"placeholder": "надежный пароль"
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "100%"
		}
	},
	"stackItemOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column"
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {
			"width": "100%"
		}
	},
	"blackButton": {
		"kind": "BlackButton",
		"props": {
			"focus-background": "#FFA750",
			"disabled": false,
			"type": "button",
			"children": <Link href="start" color="#ffffff" text-decoration-line="initial">
				Войти
			</Link>
		}
	}
};

const LoginForm = props => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Stack {...rest}>
		<StackItem {...override("stackItem")}>
			<Override {...override("stackItemOverride")} />
			<Text {...override("text")} />
			<Input onChange={e => setEmail(e.target.value)} {...override("input")} />
		</StackItem>
		<StackItem {...override("stackItem1")}>
			<Override {...override("stackItemOverride1")} />
			<Text {...override("text1")} />
			<Input onChange={e => setPassword(e.target.value)} {...override("input1")} />
		</StackItem>
		<StackItem {...override("stackItem2")}>
			<Override {...override("stackItemOverride2")} />
		</StackItem>
		<StackItem {...override("stackItem3")}>
			<BlackButton {...override("blackButton")} disabled={!email.length || !password.length} />
		</StackItem>
		{children}
	</Stack>;
};

Object.assign(LoginForm, { ...Stack,
	defaultProps,
	overrides
});
export default LoginForm;