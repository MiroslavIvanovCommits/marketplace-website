import { useEffect, useState } from "react";
import * as dealService from "../../services/dealService.js";
import DealCard from "./DealCard.js";
import "./DealCatalog.css";

const DealCatalog = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    dealService.getAll()
      .then(result => {
        setDeals(result);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <section className="recent-works text-center" id="two">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="title">Recent <span className="themecolor">Works</span></h3>
              <p className="a-slog">This is a catalog of all deals that our users posted. Take advantage of what they found and give it a like if you found something useful. Feel free to add what you have found as well.</p>
            </div>
          </div>

          <div className="gap"></div>

          {deals.length > 0
            ? deals.map(x => <DealCard key={x._id} deal={x} />)
            : <h3>No deals available...</h3>}

          {/* <div className="row">
            <div className="col-md-12 text-center">
              <a href="#" className="btn btn-custom theme_background_color">Load More</a>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default DealCatalog;