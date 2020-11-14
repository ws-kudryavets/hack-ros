import React, { useState, useCallback } from 'react';
import { useOverrides, Menu } from '@quarkly/components';
import { Box, Icon } from '@quarkly/widgets';
import { MdMenu } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
const overrides = {
	'icon': {
		'kind': 'Icon',
		'props': {
			'color': '--white',
			'background': 'none',
			'user-select': 'none',
			'cursor': 'pointer',
			'position': 'relative',
			'z-index': '102',
			'display': 'none',
			'md-display': 'block',
			"category": "md",
			"icon": MdMenu,
			"size": "36px"
		}
	},
	'icon-close': {
		'kind': 'Icon',
		'props': {
			'category': 'fi',
			'icon': FiMenu
		}
	},
	'icon-open': {
		'kind': 'Icon',
		'props': {
			'category': 'fi',
			'icon': FiX,
			"md-position": "fixed",
			"md-top": "24px",
			"md-right": "calc(4% + 4px)"
		}
	},
	'menu': {
		'kind': 'Menu',
		'props': {
			'md-background': 'white',
			'position': 'relative',
			'z-index': '101',
			"lg-transform": "translateY(0px) translateX(0px)",
			"lg-transition": "transform 400ms ease 0s",
			"md-position": "fixed",
			"display": "flex",
			"md-left": 0,
			"md-top": 0,
			"md-width": "100%",
			"md-height": "100%",
			"padding": "8px 0 6px 0"
		},
		"overrides": {
			"item": {
				"props": {
					"text-transform": "uppercase",
					"text-align": "center",
					"padding": "8px 20px 8px 20px",
					"md-padding": "16px 40px 16px 40px"
				}
			},
			"item-404": {
				"props": {
					"lg-display": "none",
					"display": "none"
				}
			},
			"item-index": {
				"props": {
					"lg-display": "none",
					"display": "none"
				}
			},
			"link": {
				"props": {
					"md-color": "--dark",
					"md-opacity": ".5",
					"md-transition": "opacity .15s ease 0s",
					"md-hover-opacity": "1",
					"md-active-opacity": "1",
					"md-font": "16px/24px sans-serif",
					"font": "--base",
					"text-decoration-line": "initial",
					"color": "--dark",
					"opacity": ".5",
					"transition": "opacity .15s ease 0s",
					"hover-opacity": "1",
					"letter-spacing": "1px"
				}
			},
			"link-active": {
				"props": {
					"md-opacity": "1",
					"md-cursor": "default",
					"opacity": "1"
				}
			}
		}
	},
	'menu-open': {
		'kind': 'Menu',
		'props': {
			"md-top": 0,
			"md-bottom": 0,
			"md-display": "flex",
			"md-flex-direction": "column",
			"md-align-items": "center",
			"md-justify-content": "center"
		}
	},
	'menu-close': {
		'kind': 'Menu',
		'props': {
			'md-display': 'none',
			'sm-display': 'none'
		}
	},
	"icon,icon-close": {
		"props": {
			"category": "md",
			"icon": MdMenu
		}
	}
};
const defaultProps = {};

const BurgerMenu = props => {
	const [isOpen, setOpen] = useState(false);
	const handlerOpen = useCallback(() => setOpen(!isOpen), [isOpen]);
	const {
		override,
		rest
	} = useOverrides(props, overrides, {});
	return <Box {...rest}>
		      
		<Icon {...override('icon', `icon-${isOpen ? 'open' : 'close'}`)} onPointerDown={handlerOpen} />
		      
		<Menu {...override('menu', `menu-${isOpen ? 'open' : 'close'}`)} />
		    
	</Box>;
};

Object.assign(BurgerMenu, {
	overrides,
	defaultProps
});
export default BurgerMenu;