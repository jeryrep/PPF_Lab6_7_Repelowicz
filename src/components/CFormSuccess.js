import React, {Component} from "react";
import './CFormSuccess.css';

export class CFormSuccess extends Component {
    render() {
        return (
            <article className="formSuccess">
                <h1>
                    Dziękujemy za dane {this.props.name} {this.props.surname}!
                </h1>
                <p>
                    Postaramy się odpowiedzieć jak najszybciej na podany przez ciebie adres e-mail: {this.props.email}.
                </p>
            </article>
        );
    }
}