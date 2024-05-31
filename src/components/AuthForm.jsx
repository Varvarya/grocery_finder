import React from "react";
import InputField from "./inputs/InputField";
import Button from "./inputs/Button";
import './styles.scss';

const AuthForm = ({
                    values, errors, isSubmit, handleChange, handleSubmit, children, extended=false
                  }) => {


    return (
        <div className="form_container">
            {/*{Object.keys(errors).length === 0 && isSubmit ? (*/}
            {/*    <div className="ui message success">Signed in successfully</div>*/}
            {/*) : (*/}
            {/*    <pre>{JSON.stringify(values, undefined, 2)}</pre>*/}
            {/*)}*/}

            <div className="row clearfix">
                <div className="">
            <form onSubmit={handleSubmit}>
                <div className="title_container">
                    <h1>Login Form</h1>
                </div>
                    <div className="ui divider"></div>
                    <div className="ui form">
                        <InputField label={'username'} value={values.username} handleChange={handleChange}></InputField>
                        {extended && <InputField label={'email'} value={values.email} handleChange={handleChange}></InputField>}
                        <InputField label={'password'} value={values.password} handleChange={handleChange}></InputField>
                        {extended && <InputField label={'repeat password'} value={values.repeatedPassword} handleChange={handleChange}></InputField>}



                        <div className="buttons">
                            {children}
                        </div>
                    </div>
            </form>
                </div>
            </div>
        </div>
);
}

export default AuthForm;