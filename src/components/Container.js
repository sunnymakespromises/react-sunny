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
		if (i != array.length - 2) {
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

const getClass = (valid, classname) => {
    if (valid == true) {
        return ' ' + style[classname]
    }
    else {
        return ''
    }
}

const Container = forwardRef(({id = '', classes = '', styles = {}, width = '', height = '', direction = 'column', alignment = 'center center', position = '', fill = '', padding = '', margin = '', color = '', canClick = false, children, ...extras }, ref) => {
	const getClasses = () => {
		var alignmentClasses = getClassesFromString('alignment', alignment)
		var paddingClasses = getClassesFromString('padding', padding)
		var marginClasses = getClassesFromString('margin', margin)
		return 	style['direction-' + direction] + ' ' + 
				alignmentClasses + 
				getClass((position != ''), ('position-' + position)) + 
				getClass((fill != ''), ('fill-' + fill)) + 
				(padding != '' ? ' ' + paddingClasses : '') + 
				(margin != '' ? ' ' + marginClasses : '') + 
				getClass((color != '' && !color.includes('#')), ('color-' + color)) + 
				getClass(canClick, 'can-click')
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
		if (width !== '') {
			return { width: width }
		}
		else {
			return {}
		}
	}
	const getHeight= () => {
		if (height !== '') {
			return { height: height }
		}
		else {
			return {}
		}
	}
	const getStyles = () => {
		return { ...styles, ...getColor(), ...getPadding(), ...getMargin(), ...getWidth(), ...getHeight() }
	}
  	return (
		<div id = {id != '' ? id : null} className = {`${getClasses()}${classes !== '' ? ' ' + classes: ''}`} style = {{ ...getStyles() }} ref = {ref} {...extras}>
			{children}
		</div>
  	)
})

export default Container