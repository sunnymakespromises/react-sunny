import React from 'react'
import style from './styles/Text.module.scss'

const getClassesFromString = ( property, string ) => {
	var classes = ''
	const array = string.split(' ')
	for (var i = 0; i < array.length; i += 2) {
		const x = array[i]
		const y = array[i + 1]
		classes += style[property + '-' + x + '-' + y]
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

const getClass = (valid, classname) => {
    if (valid == true) {
        return ' ' + style[classname]
    }
    else {
        return ''
    }
}

export default function Text({ id, classes = '', styles = {}, alignment = '', color = '', size = '', margin = '', padding = '', weight = '', italic = false, underline = false, href = '', canClick = false, children, ...extras }) {
    const getClasses = () => {
        var paddingClasses = getClassesFromString('padding', padding)
		var marginClasses = getClassesFromString('margin', margin)
        return  getClass((size != ''), ('size-' + size)) + 
                getClass(italic, 'italic') + 
                getClass(underline, 'underline') + 
                getClass((alignment != ''), ('alignment-' + alignment)) + 
                (padding != '' ? ' ' +  paddingClasses : '') + 
                (margin != '' ? ' ' +  marginClasses : '') + 
                getClass((weight != ''), ('weight-' + weight)) +
                getClass((color != '' && !color.includes('#')), ('color-' + color)) + 
                getClass(canClick, 'can-click')
    }
    const getChildren = () => {
        if (href != '') {
            return (
                <a href = {href}>{children}</a>
            )
        }
        else {
            return  (
                <>
                    {children}
                </>
            )
        }
    }
    const getColor = () => {
		if (color.includes('#')) {
			return { color: color }
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
    return (
        size == 'h1' ?
            <h1 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...styles, ...getColor(), ...getPadding(), ...getMargin() }} {...extras}>
                {getChildren()}
            </h1>
        : size == 'h2' ?
            <h2 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...styles, ...getColor(), ...getPadding(), ...getMargin() }} {...extras}>
                {getChildren()}
            </h2>
        : size == 'h3' ?
            <h3 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...styles, ...getColor(), ...getPadding(), ...getMargin() }} {...extras}>
                {getChildren()}
            </h3>
        : size == 'h4' ?
            <h4 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...styles, ...getColor(), ...getPadding(), ...getMargin() }} {...extras}>
                {getChildren()}
            </h4>
        : size == 'h5' ?
            <h5 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...styles, ...getColor(), ...getPadding(), ...getMargin() }} {...extras}>
                {getChildren()}
            </h5>
        : size == 'h6' ?
            <h6 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...styles, ...getColor(), ...getPadding(), ...getMargin() }} {...extras}>
                {getChildren()}
            </h6>
        : size == 'p' ?
            <p id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...styles, ...getColor(), ...getPadding(), ...getMargin() }} {...extras}>
                {getChildren()}
            </p>
        : <div></div>
    )
}