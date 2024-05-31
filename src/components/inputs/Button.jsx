import React from "react";
import './styles.scss';

const Button = ({text, handleClick, type=''}) => {


    return (
        <button className={`button ${type}`} onClick={handleClick}>{text}</button>
    )
}
export default Button;