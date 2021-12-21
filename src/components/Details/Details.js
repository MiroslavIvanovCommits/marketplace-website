import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import * as dealService from "../../services/dealService.js";
import * as likeService from '../../services/likeService.js';
import { useAuthContext } from '../../contexts/AuthContext';
import useDealState from '../../hooks/useDealState.js';
import "./Details.css";

const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { dealId } = useParams();
    const [deal, setDeal] = useDealState(dealId);

    useEffect(() => {
        likeService.getDealLikes(dealId)
            .then(likes => {
                setDeal(state => ({ ...state, likes }));
            });
    }, [dealId, setDeal]);

    const deleteHandler = (e) => {
        e.preventDefault();
        if (window.confirm("Are you sure you want to delete this post?")) {
            dealService.destroy(dealId)
                .then(() => {
                    navigate("/catalog");
                });
        }
    };

    const ownerButtons = (
        <>
            <Link className="button-details" to={`/edit/${deal._id}`}>Edit</Link>
            <Link className="button-details" to="#" onClick={deleteHandler}>Delete</Link>
        </>
    );

    const likeButtonClick = () => {
        if (user._id === deal._ownerId) {
            return;
        }

        if (deal.likes.includes(user._id)) {
            return;
        }

        likeService.like(user._id, dealId)
            .then(() => {
                setDeal(state => ({ ...state, likes: [...state.likes, user._id] }));
            });
    };

    const userButtons = <button className="button-like" type="button" onClick={likeButtonClick} disabled={deal.likes?.includes(user._id)}>
        {deal.likes?.includes(user._id)
            ? "Liked"
            : "Like"}
    </button>;

    return (
        <section id="details-page" className="details">
            <div className="deal-information">
                <h3>Name: {deal.name}</h3>
                <p className="type">Type: {deal.type}</p>
                <p className="img"><img src={deal.imageUrl} alt="Unavailable picture" /></p>
                <div className="actions">
                    {user._id && (user._id === deal._ownerId)
                        ? ownerButtons
                        : userButtons
                    }

                    <div className="likes">
                        <img className="hearts" src="/images/.png" alt="" />
                        <span id="total-likes">Likes: {deal.likes?.length || 0}</span>
                    </div>
                </div>
            </div>
            <div className="deal-description">
                <h3>Description:</h3>
                <pre>{deal.description}</pre>
            </div>
        </section>
    )
}

export default Details