import {ThemeProvider} from '@emotion/react'
import {render, screen} from '@testing-library/react'
import {matchers} from '@emotion/jest'
import {theme} from '../App'
import About from './About'

expect.extend(matchers)

test('renders learn react link', () => {
  render(
    <ThemeProvider theme={theme}>
      <About />
    </ThemeProvider>
  )
  const headerElement = screen.getByText(/About Me/)
  expect(headerElement).toBeInTheDocument()
  expect(headerElement).toHaveStyleRule('color', 'blue')
})
