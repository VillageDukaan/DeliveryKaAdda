import React from "react";

const BoysSection = () => {
  return (
    <section className="boy-section">
      <div className="util-center-text util-margin-bottom-big">
        <h2 className="secondary-heading">Top Rated Delivery Boys</h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span-1">
                  The City Deliverer
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Immediate Deliveries</li>
                  <li>Order upto 25Kg</li>
                  <li>Delivered Same Day</li>
                  <li>Know your Delivery Boy</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">Katari</div>
        <div className="col-1-of-3">Raju</div>
      </div>
    </section>
  );
};

export default BoysSection;
