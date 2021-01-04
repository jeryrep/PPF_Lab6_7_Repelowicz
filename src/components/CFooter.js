import React from "react";
import './CFooter.css';
import reactLogo from '../logo.svg';

export class CFooter extends React.Component {
    resizeReactLogo(param) {
        document.getElementById("reactLogo").style.animationPlayState = param === "1" ? "paused" : "running";
    }

    render() {
        return (
            <footer className="footer">
                <div onMouseEnter={() => this.resizeReactLogo("1")} onMouseOut={() => this.resizeReactLogo(null)}>
                    <img id="reactLogo" src={reactLogo} className="appLogo" alt="logo react" />
                </div>
                <p className="footerText blockquote-footer">
                    E-Technology, wszystkie prawa zastrzeżone.
                </p>
            </footer>
        );
    }
}