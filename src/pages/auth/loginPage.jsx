import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {authUser} from "../../store/actions/authActions";
import './styles.scss'
import AuthForm from "../../components/AuthForm";
import {addNewUser} from "../../store/actions/userActions";
import Button from "../../components/inputs/Button";
import {useNavigate} from "react-router-dom";


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
    } else if (values.password !== values.repeatedPassword) {

        errors.password = "You need to repeat password";
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

    //
    // useEffect(() => {
    //     //dispatch(authUser('123', '123'))
    //     dispatch(authUser(formValues)).then((res) => {
    //         console.log(res);
    //         //navigate('/');
    //     });
    // }, [isSubmit]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        dispatch(authUser(formValues)).then((res) => {
            if (!authState.errorMsg) {
                navigate('/');
            }
        });
    };


    return(
        <div className="baseContainer">
           <AuthForm
               values={formValues}
               errors={formErrors}
               handleChange={handleChange.bind(this)}
               handleSubmit={handleSubmit}
               isSubmit={isSubmit}
           >
               <Button text={'Submit'} handleClick={handleSubmit}></Button>
               <Button text={'Login'} type='secondary' handleClick={() => navigate(`/auth/register`)}></Button>
           </AuthForm>
        </div>
    )
};

export default LoginPage