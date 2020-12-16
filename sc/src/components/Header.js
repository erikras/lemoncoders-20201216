import styled, {css} from 'styled-components/macro'

const Header = styled.h2`
  font-size: 2em;
  color: green;
  ${({theme, variant}) => css`
    color: ${variant === 'secondary'
      ? theme.colors.secondary
      : theme.colors.primary};
    border-bottom: 2px solid ${theme.colors.secondary};
  `}
`

export default Header
