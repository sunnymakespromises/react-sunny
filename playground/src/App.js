import logo from './logo.svg';
import { Container, Text } from 'react-sunny'
import './App.css';
import './react-sunny-styles/utils.scss'

function App() {
  return (
    <Container color = 'base-1' fill = 'parent'>
        <Container color = 'accent-1' padding = 'all large'>
            <Text size = 'h1' color = 'neutral-1'>
                Playground
            </Text>
        </Container>
    </Container>
  );
}

export default App;
