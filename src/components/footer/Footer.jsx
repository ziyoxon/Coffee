import React from "react";
import "./Footer.scss";
import backet from "../../assets/backet.svg"; 
import tf from "../../assets/tf.svg"; 

const PopularProduct = () => {
  return (
    <section className="popular-products">
      <div className="container">
        <div className="container_main">
          <h2 className="section-title">Popular Product</h2>
          <h3 className="main-title">Coffee popular Product</h3>
          <div className="product-container">
            <div className="product-card">
              <img src={backet} alt="Brazil Coffee Gred" />
              <h4>BRAZIL COFFEE GRED</h4>
              <p>
                PRICE - <span className="price">$320.00</span> /{" "}
                <span className="discounted-price">$358</span>
              </p>
              <button className="add-to-cart">Add to cart</button>
            </div>
            <div className="product-card">
              <img src={backet} alt="Brazil Coffee Gred" />
              <h4>BRAZIL COFFEE GRED</h4>
              <p>
                PRICE - <span className="price">$320.00</span> /{" "}
                <span className="discounted-price">$358</span>
              </p>
              <button className="add-to-cart">Add to cart</button>
            </div>
            <div className="product-card">
              <img src={backet} alt="Brazil Coffee Gred" />
              <h4>BRAZIL COFFEE GRED</h4>
              <p>
                PRICE - <span className="price">$320.00</span> /{" "}
                <span className="discounted-price">$358</span>
              </p>
              <button className="add-to-cart">Add to cart</button>
            </div>
          </div>
          <button className="view-all-products">View All Product</button>

          <div className="coffee-machine">
            <div className="coffee-machine-img">
              <img src={tf} alt="Coffee Machine" />
            </div>
            <div className="coffee-machine-text">
              <h3>
                Coffee <br />
                machine, buy for home
              </h3>
              <p>
                Mauris rhoncus in imperdiet placerat. vestibu emismd nisl
                suscirpit ligula volutpat, a feyguat urn maxmaus. cars massa
                nibhtincidunt. donec et nib maximus, est eu, mattis nuce.
                preasent ut quam quis quam venen atis fri ngilla. morbi
                vastibulum id tells mmodo mattis. aliauam erat volutpal.
              </p>
              <button className="discover-now">Discover Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;
