import * as dealService from "../../services/dealService.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext.js";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "./Create.css";

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

const Create = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
        criteriaMode: "all"
    });

    const onDealCreate = (data) => {
        let { name, description, imageUrl, type } = data;

        dealService.create({
            name,
            description,
            imageUrl,
            type
        }, user.accessToken)
            .then(result => {
                navigate("/catalog");
            })
            .catch(err => {
                console.log(err);
            });
    };
    return (
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={handleSubmit((data) => onDealCreate(data))}>
                <div className="row">
                    <fieldset id="create-fieldset">
                        <label className="legend">Add new Deal</label>
                        <div className="create-icon">
                            <i className="fa fa-pencil-square-o"></i>
                        </div>
                        <p className="field">
                            <label htmlFor="name">Name</label>
                            <span className="input">
                                <input type="text" name="name" className="create-input" placeholder="Name" {...register("name")} />
                                <p>{errors.name?.message}</p>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="description">Description</label>
                            <span className="input">
                                <textarea name="description" className="create-input create-description" placeholder="Description" {...register("description")}></textarea>
                                <p>{errors.description?.message}</p>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="image">Image</label>
                            <span className="input">
                                <input type="text" name="imageUrl" className="create-input" placeholder="Image" {...register("imageUrl")} />
                                <p>{errors.imageUrl?.message}</p>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="type">Type</label>
                            <span className="create-input">
                                <select id="type" name="type" {...register("type")}>
                                    <option value="clothing">Clothing</option>
                                    <option value="shoes">Shoes</option>
                                    <option value="accessories">Accessories</option>
                                </select>
                                <p>{errors.type?.message}</p>
                            </span>
                        </p>
                        <input className="btn" type="submit" value="Add Deal" />
                    </fieldset>
                </div>
            </form>
        </section>
    )
}

export default Create