import React from "react";
import './CFooter.css';
import reactLogo from '../logo.svg';

export const CFooter = () => {
    return (
        <footer className="footer">
            <img src={reactLogo} className="appLogo" alt="logo react"/>
            <p className="footerText blockquote-footer">
                E-Technology, wszystkie prawa zastrzeżone.
            </p>
        </footer>
    );
}