import {useState} from 'react'
import styled from '@emotion/styled/macro'

export default function ToggleButton() {
  const [on, setOn] = useState(false)

  return (
    <StyledButton type="button" isOn={on} onClick={() => setOn((on) => !on)}>
      Click Me
    </StyledButton>
  )
}

const StyledButton = styled.button`
  padding: 2em 4em;
  background-color: ${({isOn, theme}) =>
    isOn ? theme.colors.primary : theme.colors.secondary};
`
