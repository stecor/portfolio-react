import React, {Component} from 'react';



class MenuSection extends Component{

  constructor(props){
    super(props)
    this.toggle = 0;
  }



  menu = ()=>{

    if(this.toggle){
      document.getElementById("menu-burguer").setAttribute("id","menu-burguer-active");
      this.toggle = 0;
    }else{
      document.getElementById("menu-burguer-active").setAttribute("id","menu-burguer");
      this.toggle = 1;
    }
  }

  render(){
    return(
      <div id="menu-burguer-active" onClick={this.menu}  >
       <div className="menu-icon">
        <i className="fa fa-bars" aria-hidden="true" ></i>
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
