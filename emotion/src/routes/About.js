import styled from '@emotion/styled/macro'
import ToggleButton from '../components/ToggleButton'

export default function About() {
  return (
    <div>
      <Header>About Me</Header>
      <ToggleButton />
    </div>
  )
}

const Header = styled.h2`
  color: ${({theme}) => theme.colors.primary};
`
