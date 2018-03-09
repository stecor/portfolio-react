import React, {Component} from 'react';


class MenuSection extends Component{

  render(){
    return(
      <div className="menu-section">
       <div className="menu-icon">
        <i className="fa fa-bars" aria-hidden="true"></i>
       </div>
       <section id="menu">
         <nav>
           <a href="#1">Home</a>
           <a href="#1">About</a>
           <a href="#1">Portfolio</a>
           <a href="#1">Contact</a>
         </nav>
        </section>
    </div>
    )
  }
}

export default MenuSection;
