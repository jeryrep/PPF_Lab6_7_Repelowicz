import React, {Component} from 'react'
import logo from '../res/logo.png'
import './CHeader.css'
import {Link} from "react-router-dom";
import CLoginControl from './CLoginControl'

export default class CHeader extends Component {
    resizeLogo(param, e) {
        if (param === "0") {
            e.target.style.width = "33vmin";
            e.target.style.height = "16vmin";
        } else {
            e.target.style.width = "31vmin";
            e.target.style.height = "15vmin";
        }
    }

    changeColor(param, e) {
        if (param === "gradient") {
            e.target.innerHTML = "E-Techno(logy)";
            e.target.style.color = "#" + ((1 << 24) * Math.random() | 0).toString(16);
        }
        else {
            e.target.innerHTML = "E-Technology";
            e.target.style.color = "white";
        }
    }

    render() {
        return (
            <header className="header">
                <Link to="/home">
                    <img id="headerLogo" src={logo} alt="logo" className="headerLogo" onMouseOver={(e) => this.resizeLogo("0", e)} onMouseOut={(e) => this.resizeLogo(null, e)} />
                </Link>
                <div className="headerDiv">
                    <h1 className="headerWelcome" id="headerTitle" onMouseMove={(e) => this.changeColor("gradient", e)} onMouseOut={(e) => this.changeColor(null, e)}>
                        E-Technology
                    </h1>
                    <p className="headerText">
                        Witamy na naszej stronie!
                    </p>

                </div>
                <div className="headerLogin">
                    <CLoginControl />
                </div>
            </header>
        );
    }
}