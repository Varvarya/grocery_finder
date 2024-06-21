import React from "react";
import InputField from "./inputs/InputField";
import Button from "./inputs/Button";
import './styles.scss';

const AuthForm = ({
                    title, values, errors, isSubmit, handleChange, handleSubmit, children, extended=false
                  }) => {


    return (
        <div className="form_container">
            <div className="row clearfix">
                    <form onSubmit={handleSubmit}>
                        <div className="title_container">
                            <h1>{title}</h1>
                        </div>
                            <div className="ui divider"></div>
                            <div className="ui form">
                                <InputField label={'username'} value={values.username} handleChange={handleChange}></InputField>
                                {extended && <InputField label={'email'} value={values.email} handleChange={handleChange}></InputField>}
                                <InputField label={'password'} value={values.password} handleChange={handleChange} type='password'></InputField>
                                <div className="buttons">
                                    {children}
                                </div>
                            </div>
                    </form>
            </div>
        </div>
);
}

export default AuthForm;