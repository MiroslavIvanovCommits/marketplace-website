import * as dealService from "../../services/dealService.js";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext.js";

const Create = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const onDealCreate = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);

        let name = formData.get("name");
        let description = formData.get("description");
        let imageUrl = formData.get("imageUrl");
        let type = formData.get("type");

        dealService.create({
            name,
            description,
            imageUrl,
            type
        }, user.accessToken)
            .then(result => {
                navigate("/catalog");
            });
    };
    return (
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={onDealCreate} method="">
            <div className="row">
                <fieldset>
                    <label className="legend">Add new Deal</label>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                <option value="clothing">Clothing</option>
                                <option value="shoes">Shoes</option>
                                <option value="accessories">Accessories</option>
                            </select>
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