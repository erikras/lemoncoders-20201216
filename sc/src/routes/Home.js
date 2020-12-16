import styled, {css, keyframes} from 'styled-components/macro'
import logo from '../logo.svg'

function Home() {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" />
        <Logo src={logo} alt="logo" fast />
        <p>Lemon Coders!</p>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </Header>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
`
const big = css`
  font-size: 4rem;
`
const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  ${big}
`

const Link = styled.a`
  ${big}
  color: #61dafb;
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} infinite 20s linear;
    ${(props) => {
      if (props.fast) {
        return 'animation-duration: 2s'
      } else {
        return 'animation-duration: 20s'
      }
    }}
  }
`

export default Home
