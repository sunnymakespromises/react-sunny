import React from 'react'
import styles from './styles/Text.module.scss'

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

export default function Text({ id, classes = '', style = {}, alignment = 'center', color = 'neutral-1', size = 'h1', margin = 'all none', padding = 'all none', weight = 'auto', italic = false, href = '', children, ...extras }) {
    const getClasses = () => {
        var paddingClasses = getClassesFromString('padding', padding)
		var marginClasses = getClassesFromString('margin', margin)
        return (italic ? styles['italic'] + ' ' : '') + styles['alignment-' + alignment] + ' ' + paddingClasses + ' ' + marginClasses + ' ' + styles['weight-' + weight] + ' ' + (color !== '' ? ' ' + styles['color-' + color] : '')
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
    return (
        size == 'h1' ?
            <h1 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...style }} {...extras}>
                {getChildren()}
            </h1>
        : size == 'h2' ?
            <h2 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...style }} {...extras}>
                {getChildren()}
            </h2>
        : size == 'h3' ?
            <h3 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...style }} {...extras}>
                {getChildren()}
            </h3>
        : size == 'h4' ?
            <h4 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...style }} {...extras}>
                {getChildren()}
            </h4>
        : size == 'h5' ?
            <h5 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...style }} {...extras}>
                {getChildren()}
            </h5>
        : size == 'h6' ?
            <h6 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...style }} {...extras}>
                {getChildren()}
            </h6>
        : size == 'p' ?
            <p id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...style }} {...extras}>
                {getChildren()}
            </p>
        : <div></div>
    )
}