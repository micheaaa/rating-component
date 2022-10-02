import {styled} from './utils/stitches'

const Container = styled('div', {
  height: '100vh', 
  color: '$white',
  backgroundColor: '$very_dark_blue',
  backgroundImage: 'linear-gradient(to bottom right, $dark_blue, $very_dark_blue)'
})

function App() {
  return (
    <Container className="App">
    </Container>
  )
}

export default App
