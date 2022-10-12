import React, { forwardRef } from 'react'
import styles from './styles/Container.module.scss'

const getClassesFromString = ( property, string ) => {
	var classes = ''
	const array = string.split(' ')
	for (var i = 0; i < array.length; i += 2) {
		const x = array[i]
		const y = array[i + 1]
		classes += styles[property + '-' + x + '-' + y]
		if (i != array.length - 1) {
			classes += ' '
		}
	}
	return classes
}

const Container = forwardRef(({id = '', classes = '', style = {}, direction = 'column', alignment = 'center center', position = 'relative', fill = 'auto', padding = 'all none', margin = 'all none', color = '', canClick = false, children, ...extras }, ref) => {
	const getClasses = () => {
		var alignmentClasses = getClassesFromString('alignment', alignment)
		var paddingClasses = getClassesFromString('padding', padding)
		var marginClasses = getClassesFromString('margin', margin)
		return styles['direction-' + direction] + ' ' + alignmentClasses + ' ' + styles['position-' + position] + ' ' + styles['fill-' + fill] + ' ' + paddingClasses + ' ' + marginClasses + (color !== '' ? ' ' + styles['color-' + color] : '') + (canClick ? ' ' + styles['can-click'] : '')
	}
	const getColor = () => {
		if (color.includes('#')) {
			return { backgroundColor: color }
		}
		else {
			return {}
		}
	}
  	return (
		<div id = {id != '' ? id : null} className = {`${getClasses()}${classes !== '' ? ' ' + classes: ''}`} style = {{ ...style, ...getColor() }} ref = {ref} {...extras}>
			{children}
		</div>
  	)
})

export default Container