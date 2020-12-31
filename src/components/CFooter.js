import React from 'react';
import './CFooter.css';

export const CFooter = (props) => {
    let date = new Date();
    return (
        <div>
            <h5>
                PPFront-end, przykładowy serwis React. Dzisiaj mamy: {date.toDateString()}
                <br/>
                Stan pogody: {props.weather}, temperatura: {props.temp}.
                <br/>
                {props.children}
            </h5>
        </div>
    );
};