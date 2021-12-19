import * as authService from "../../services/authService.js";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext.js";
import "./Login.css";

const Login = () => {
    const { login } = useAuthContext();
    const navigate = useNavigate();
    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let email = formData.get("email");
        let password = formData.get("password");

        authService.login(email, password)
            .then((authData) => {
                login(authData);

                navigate("/");
            })
            .catch(err => {
                console.log(err);
            });

    };
    return (
        <section id="login-page" className="login">
            <form id="login-form" onSubmit={onLoginHandler} method="POST">
                <div className="row">
                    <fieldset id="login-fieldset">
                        <label className="legend">Login</label>
                        <div className="login-icon">
                            <i className="fa fa-user-circle"></i>
                        </div>
                        <p className="field">
                            <label htmlFor="email">Email</label>
                            <span className="input">
                                <input type="text" name="email" className="login-input" placeholder="Email" />
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="password">Password</label>
                            <span className="input">
                                <input type="password" name="password" className="login-input" placeholder="Password" />
                            </span>
                        </p>
                        <input className="button-login" type="submit" value="Login" />
                    </fieldset>
                </div>
            </form>
        </section>
    )
}

export default Login