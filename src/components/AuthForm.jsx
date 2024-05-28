import React from "react";

const AuthForm = ({
                    values, errors, isSubmit, handleChange, handleSubmit
                  }) => {


    return (
        <div className="container">
            {Object.keys(errors).length === 0 && isSubmit ? (
                <div className="ui message success">Signed in successfully</div>
            ) : (
                <pre>{JSON.stringify(values, undefined, 2)}</pre>
            )}

            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <div className="ui divider"></div>
                <div className="ui form">
                    <div className="field">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{values.username}</p>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{values.email}</p>
                    <div className="field">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{values.password}</p>
                    <button className="fluid ui button blue">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AuthForm;