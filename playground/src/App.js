import { Container, Text, isLandscape } from 'react-sunny'
import './App.css';
import './react-sunny-styles/utils.scss'

function App() {
    const landscape = isLandscape()
    return (
        <Container width = '50%' height = '50%' padding = 'all large' color = 'accent-1'>
            <Container fill = 'parent' color = 'blue'>

            </Container>
            <Container fill = 'parent' color = 'red'>

            </Container>
        </Container>
    )
}

export default App;
