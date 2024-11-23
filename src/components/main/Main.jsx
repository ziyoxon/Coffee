import React from "react";
import back from "../../assets/Rectangle.svg"; 
import play from "../../assets/Play.svg"; 
import "./Main.scss";

const Main = () => {
  return (
    <main className="main" style={{ backgroundImage: `url(${back})` }}>
      <div className="container">
        <div className="container_main">
          <div className="wrapper">
            <div className="content">
              <h2>
                Enjoy Your <br />
                Morning Coffee.
              </h2>
              <p>
                The coffee is brewed by first roasting the green coffee <br />
                beans over hot coals in a brazier. Given to Opportunity
              </p>
              <div className="button">
                <button className="main_btn">Test Coffee</button>
                  <img src={play} alt="" className="nav_play" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    
  );
};

export default Main;
