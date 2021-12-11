import { useParams, useNavigate, Link } from "react-router-dom";
import * as dealService from "../../services/dealService.js";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext.js";

const Details = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [deal, setDeal] = useState({});
    const { dealId } = useParams();

    useEffect(() => {
        dealService.getOne(dealId)
            .then(dealResult => {
                setDeal(dealResult);
            });
    }, [dealId]);

    const deleteHandler = (e) => {
        e.preventDefault();
        dealService.destroy(dealId, user.accessToken)
            .then(() => {
                navigate("/");
            });
    };

    const ownerButtons = (
        <>
            <Link className="button" to="edit">Edit</Link>
            <a className="button" href="#" onClick={deleteHandler}>Delete</a>
        </>
    );

    const userButtons = <a className="button" href="#">Like</a>;

    return (
        <section id="details-page" className="details">
            <div className="deal-information">
                <h3>Name: {deal.name}</h3>
                <p className="type">Type: {deal.type}</p>
                <p className="img"><img src={deal.imageUrl} /></p>
                <div className="actions">
                    {user._id && (user._id === deal._ownerId
                        ? ownerButtons
                        : userButtons
                    )}

                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" />
                        <span id="total-likes">Likes: {deal.likes?.length}</span>
                    </div>
                </div>
            </div>
            <div className="deal-description">
                <h3>Description:</h3>
                <p>{deal.description}</p>
            </div>
        </section>
    )
}

export default Details