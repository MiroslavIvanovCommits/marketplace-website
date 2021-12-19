import { Link } from "react-router-dom";

const DealCard = ({deal}) => {
    return (
        <div className="col-sm-4 port-item margin-bottom">
        <Link className="button" to={`/details/${deal._id}`}>
          <div className="item-img-wrap">
            <img src={deal.imageUrl} className="img-responsive" alt="Unavailable picture" />
          </div>
        </Link>
        <div className="work-desc">
          <h3><Link className="button" to={`/details/${deal._id}`}>{deal.name}</Link></h3>
        </div>
      </div>
    );
};

export default DealCard;