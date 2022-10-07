import { forwardRef } from 'react';
import styles from './container.module.scss';

const Container = forwardRef(({id = '', classes = '', style = {}, direction, alignment, position = 'relative', fill = '', padding = 'all medium', margin = 'all none', color = '', opacity = 100, canClick = false, children, ...extras }, ref) => {
	const getClasses = () => {
		const alignmentsArray = alignment.split(' ');
		alignment = alignmentsArray[0] + '-' + alignmentsArray[1];
		var paddingClasses = '';
		const paddingArray = padding.split(' ');
		for (var i = 0; i < paddingArray.length; i += 2) {
			const position = paddingArray[i];
			const value = paddingArray[i + 1];
			paddingClasses += styles['padding-' + position + '-' + value];
		}
		var marginClasses = '';
		const marginArray = margin.split(' ');
		for (var i = 0; i < marginArray.length; i += 2) {
			const position = marginArray[i];
			const value = marginArray[i + 1];
			marginClasses += styles['margin-' + position + '-' + value];
		}
		return styles[direction] + ' ' + styles[alignment] + ' ' + styles[position] + (fill !== '' ? ' ' + styles['fill-' + fill] : '') + ' ' + paddingClasses + ' ' + marginClasses + (color !== '' ? ' ' + styles[color + '-' + opacity] : '') + (canClick ? ' ' + styles['can-click'] : '');
	}
  	return (
		<div id = {id != '' ? id : null} className={`${getClasses()}${classes !== '' ? ' ' + classes: ''}`} style={style} ref = {ref} {...extras}>
			{children}
		</div>
  	)
})
export default Container;