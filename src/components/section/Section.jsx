import React from "react";

import coffee1 from "../../assets/77.svg";
import coffee2 from "../../assets/4.svg";
import coffee3 from "../../assets/3.svg";
import "./Section.scss";

const Section = () => {
  return (
    <section className="section">
      <div className="container_main">
        <div className="hero">
          <div className="coffee-section">
            <div className="coffee-item">
              <span className="number">01</span>
              <h3>Best Coffee Flavour</h3>
              <img src={coffee1} alt="Coffee Flavour" />
            </div>
            <div className="coffee-item">
              <span className="number">02</span>
              <h3>Place to get lost</h3>
              <img src={coffee2} alt="Coffee Lost" />
            </div>
            <div className="coffee-item">
              <span className="number">03</span>
              <h3>Proper roasting</h3>
              <img src={coffee3} alt="Coffee Roasting" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
