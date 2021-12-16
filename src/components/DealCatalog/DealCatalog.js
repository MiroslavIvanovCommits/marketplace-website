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
            });
    }, []);
    return (
        <>
    <section className="recent-works text-center" id="two">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="title">Recent <span className="themecolor">Works</span></h3>
            <p className="a-slog">Lorem ipsum dolor sit amet ne onsectetuer adipiscing elit.Aenean commodo ligula eget dolor in tashin ty</p>
          </div>
        </div>

        <div className="gap"></div>

        {deals.map(x => <DealCard key={x._id} deal={x} />)}
        <div className="row">
          <div className="col-md-12 text-center">
            <a href="#" className="btn btn-custom theme_background_color">Load More</a>
          </div>
        </div>

      </div>
    </section>

        </>
    );
};

export default DealCatalog;