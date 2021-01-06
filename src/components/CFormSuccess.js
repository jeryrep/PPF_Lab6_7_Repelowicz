import React, {Component} from "react";
import './CFormSuccess.css';

export class CFormSuccess extends Component {
    constructor(props) {
        console.log("Konstruktor - wczytano dane")
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            msg: 'Twoje dane są przesyłane...'
        };
    }

    static getDerivedStateFromProps(props) {
        console.log("Zapisano dane do states");
        return {
            name: props.name,
            surname: props.surname,
            email: props.email
        };
    }

    componentDidMount() {
        console.log("Po renderze");
        setTimeout(() => {
            this.setState({msg: "Postaramy się odpowiedzieć jak najszybciej na podany przez ciebie adres e-mail: " + this.state.email});
        }, 3000);
    }

    shouldComponentUpdate() {
        console.log("Komponent będzie aktualizowany")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Sprawdzam poprzedni zrzut");
        document.getElementById("thankYouText").title += "Przed aktualizacją wiadomość wyglądała tak: " + prevState.msg;
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Komponent został zaaktualizowany");
    }

    componentWillMount() {
        console.log("Komponent został usunięty");
    }

    validateSentData() {
        document.getElementById("result").innerHTML = this.state.name === this.props.name && this.state.surname === this.props.surname && this.state.email === this.props.email ? "Dane zostały poprawnie wysłane. Możesz opuścić stronę." : "Coś poszło nie tak, spróbuj ponownie później.";
    }

    render() {
        console.log("Renderuję wyjściowy komponent");
        return (
            <article className="formSuccess">
                <h1 className="testResult">
                    Dziękujemy za dane {this.props.name} {this.props.surname}!
                </h1>
                <p id="thankYouText">
                    {this.state.msg}
                </p>
                <p>
                    Kliknij poniższy przycisk by sprawdzić poprawność danych.
                </p>
                <button data-testid="Button" className="btn btn-dark" onClick={() => this.validateSentData(this.props, this.state)}>Sprawdź poprawność</button>
                <p data-testid="Result" id="result"></p>
            </article>
        );
    }
}