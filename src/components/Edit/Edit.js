import { useParams, useNavigate } from 'react-router-dom';
import * as dealService from '../../services/dealService.js';
import useDealState from '../../hooks/useDealState';
import "./Edit.css";

const types = [
    { value: 'clothing', text: 'Clothing' },
    { value: 'shoes', text: 'Shoes' },
    { value: 'accessories', text: 'Accessories' }
];

const Edit = () => {
    const { dealId } = useParams();
    const [deal, setDeal] = useDealState(dealId);
    const navigate = useNavigate();

    const dealEditSubmitHandler = (e) => {
        e.preventDefault();

        let dealData = Object.fromEntries(new FormData(e.currentTarget));

        dealService.update(deal._id, dealData)
            .then(navigate("/catalog"));
    };

    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" method="POST" onSubmit={dealEditSubmitHandler}>
            <div className="row">
                <fieldset id="edit-fieldset">
                    <label className="legend">Edit my Deal</label>
                    <div className="create-icon">
                            <i className="fa fa-pencil"></i>
                        </div>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" className="create-input" defaultValue={deal.name} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="edit-input">
                            <textarea name="description" className="create-input create-description" defaultValue={deal.description} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="edit-input">
                            <input type="text" name="imageUrl" className="create-input" defaultValue={deal.imageUrl} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="edit-input">
                            <select name="type" className="create-input" value={deal.type} onChange={(e) => setDeal(s => ({ ...s, type: e.target.value }))}>
                                {types.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
                            </select>
                        </span>
                    </p>
                    <input className="btn" type="submit" value="Save" />
                </fieldset>
                </div>
            </form>
        </section>
    );
};

export default Edit;