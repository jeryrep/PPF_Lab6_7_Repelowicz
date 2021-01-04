import React, {Component} from 'react'
import logo from '../res/logo.png'
import './CHeader.css'
import {Link} from "react-router-dom";
import CLoginControl from './CLoginControl'

export default class CHeader extends Component {
    resizeLogo(param) {
        let x = document.getElementById("headerLogo");
        if (param === "0") {
            x.style.width = "33vmin";
            x.style.height = "16vmin";
        } else {
            x.style.width = "31vmin";
            x.style.height = "15vmin";
        }
    }

    changeColor(param) {
        let x = document.getElementById("headerTitle");
        if (param === "gradient") {
            x.innerHTML = "E-Techno(logy)";
            x.style.color = "#" + ((1 << 24) * Math.random() | 0).toString(16);
        }
        else {
            x.innerHTML = "E-Technology";
            x.style.color = "white";
        }
    }

    render() {
        return (
            <header className="header">
                <Link to="/home">
                    <img id="headerLogo" src={logo} alt="logo" className="headerLogo" onMouseOver={() => this.resizeLogo("0")} onMouseOut={() => this.resizeLogo("1")} />
                </Link>
                <div className="headerDiv">
                    <h1 className="headerWelcome" id="headerTitle" onMouseMove={() => this.changeColor("gradient")} onMouseOut={() => this.changeColor(null)}>
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