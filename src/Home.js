import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Home extends Component {
  render() {
    return (

      <div className="home">
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
        <section className="info-section">
          <div className="logo">
            JANE
          </div>
          <div className="info-box">
            <h4>Email</h4>
            <p>JaneJohnson@gmail.com</p>
            <h4>Phone</h4>
            <p>705-850-5768</p>
            <h4>Find Me On</h4>

            <div className="icon-section">
              <a href="#1">
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </a>
              <a href="#1">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="#1">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="#1">
                <i className="fa fa-dribbble" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </section>
        <section className="content-area">
          <div className="img-container">
            <div className="user-img "></div>
          </div>
          <div className="profile-section">
            <div className="profile">
              <h1>Jane<br/><span>Johnson</span></h1>
              <h5>Web Developer</h5>
              <p>Donec interdum, odio a iaculis dapibus, neque diam egestas tortor, a pellentesque enim lectus sed nisi. Nam ut nisl ligula. Nulla eu sapien sed dolor tincidunt dictum. </p>

              <Link to={"/portfolio"}><a  className="primary-btn">Portfolio</a></Link>
              <Link to={"/contact"}><a className="ghost-btn">Contact</a></Link>

            </div>
          </div>
        </section>
      </div>

    );
  }
}


export default Home;
