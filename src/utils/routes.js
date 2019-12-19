import Service from 'pages/service.js'
import Kitchen from 'pages/kitchen.js'

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/service">Salão</Link>
            </li>
            <li>
              <Link to="/kitchen">Cozinha</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/service">
            <Menu />
          </Route>
          <Route path="/kitchen">
            <Menu />
          </Route>
          <Route path="/">
            <Menu />
          </Route>
        </Switch>
      </div>
    </Router>
    )
}

export default Routes