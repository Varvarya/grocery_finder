import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {authUser} from "../../store/actions/authActions";
import './styles.scss'
import AuthForm from "../../components/AuthForm";
import {addNewUser} from "../../store/actions/userActions";
import Button from "../../components/inputs/Button";
import {useNavigate} from "react-router-dom";
import {jwtToken} from "../../store/consts";
import {isNull} from "lodash";


const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
        errors.username = "Username is required!";
    }
    if (!values.email) {
        errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
    }

    return errors;
};


const LoginPage = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const authState = useSelector(state => state.Auth);

    const initialValues = { username: "", email: "", password: "", repeatedPassword: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        dispatch(authUser(formValues)).then(() => {
            const token = localStorage.getItem(jwtToken);

            if (token !== null && !isNull(token)) {
                console.log(token);
                navigate('/');
            }
        });
    };


    return(
        <div className="baseContainer">
           <AuthForm
               title='Авторизація'
               values={formValues}
               errors={formErrors}
               handleChange={handleChange.bind(this)}
               handleSubmit={handleSubmit}
               isSubmit={isSubmit}
           >
               <Button text={'Увійти'} handleClick={handleSubmit}></Button>
               <Button text={'Зареєструватися'} type='secondary' handleClick={() => navigate(`/auth/register`)}></Button>
           </AuthForm>
        </div>
    )
};

export default LoginPage