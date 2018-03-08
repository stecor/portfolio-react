import React, { Component } from 'react';


class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
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
            <div className="scroll-section">
                {/* works start */}
              <div className="work-section">
                <div className="title">
                  <h1>LATEST WORKS</h1>
                </div>

                <div className="project-section">
                  <div className="project-box first" >
                    <div className="grey-bg">
                      <div className="project-info">
                        <div className="project-details">
                          Client: Nike  Year: 2017  Type: Ecommerce
                        </div>
                        <div className="project-title">
                          The Last Yeezys
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
              {/* works End */}
            </div>
        </section>
      </div>
    );
  }
}

export default Portfolio;
