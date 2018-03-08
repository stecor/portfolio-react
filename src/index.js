import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import Home from './home';
import Contact from './contact';
import Portfolio from './portfolio'
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component{

    render() {
      return(
          <Router>
            <div>
            <Route  exact path='/' component = {Home}/>
            <Route path='/contact' component = {Contact}/>
            <Route path='/portfolio' component = {Portfolio}/>
           </div>
          </Router>
      );
    }
}



ReactDOM.render(<App />, document.getElementById('root'));
