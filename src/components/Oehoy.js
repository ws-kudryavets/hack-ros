import React, { useState, useCallback } from 'react';
import atomize from "@quarkly/atomize";
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { NativeTypes, HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import CompStandart from './CompStandart';
import Comp2 from './Comp2';
const ItemTypes = {
	FOOD: 'food',
	GLASS: 'glass',
	PAPER: 'paper'
}; // const styleBox = {
//     border: '1px dashed gray',
//     backgroundColor: 'white',
//     padding: '0.5rem 1rem',
//     marginRight: '1.5rem',
//     marginBottom: '1.5rem',
//     cursor: 'move',
//     float: 'left',
// };

const style = {
	height: '205px',
	width: '216px' // marginRight: '1.5rem',
	// marginBottom: '1.5rem',
	// color: 'white',
	// padding: '1rem',
	// textAlign: 'center',
	// fontSize: '1rem',
	// lineHeight: 'normal',
	// float: 'left',

};

const Dustbin = ({
	accept,
	lastDroppedItem,
	onDrop
}) => {
	const [, drop] = useDrop({
		accept,
		drop: onDrop,
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	}); // const isActive = isOver && canDrop;
	// let backgroundColor = '#222';
	// if (isActive) {
	//     backgroundColor = 'darkgreen';
	// }
	// else if (canDrop) {
	//     backgroundColor = 'darkkhaki';
	// }

	return <div ref={drop} style={{ ...style,
		...(!lastDroppedItem ? {
			opacity: 0.2
		} : {})
	}}>
		{!lastDroppedItem ? <CompStandart /> : <Comp2 style={{
			margin: 0,
			width: 'inherit'
		}} />}
	</div>;
};

const Box = ({
	name,
	type,
	isDropped
}) => {
	const [, drag] = useDrag({
		item: {
			name,
			type
		},
		collect: monitor => ({
			opacity: monitor.isDragging() ? 0.4 : 1
		})
	});
	return <div ref={drag} style={style}>
		{isDropped ? <s>
			<CompStandart />
		</s> : <CompStandart />}
	</div>;
};

const Container = () => {
	const [dustbins, setDustbins] = useState([{
		accepts: [ItemTypes.GLASS],
		lastDroppedItem: null
	}, {
		accepts: [ItemTypes.FOOD],
		lastDroppedItem: null
	}, {
		accepts: [ItemTypes.PAPER, ItemTypes.GLASS, NativeTypes.URL],
		lastDroppedItem: null
	}, {
		accepts: [ItemTypes.PAPER, NativeTypes.FILE],
		lastDroppedItem: null
	}]);
	const [boxes] = useState([{
		name: 'Bottle',
		type: ItemTypes.GLASS
	}, {
		name: 'Banana',
		type: ItemTypes.FOOD
	}, {
		name: 'Magazine',
		type: ItemTypes.PAPER
	}]);
	const [droppedBoxNames, setDroppedBoxNames] = useState([]);

	function isDropped(boxName) {
		return droppedBoxNames.indexOf(boxName) > -1;
	}

	const handleDrop = useCallback((index, item) => {
		const {
			name
		} = item;
		setDroppedBoxNames(update(droppedBoxNames, name ? {
			$push: [name]
		} : {
			$push: []
		}));
		setDustbins(update(dustbins, {
			[index]: {
				lastDroppedItem: {
					$set: item
				}
			}
		}));
	}, [droppedBoxNames, dustbins]);
	return <div style={{
		display: 'flex'
	}}>
		<div style={{
			overflow: 'hidden',
			clear: 'both'
		}}>
			{boxes.map(({
				name,
				type
			}, index) => <Box name={name} type={type} isDropped={isDropped(name)} key={index} />)}
		</div>
		<div style={{
			display: 'flex',
			overflow: 'hidden',
			clear: 'both'
		}}>
			{dustbins.map(({
				accepts,
				lastDroppedItem
			}, index) => <Dustbin accept={accepts} lastDroppedItem={lastDroppedItem} onDrop={item => handleDrop(index, item)} key={index} />)}
		</div>
	</div>;
};

const Oehoy = props => {
	return <DndProvider backend={HTML5Backend}>
		      
		<Container />
		    
	</DndProvider>;
};

export default atomize(Oehoy)({
	name: "Oehoy",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "Oehoy — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});