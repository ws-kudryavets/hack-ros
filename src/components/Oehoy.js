import React, { useState, useCallback } from 'react';
import atomize from "@quarkly/atomize";
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import CompStandart from './CompStandart';
import Comp2 from './Comp2';
const ItemTypes = {
	FOOD: 'food',
	GLASS: 'glass',
	PAPER: 'paper'
};
const style = {
	height: '205px',
	width: '216px'
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
	});
	return <div ref={drop} style={{ ...style,
		...(!lastDroppedItem ? {
			opacity: 0.2
		} : {})
	}}>
		{!lastDroppedItem ? <CompStandart style={{
			margin: 0,
			width: 'inherit'
		}} /> : <Comp2 style={{
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
			<CompStandart style={{
				margin: 0,
				width: 'inherit'
			}} />
		</s> : <CompStandart style={{
			margin: 0,
			width: 'inherit'
		}} />}
	</div>;
};

const Container = () => {
	const [dustbins, setDustbins] = useState([{
		accepts: [ItemTypes.GLASS],
		lastDroppedItem: null
	}, {
		accepts: [ItemTypes.FOOD],
		lastDroppedItem: null
	}]);
	const [boxes] = useState([{
		name: 'Bottle',
		type: ItemTypes.GLASS
	}, {
		name: 'Banana',
		type: ItemTypes.FOOD
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
			width: '50%',
			overflow: 'hidden',
			clear: 'both'
		}}>
			{boxes.map(({
				name,
				type
			}, index) => <Box name={name} type={type} isDropped={isDropped(name)} key={index} />)}
		</div>
		<div style={{
			padding: '20px',
			border: '2px dashed #999',
			display: 'flex',
			overflow: 'hidden',
			clear: 'both',
			width: '50%',
			justifyContent: 'space-between'
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