import React from 'react';
import './Alert.css';
import {type} from "@testing-library/user-event/dist/type";

const Alert = ({type,text}) => {
    return (
        <div className={`alert alert-${type}`}>{text}</div>
    );
};

export default Alert;