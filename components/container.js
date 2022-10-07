import { forwardRef } from 'react';
import styles from './container.module.scss';

const getClassesFromArray = ( property, string ) => {
	var classes = '';
	const array = string.split(' ');
	for (var i = 0; i < array.length; i += 2) {
		const position = array[i];
		const value = array[i];
		classes += styles[property + '-' + position + '-' + value];
	}
	return classes;
}
const Container = forwardRef(({id = '', classes = '', style = {}, direction, alignment, position = 'relative', fill = '', padding = 'all medium', margin = 'all none', color = '', opacity = 100, canClick = false, children, ...extras }, ref) => {
	const getClasses = () => {
		const alignmentsArray = alignment.split(' ');
		alignmentClasses = styles[alignmentsArray[0] + '-' + alignmentsArray[1]];
		paddingClasses = getClassesFromArray('padding', padding);
		marginClasses = getClassesFromArray('margin', margin);
		return styles[direction] + ' ' + alignmentClasses + ' ' + styles[position] + (fill !== '' ? ' ' + styles['fill-' + fill] : '') + ' ' + paddingClasses + ' ' + marginClasses + (color !== '' ? ' ' + styles[color + '-' + opacity] : '') + (canClick ? ' ' + styles['can-click'] : '');
	}
  	return (
		<div id = {id != '' ? id : null} className={`${getClasses()}${classes !== '' ? ' ' + classes: ''}`} style={style} ref = {ref} {...extras}>
			{children}
		</div>
  	)
})
export default Container;