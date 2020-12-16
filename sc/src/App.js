import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {createGlobalStyle, ThemeProvider} from 'styled-components/macro'
import normalize from 'styled-normalize'
import About from './routes/About'
import Contact from './routes/Contact'
import Home from './routes/Home'

const GlobalStyles = createGlobalStyle`
${normalize}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`

const theme = {
  colors: {
    primary: 'red',
    secondary: 'cyan',
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyles />
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
