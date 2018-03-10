import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import Home from './home';
import Contact from './contact';
import Portfolio from './portfolio'
import { BrowserRouter, Route} from 'react-router-dom';


class App extends Component{





    render() {
      return(
          <BrowserRouter>
            <div>
            <Route  exact path='/' component = {Home}/>
            <Route path='/contact' component = {Contact}/>
            <Route path='/portfolio' component = {Portfolio}/>
           </div>
          </BrowserRouter>
      );
    }
}



ReactDOM.render(<App />, document.getElementById('root'));
