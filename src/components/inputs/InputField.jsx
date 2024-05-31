import React from "react";
import './styles.scss';

const InputField = ({label, value, handleChange}) => {
    return (
                <input
                    className={'input_field'}
                    type="text"
                    name={label}
                    placeholder={label}
                    value={value}
                    onChange={handleChange}
                />
    )
}

export default InputField;