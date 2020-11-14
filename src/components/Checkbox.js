import React from 'react';
import atomize from "@quarkly/atomize";

const Checkbox = props => {
	const [x, setX] = React.useState(false);
	return <input
		data-qid={props['data-qid']}
		className={props.className}
		type="checkbox"
		checked={x}
		onChange={() => setX(!x)}
	/>;
};

export default atomize(Checkbox)({
	name: "Checkbox",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "Checkbox — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		name: {
			control: "input"
		},
		id: {
			control: "input"
		}
	}
});