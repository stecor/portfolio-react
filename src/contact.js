import React, { Component } from 'react';
/* import {Link} from 'react-router-dom'; */



class Contact extends Component {
  render() {
    return (

      <div className="contact">
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
            <div className="form-section">
               <form action="/" method="POST">
                 <h4>Send a Message</h4>
                  <input type="text" name="name" placeholder="Your Name" required/>
                  <input type="email" name="email" placeholder="Your Email" required/>
                  <textarea name="message" id="" cols="30" rows="12" placeholder="Your Message" required></textarea>
                  <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
          <div className="contact-section">
            <div className="contact-info">
                <h1>Contact Us</h1>
              <div className="contact-box">
                <h5>Phone</h5>
                <p>(453) 456 4536</p>
              </div>

              <div className="contact-box">
                <h5>Email</h5>
                <p>stefano.corra@hotmail.com</p>
              </div>

              <div className="contact-box">
                <h5>Address</h5>
                <p>Hamilton ON Canada</p>
              </div>

            </div>
          </div>
        </section>
      </div>

    );
  }
}




export default Contact;
