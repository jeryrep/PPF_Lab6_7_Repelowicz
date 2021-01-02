import React, {Component} from 'react'
import logo from '../res/logo.png'
import './CHeader.css'
import {Link} from "react-router-dom";

export default class CHeader extends Component {
    render() {
        return (
            <header className="header">
                <Link to="/home">
                    <img src={logo} alt="logo" className="headerLogo"/>
                </Link>
                <div className="headerDiv">
                    <h1 className="headerWelcome">
                        Witamy na naszej stronie!
                    </h1>
                    <p className="headerText">
                        Na stronie znajdziesz opis różnego rodzaju metali wykorzystywanych obecnie wszędzie na świecie!
                    </p>
                </div>
            </header>
        );
    }
}