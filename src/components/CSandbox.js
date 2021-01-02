import React, {Component} from "react";
import './CSandbox.css';

export default class CSandbox extends Component {

    changeTitleColor() {
        console.log("Zmieniono kolor");
        document.getElementById("title").style.color = 'black';
    }

    reveal() {
        console.log("Odsłonięto");
        document.getElementById("text").style.backgroundColor = "black";
    }

    hide() {
        console.log("Zakryto");
        document.getElementById("text").style.color = "lightBlue";
        document.getElementById("text").style.backgroundColor = "lightBlue";
    }

    change(character) {
        console.log("Zmieniono");
        document.getElementById("text").innerHTML += character;
    }

    copyDetect() {
        console.log("Skopiowano");
        document.getElementById("text2").innerHTML = "Nie ma mnie!";
    }

    changeBackground(param) {
        console.log("focus");
        document.getElementById("textArea").style.backgroundColor = param;
    }

    changeFontColor(param) {
        console.log("focus");
        document.getElementById("numberInput").style.color = param;
    }

    //onClick, onMouseDown, onMouseOut, onMouseOver, onCopy, onFocus, onBlur, onChange, onSelect, onCut

    render() {
        return (
            <div>
                <h1 onClick={this.changeTitleColor} id="title">
                    Witam w piaskownicy, można się tutaj pobawić zdarzeniami.
                </h1>
                <p id="text" onMouseDown={() => this.change("X")} className="sandboxText" onMouseOut={this.hide} onMouseOver={this.reveal}>Sekretna wiadomość</p>
                <p id="text2" onCopy={this.copyDetect}>
                    Zaznacz mnie
                </p>
                <input type="text" onFocus={() => this.changeBackground("blue")} onBlur={() => this.changeBackground("white")} id="textArea" onChange={() => this.changeBackground("red")}/>
                <br/>
                <input type="number" onSelect={() => this.changeFontColor("green")} id="numberInput" onCut={() => this.changeFontColor("red")}/>
            </div>
        );
    }

}