import styles from './text.module.scss';
import Link from 'next/link';

export default function Text({id, classes = '', color = '', size = 'h1', style = 'normal', link = '', children}) {
    const getClasses = () => {
        return styles[style] + (color !== '' ? ' ' + styles[color] : '');
    }
    const textComponent = () => {
        return (
            size === 'h1' ?
                <h1 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`}>
                    {children}
                </h1>
            : size === 'h2' ?
                <h2 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`}>
                    {children}
                </h2>
            : size === 'h3' ?
                <h3 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`}>
                    {children}
                </h3>
            : size === 'h4' ?
                <h4 id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`}>
                    {children}
                </h4>
            : size === 'p' ?
                <p id = {id} className = {`${getClasses()}${classes !== '' ? ' ' + classes : ''}`}>
                    {children}
                </p>
            : <div></div>
        )
    }
    return (
        link != '' ?
        <Link href = {link}>
            {textComponent()}
        </Link>
        : textComponent()
    )
}