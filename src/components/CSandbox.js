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

    //1. onClick, 2. onMouseDown, 3. onMouseOut, 4. onMouseOver, 5. onCopy, 6. onFocus, 7. onBlur, 8. onChange, 9. onSelect, 10. onCut, 11. onDragStart, 12. onDrag, 13. onDragEnd, 14. onerror,
    //15. onCanPlay 16. onCanPlayThrough 17. onContextMenu 18. onDurationChange 19. onEnded 20. onInput 21. onInvalid 22. onDoubleClick 23. onKeyPress 24. onLoad 25. onLoadedData 26. onLoadedMetaData
    //27. onLoadStart 28. onMouseEnter 29. onMouseLeave 30. onMouseMove 31. onPaste 32. onSubmit 33. onVolumeChange 34.

    render() {
        return (
            <div id="sandbox" onLoad={console.log("Załadowano")} onMouseDown={console.log("Naciśnięto przycisk na divie")}>
                <h1 className="unselectable" onClick={() => this.changeTitleColor("green")} onDoubleClick={() => this.changeTitleColor("red")} id="title" onMouseEnter={() => this.changeTitleColor("black")} onMouseLeave={() => this.changeTitleColor("white")}>
                    Witam w piaskownicy, można się tutaj pobawić zdarzeniami.
                </h1>
                <p id="text" onMouseDown={() => this.change("X")} className="sandboxText" onMouseOut={this.hide} onMouseOver={this.reveal}>Sekretna wiadomość</p>
                <p id="text2" onCopy={this.copyDetect}>
                    Zaznacz mnie
                </p>
                <form onSubmit={console.log("Probowano zrobic submit")}>
                    <input type="text" onFocus={() => this.changeBackground("blue")} onBlur={() => this.changeBackground("white")} id="textArea" onChange={() => this.changeBackground("red")} onKeyPress={console.log("Naciśnięto klawisz")}/>
                    <br/>
                    <input type="number" onPaste={() => this.changeFontColor("blue")} onInput={console.log("Wprowadzono dane")} onSelect={() => this.changeFontColor("green")} id="numberInput" onCut={() => this.changeFontColor("red")} required onInvalid={console.log("Wprowadź dane przed submitem")}/>
                    <br/>
                    <input type="search"/>
                    <br/>
                    <input type="submit"/>
                </form>
                <p onMouseMove={() => this.changeTextDrag("Poruszono myszą")} id="draggable" onContextMenu={() => this.changeTextDrag("Kliknąłeś prawym")} onDragEnd={() => this.changeTextDrag("Skończono")} draggable="true" onDrag={() => this.changeTextDrag("Przenoszę")} onDragStart={() => this.changeTextDrag("Zaczęto przenosić")}>Przykład drag</p>
                <button onClick={this.noImage}>Kliknij by spróbować wczytać nieznany plik</button>
                <div id="noimg"></div>
            </div>
        );
    }
}