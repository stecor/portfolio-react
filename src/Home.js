import React, { Component } from 'react';


class App extends Component {
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
            STE
          </div>
          <div className="info-box">
            <h4>Email</h4>
            <p>stefano.corra@hotmail.com</p>
            <h4>Phone</h4>
            <p>905-850-5768</p>
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
            <div className="user-img"></div>
          </div>
          <div className="profile-section">
            <div className="profile">
              <h1>[Stefano ><span> Corra</span>]</h1>
              <h5>Web Developer</h5>
              <p>Hi my name is Stefano Corra this is my page and I&#39;m a skilled web developer expertise in new tools and technical developments to drive improvements throughout an entire software development lifecycle. Having extensive knowledge in web based environment, along with exceptional analytical, design and problem-solving capabilities. Excellent communication skills and able to work alongside support teams to define and refine new functionality. </p>
              <a href="" className="primary-btn">Portfolio</a>
              <a href="" className="ghost-btn">Resume</a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
