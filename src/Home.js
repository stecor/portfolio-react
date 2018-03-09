import React, { Component } from 'react';
import InfoSection from './component/info-section';
import MenuSection from './component/menu-section'
import {Link} from 'react-router-dom';



class Home extends Component {
  render() {
    return (

      <div className="home">

        <MenuSection />

        <InfoSection />

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
