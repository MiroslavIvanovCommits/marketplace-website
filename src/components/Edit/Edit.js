import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as dealService from '../../services/dealService.js';
import useDealState from '../../hooks/useDealState';

const types = [
    { value: 'clothing', text: 'Clothing' },
    { value: 'shoes', text: 'Shoes' },
    { value: 'accessories', text: 'Accessories' }
];

const Edit = () => {
    const { dealId } = useParams();
    const [errors, setErrors] = useState({ name: false });
    const [deal, setDeal] = useDealState(dealId);
    const navigate = useNavigate();

    const dealEditSubmitHandler = (e) => {
        e.preventDefault();

        let dealData = Object.fromEntries(new FormData(e.currentTarget));

        dealService.update(deal._id, dealData)
            .then(navigate("/catalog"));
    };

    const nameChangeHandler = (e) => {
        let currentName = e.target.value;
        // if (currentName.length < 3) {
        //     setErrors(state => ({...state, name: 'Your name sould be at least 3 characters!'}))
        // } else if (currentName.length > 10) {
        //     setErrors(state => ({...state, name: 'Your name sould be max 10 characters!'}))
        // } else {
        //     setErrors(state => ({...state, name: false}))
        // }
    };

    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" method="POST" onSubmit={dealEditSubmitHandler}>
                <fieldset>
                    <label className="legend">Edit my Deal</label>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input" style={{ borderColor: errors.name ? 'red' : 'inherit' }}>
                            <input type="text" name="name" id="name" defaultValue={deal.name} onChange={nameChangeHandler} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" defaultValue={deal.description} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" defaultValue={deal.imageUrl} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type" value={deal.type} onChange={(e) => setDeal(s => ({ ...s, type: e.target.value }))}>
                                {types.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Save" />
                </fieldset>
            </form>
        </section>
    );
};

export default Edit;