import styles from './text.module.scss';

export default function Text({ id, classes = '', style = {}, color = '', size = 'h1', fontstyle = 'normal', href = '', children, ...extras }) {
    const getClasses = () => {
        return styles[fontstyle] + (color !== '' ? ' ' + styles[color] : '')
    }
    const getChildren = () => {
        if (href != '') {
            return (
                <a href = {href}>{children}</a>
            )
        }
        else {
            return {children}
        }
    }
    return (
        size === 'h1' ?
            <h1 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...style }} {...extras}>
                {getChildren()}
            </h1>
        : size === 'h2' ?
            <h2 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...style }} {...extras}>
                {getChildren()}
            </h2>
        : size === 'h3' ?
            <h3 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...style }} {...extras}>
                {getChildren()}
            </h3>
        : size === 'h4' ?
            <h4 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...style }} {...extras}>
                {getChildren()}
            </h4>
        : size === 'h5' ?
            <h5 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...style }} {...extras}>
                {getChildren()}
            </h5>
        : size === 'h6' ?
            <h6 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...style }} {...extras}>
                {getChildren()}
            </h6>
        : size === 'p' ?
            <p id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...style }} {...extras}>
                {getChildren()}
            </p>
        : <div></div>
    )
}