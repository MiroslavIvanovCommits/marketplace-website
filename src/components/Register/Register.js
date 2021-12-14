import * as authService from "../../services/authService.js";
import { useAuthContext } from "../../contexts/AuthContext.js";
import { useNavigate } from "react-router";

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
            });
    };

    return (
        <section id="register-page" className="register">
            <form id="register-form" action="" method="POST" onSubmit={registerSubmintHandler}>
            <div className="row">
                <fieldset className="register-fieldset">
                    <legend>Register</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="repeat-pass">Repeat Password</label>
                        <span className="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Register" />
                </fieldset>
                </div>
            </form>
        </section>
    )
}

export default Register