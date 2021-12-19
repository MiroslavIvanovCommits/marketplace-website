import * as authService from "../../services/authService.js";
import { useAuthContext } from "../../contexts/AuthContext.js";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "./Register.css";

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required("Password is required.")
    .min(8, "Password must be at least 8 symbols long.")
    .max(52, "Password must be at most 52 symbols long.")
    .matches(/[A-Z]+/g, "Password must contain capital letter.")
    .matches(/[a-z]+/g, "Password must contain small letter.")
    .matches(/[0-9]+/g, "Password must contain a digit."),
    confirmPass: yup.string().oneOf([yup.ref("password")], "Passwords must match!")
});

const Register = () => {
    const navigate = useNavigate();
    const { login } = useAuthContext();

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur",
        criteriaMode: "all"
     });
    

    const registerSubmintHandler = (data) => {
        let { email, password } = data;
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
            <form id="register-form" method="POST" onSubmit={handleSubmit((data) => registerSubmintHandler(data))}>
                <div className="row">
                    <fieldset id="register-fieldset">
                        <label className="legend">Register</label>
                        <div className="register-icon">
                            <i className="fa fa-user-circle"></i>
                        </div>
                        <p className="field">
                            <label htmlFor="email">Email</label>
                            <span className="input">
                                <input type="text" name="email" className="register-input" placeholder="Email" {...register("email")} />
                                <p>{errors.email?.message}</p>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="password">Password</label>
                            <span className="input">
                                <input type="password" name="password" className="register-input" placeholder="Password" {...register("password")} />
                                <p>{errors.password?.message}</p>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="repeat-pass">Repeat Password</label>
                            <span className="input">
                                <input type="password" name="confirmPass" className="register-input" placeholder="Repeat Password" {...register("confirmPass")} />
                                <p>{errors.confirmPass?.message}</p>
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