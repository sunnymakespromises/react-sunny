import styles from '../styles/Home.module.css'
import { Text, isLandscape } from 'react-sunny'

export default function Home() {
    const landscape = isLandscape()
    return (
        <div className={styles.container}>
            <Text size = 'h1'>
                {landscape ? 'yo' : 'hi'}
            </Text>
        </div>
    )
}
