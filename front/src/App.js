import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Representations from './components/Representations'
import Representation from './components/Representation'
import Basket from './components/Basket'

const App = () => {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/representations/:tour_name" component={Representations} />
          <Route path="/:tour_name/:id_representation" component={Representation} />
          <Route path="/basket" component={Basket} />
        </Switch>
      </div>
    </Router>

  );
}

export default App