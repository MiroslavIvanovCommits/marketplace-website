import { useEffect, useState } from "react";
import * as dealService from "../../services/dealService.js";
import "./Stats.css";

const Stats = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    dealService.getAll()
      .then(result => {
        setDeals(result);
      });
  }, []);
  return (
    <section className="our-stats" id="five">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="our-stats-box text-center">
              <div className="our-stat-icon">
                <span className="fa fa-newspaper-o"></span>
              </div>
              <div className="our-stat-info">
                <h3>{deals.length}</h3>

                <h5>Total Posts</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="our-stats-box text-center">
              <div className="our-stat-icon">
                <span className="fa fa-child"></span>
              </div>
              <div className="our-stat-info">
                <h3>100+</h3>

                <h5>Visits Per Month</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="our-stats-box text-center">
              <div className="our-stat-icon">
                <span className="fa fa-globe"></span>
              </div>
              <div className="our-stat-info">
                <h3>24/7</h3>

                <h5>Access</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="our-stats-box text-center">
              <div className="our-stat-icon">
                <span className="fa fa-gears"></span>
              </div>
              <div className="our-stat-info">
                <h3>2021</h3>

                <h5>Running Since</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;