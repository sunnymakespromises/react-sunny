import React, { forwardRef } from 'react'
import style from './styles/Container.module.scss'

const getClassesFromString = ( property, string ) => {
	var classes = ''
	const array = string.split(' ')
	for (var i = 0; i < array.length; i += 2) {
		const x = array[i]
		const y = array[i + 1]
		const calculatedStyle = style[property + '-' + x + '-' + y]
		if (calculatedStyle != undefined) {
			classes += calculatedStyle
		}
		if (i != array.length - 1) {
			classes += ' '
		}
	}
	return classes
}

const getStylesFromString = ( property, string, accepted = [] ) => {
	var styles = {}
	const array = string.split(' ')
	for (var i = 0; i < array.length; i += 2) {
		const x = array[i]
		const y = array[i + 1]
		if (!(accepted.includes(y))) {
			const propertyName = property + x.charAt(0).toUpperCase() + x.slice(1)
			styles[propertyName] = y
		}
	}
	return styles
}

const Container = forwardRef(({id = '', classes = '', styles = {}, width = null, height = null, direction = 'column', alignment = 'center center', position = 'relative', fill = 'auto', padding = 'all none', margin = 'all none', color = '', canClick = false, children, ...extras }, ref) => {
	const getClasses = () => {
		var alignmentClasses = getClassesFromString('alignment', alignment)
		var paddingClasses = getClassesFromString('padding', padding)
		var marginClasses = getClassesFromString('margin', margin)
		return style['direction-' + direction] + ' ' + alignmentClasses + ' ' + style['position-' + position] + ' ' + style['fill-' + fill] + ' ' + paddingClasses + ' ' + marginClasses + (color !== '' && !color.includes('#') ? ' ' + style['color-' + color] : '') + (canClick ? ' ' + style['can-click'] : '')
	}
	const getColor = () => {
		if (color.includes('#')) {
			return { backgroundColor: color }
		}
		else {
			return {}
		}
	}
	const getPadding = () => {
		return getStylesFromString('padding', padding, ['small', 'medium', 'large', 'none'])
	}
	const getMargin = () => {
		return getStylesFromString('margin', margin, ['small', 'medium', 'large', 'none'])
	}
	const getWidth = () => {
		if (width !== null) {
			return { width: width }
		}
		else {
			return {}
		}
	}
	const getHeight= () => {
		if (height !== null) {
			return { height: height }
		}
		else {
			return {}
		}
	}
  	return (
		<div id = {id != '' ? id : null} className = {`${getClasses()}${classes !== '' ? ' ' + classes: ''}`} style = {{ ...styles, ...getColor(), ...getPadding(), ...getMargin(), ...getWidth(), ...getHeight() }} ref = {ref} {...extras}>
			{children}
		</div>
  	)
})

export default Container