import React, { Component } from 'react';
import InfoSection from './component/info-section';
import MenuSection from './component/menu-section';
import WorkData from './data/workData';
import "./css/_portfolio.css";



class Portfolio extends Component {


render() {

  var works = WorkData.map((work, index) =>{

      return(
         <div key={index} >
          <div className="project-box" style={{  background: `url("${work.image}") no-repeat center center`}}>
            <div className="grey-bg">
              <div className="project-info">
                <div className="project-details">
                  Client: {work.client}  Year: {work.year}  Type: {work.type}
                </div>
                <div className="project-title">
                  {work.title}
                </div>
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>

      );
    })



    return (
      <div className="portfolio">

        <MenuSection />

        <InfoSection />

        <section className="content-area">
          <div className="title">
            <h1>LATEST WORKS</h1>
          </div>
            <div className="scroll-section">
                {/* works start */}

              <div className="work-section">

                  <div className="project-section">

                  { works }

                </div>
              </div>
           </div>
        </section>
      </div>
    );
  }
}

export default Portfolio;
