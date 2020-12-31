import React, {Component} from 'react';

class CContents extends Component {
    constructor() {
        super();
        this.state = {msg: 'Witaj użytkowniku. Kliknij przycisk aby poznać wiadomość'};
    }

    changeMsg() {
        this.setState({msg: 'Właśnie jesteś uczestnikiem kursu React, gratulacje!'});
    }

    render() {
        /*const items = [];
        for (let i = 0; i < this.txtData().count; i++) {
            let value = this.txtData().text[i];
            items.push(
                <div className="contentsFlex">
                    <img className="contentsFlexImg" src={this.imgs['img' + (i + 1)]} alt=""/>
                    <p className="contentsFlexTxt">
                        {value}
                    </p>
                </div>
            );
        }*/
        return (
            <div className="contentsDivClass">
                <h1>
                    {this.state.msg}
                </h1>
                <button onClick={() => this.changeMsg()}>
                    Kliknij, aby poznać tajemnicę
                </button>
            </div>
        )
    }
}

export default CContents;