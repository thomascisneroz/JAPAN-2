import NavBar from './components/NavBar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Pages/Home'
import React from 'react';
import Locations from './components/Pages/Locations';
import SignUP from './components/Pages/SignUp'
import Foods from './components/Pages/Foods';





function App() {
  return (
    <div className="App">
      
        <Router>
          <NavBar />
            <Switch >
              <Route path="/" exact component={Home} />
              <Route path="/locations" component={Locations}/>
              <Route path="/sign-up" component={SignUP}/>
              <Route path="/foods" component={Foods}/>
           </Switch>
        </Router>
    
    </div>
  );
}

export default App;
