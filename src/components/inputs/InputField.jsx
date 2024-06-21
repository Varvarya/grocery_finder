import React from "react";
import './styles.scss';

const InputField = ({label, value, handleChange, type = 'text'}) => {
    return (
                <input
                    className={'input_field'}
                    type={type}
                    name={label}
                    placeholder={label}
                    value={value}
                    onChange={handleChange}

                />

    )
}

export default InputField;