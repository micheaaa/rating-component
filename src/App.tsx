import styled from 'styled-components'

import {COLORS} from './utils'

const StyledBackround = styled.div`
  height: 100vh;
  /*background-image: linear-gradient(to bottom right, ${COLORS.dark_blue}, ${COLORS.very_dark_blue});*/
  background-color: ${COLORS.very_dark_blue};
`

function App() {
  return (
    <StyledBackround className="App">
    </StyledBackround>
  )
}

export default App
