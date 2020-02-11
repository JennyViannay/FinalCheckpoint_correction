import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Representation from './components/Representation'
import Basket from './components/Basket'

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/representation/:name/:id" component={Representation} />
          <Route path="/basket" component={Basket} />
        </Switch>
      </div>
    </Router>

  );
}

export default App