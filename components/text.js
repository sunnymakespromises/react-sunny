import styles from './text.module.scss';

export default function Text({ id, classes = '', style = {}, color = '', size = 'h1', style = 'normal', children, ...extras }) {
    const getClasses = () => {
        return styles[style] + (color !== '' ? ' ' + styles[color] : '')
    }
    return (
        size === 'h1' ?
            <h1 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...style }} {...extras}>
                {children}
            </h1>
        : size === 'h2' ?
            <h2 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...style }} {...extras}>
                {children}
            </h2>
        : size === 'h3' ?
            <h3 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...style }} {...extras}>
                {children}
            </h3>
        : size === 'h4' ?
            <h4 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...style }} {...extras}>
                {children}
            </h4>
        : size === 'p' ?
            <p id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`} style = {{ ...style }} {...extras}>
                {children}
            </p>
        : <div></div>
    )
}