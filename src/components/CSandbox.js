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

    changeTextDrag(param) {
        document.getElementById("draggable").innerHTML = param;
    }

    noImage() {
        document.getElementById("noimg").innerHTML = "<img src='sd.jpg' onerror=\"alert(\'Nie znaleziono pliku'\)\"/>";
    }

    //1. onClick, 2. onMouseDown, 3. onMouseOut, 4. onMouseOver, 5. onCopy, 6. onFocus, 7. onBlur, 8. onChange, 9. onSelect, 10. onCut, 11. onDragStart, 12. onDrag, 13. onDragEnd, 14. onerror,
    //15.

    render() {
        return (
            <div id="sandbox" onresize={this.scrollCounter}>
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
                <p id="draggable" onDragEnd={() => this.changeTextDrag("Skończono")} draggable="true" onDrag={() => this.changeTextDrag("Przenoszę")} onDragStart={() => this.changeTextDrag("Zaczęto przenosić")}>Przykład drag</p>
                <button onClick={this.noImage}>Kliknij by spróbować wczytać nieznany plik</button>
                <div id="noimg"></div>
            </div>
        );
    }

}