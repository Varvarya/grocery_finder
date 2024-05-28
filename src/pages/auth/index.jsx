import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {authUser} from "../../store/actions/authActions";
import _ from "lodash";
import AuthForm from "../../components/AuthForm";

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


const Auth = (props) => {
    const dispatch = useDispatch();
    const authState = useSelector(state => state.Auth);

    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    useEffect(() => {
        dispatch(authUser('123', '123'))
    }, []);


    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };



    const ShowData = () => {

        if (authState.loading) {
            return <p>Loading...</p>
        }

        if (authState.errorMsg !== "") {
            return <p>{authState.errorMsg}</p>
        }


            return(
                <div className={"pokemon-wrapper"}>
                    <div className={"item"}>
                        <h1>Sprites</h1>
                    </div>
                    <div className="item">
                        <h1>Stats</h1>

                    </div>
                    <div className="item">
                        <h1>Abilities</h1>
                    </div>
                </div>
            )



        return <p>error getting pokemon</p>
    }

    return(
        <div className={"poke"}>
           <AuthForm values={formValues} errors={formErrors} handleChange={handleChange.bind(this)} handleSubmit={handleSubmit} isSubmit={isSubmit} />
        </div>
    )
};

export default Auth