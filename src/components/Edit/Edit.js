import { useParams, useNavigate } from 'react-router-dom';
import * as dealService from '../../services/dealService.js';
import useDealState from '../../hooks/useDealState';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "./Edit.css";

const types = [
    { value: 'clothing', text: 'Clothing' },
    { value: 'shoes', text: 'Shoes' },
    { value: 'accessories', text: 'Accessories' }
];

const schema = yup.object().shape({
    name: yup.string().required()
        .min(8, "Name must be at least 8 symbols long.")
        .max(60, "Name must be at most 60 symbols long."),
    description: yup.string().required()
        .min(30, "Description must be at least 30 symbols long.")
        .max(2000, "Description must be at most 2000 symbols long."),
    imageUrl: yup.string().required()
        .matches(/^https?:\/\//g, "Please enter a valid url."),
    type: yup.string().required()
        .matches(/(^clothing$)|(^shoes$)|(^accessories$)/g, "Type must be one of the following: clothing, shoes, accessories")
});

const Edit = () => {
    const { dealId } = useParams();
    const [deal, setDeal] = useDealState(dealId);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
        criteriaMode: "all"
    });

    const dealEditSubmitHandler = (data) => {
        dealService.update(deal._id, data)
            .then(navigate("/catalog"));
    };

    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" onSubmit={handleSubmit((data) => dealEditSubmitHandler(data))}>
                <div className="row">
                    <fieldset id="edit-fieldset">
                        <label className="legend">Edit my Deal</label>
                        <div className="create-icon">
                            <i className="fa fa-pencil"></i>
                        </div>
                        <p className="field">
                            <label htmlFor="name">Name</label>
                            <span className="input">
                                <input type="text" name="name" className="create-input" defaultValue={deal.name} {...register("name")} />
                                <p>{errors.name?.message}</p>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="description">Description</label>
                            <span className="edit-input">
                                <textarea name="description" className="create-input create-description" defaultValue={deal.description} {...register("description")} />
                                <p>{errors.description?.message}</p>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="image">Image</label>
                            <span className="edit-input">
                                <input type="text" name="imageUrl" className="create-input" defaultValue={deal.imageUrl} {...register("imageUrl")} />
                                <p>{errors.imageUrl?.message}</p>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="type">Type</label>
                            <span className="edit-input">
                                <select name="type" className="create-input" value={deal.type} onChange={(e) => setDeal(s => ({ ...s, type: e.target.value }))} {...register("type")}>
                                    {types.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
                                </select>
                                <p>{errors.type?.message}</p>
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