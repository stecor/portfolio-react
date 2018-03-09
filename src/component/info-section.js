import React, { Component } from 'react';


class InfoSection extends Component {
  render() {
    return (
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
    )

  }
}

export default InfoSection;
