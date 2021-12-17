import * as authService from "../../services/authService.js";
import { useAuthContext } from "../../contexts/AuthContext.js";
import { useNavigate } from "react-router";
import "./Register.css";

const Register = () => {
    const navigate = useNavigate();
    const { login } = useAuthContext();

    const registerSubmintHandler = (e) => {
        e.preventDefault();
        let { email, password } = Object.fromEntries(new FormData(e.currentTarget));
        authService.register(email, password)
            .then(authData => {
                login(authData);
                navigate("/");
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <section id="register-page" className="register">
            <form id="register-form" method="POST" onSubmit={registerSubmintHandler}>
                <div className="row">
                    <fieldset id="register-fieldset">
                        <label className="legend">Register</label>
                        <div class="register-icon">
                            <i class="fa fa-user-circle"></i>
                        </div>
                        <p className="field">
                            <label htmlFor="email">Email</label>
                            <span className="input">
                                <input type="text" name="email" id="register-input" placeholder="Email" />
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="password">Password</label>
                            <span className="input">
                                <input type="password" name="password" id="register-input" placeholder="Password" />
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="repeat-pass">Repeat Password</label>
                            <span className="input">
                                <input type="password" name="confirm-pass" id="register-input" placeholder="Repeat Password" />
                            </span>
                        </p>
                        <input className="button-register" type="submit" value="Register" />
                    </fieldset>
                </div>
            </form>
        </section>
    )
}

export default Register