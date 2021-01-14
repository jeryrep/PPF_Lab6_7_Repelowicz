import React, {Component} from "react";
import './CSandbox.css';

export default class CSandbox extends Component {

    changeTitleColor(param) {
        console.log("Zmieniono kolor");
        document.getElementById("title").style.color = param;
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
        document.getElementById("noimg").innerHTML = "<img src='sd.jpg' onerror=\"console.log('Nie znaleziono pliku')\" alt='Nie znaleziono pliku'/>";
    }

    render() {
        return (
            <div id="sandbox" onLoad={console.log("Załadowano")}
                 onMouseDown={console.log("Naciśnięto przycisk na divie")}>
                <h1 className="unselectable" onClick={() => this.changeTitleColor("green")}
                    onDoubleClick={() => this.changeTitleColor("red")} id="title"
                    onMouseEnter={() => this.changeTitleColor("black")}
                    onMouseLeave={() => this.changeTitleColor("white")}>
                    Witam w piaskownicy, można się tutaj pobawić zdarzeniami.
                </h1>
                <p id="text" onMouseDown={() => this.change("X")} className="sandboxText" onMouseOut={this.hide}
                   onMouseOver={this.reveal}>Sekretna wiadomość</p>
                <p id="text2" onCopy={this.copyDetect}>
                    Zaznacz mnie
                </p>
                <form onSubmit={console.log("Probowano zrobic submit")}>
                    <input type="text" onFocus={() => this.changeBackground("blue")}
                           id="textArea"
                           onfocusout={console.log("onfocusout")}
                           onfocusin={console.log("onfocusin")}
                           onDragEnter={console.log("onDragEnter")}
                           onDragOver={console.log("onDragOver")}
                           onKeyPress={console.log("Naciśnięto klawisz")}/>
                    <br/>
                    <input type="number" onPaste={() => this.changeFontColor("blue")}
                           onInput={console.log("Wprowadzono dane")} onSelect={() => this.changeFontColor("green")}
                           id="numberInput" onCut={() => this.changeFontColor("red")} required
                           onInvalid={console.log("Wprowadź dane przed submitem")}/>
                    <br/>
                    <input type="search"/>
                    <br/>
                    <input type="submit"/>
                </form>
                <p onMouseMove={() => this.changeTextDrag("Poruszono myszą")} id="draggable"
                   onContextMenu={() => this.changeTextDrag("Kliknąłeś prawym")}
                   onDragEnd={() => this.changeTextDrag("Skończono")} draggable="true"
                   onDrag={() => this.changeTextDrag("Przenoszę")}
                   onDrop={console.log("onDrop")}
                   onMouseUp={console.log("onMouseUp")}
                   onDragStart={() => this.changeTextDrag("Zaczęto przenosić")}>Przykład drag</p>
                <button onClick={this.noImage}>Kliknij by spróbować wczytać nieznany plik</button>
                <div id="noimg"></div>
                <details>
                    <summary>
                        Lorem ipsum
                    </summary>
                    <p>
                        Dorime
                    </p>
                </details>
            </div>
        );
    }
}