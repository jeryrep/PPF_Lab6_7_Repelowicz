import React from "react";
import './CContact.css';
import {CFormSuccess} from "./CFormSuccess";

export class CContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({submitted: true});
    }

    renderFormInfo() {
        return <CFormSuccess name={this.state.name} surname={this.state.surname} email={this.state.email}/>;
    }

    changeInputBackground(param, event) {
        event.target.style.backgroundColor = param;
    }

    render() {
        return (
            <article className="formContainer">
                <p className="formText display-4">
                    W celu skontaktowania się z naszą firmą wypełnij poniższe dane kontaktowe
                </p>
                <form onSubmit={this.handleSubmit} data-testid="form">
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Imię:</label>
                        <div className="col-sm-10">
                            <input type="text" data-testid="name-test" className="form-control inputText" placeholder="Jan" required name="name" onChange={this.handleChange} onBlur={(e) => this.changeInputBackground('white', e)} onFocus={(e) => this.changeInputBackground('lightBlue', e)} onCopy={(e) => this.changeInputBackground('yellow', e)} onPaste={(e) => this.changeInputBackground('lightGreen', e)} onCut={(e) => this.changeInputBackground('lightCoral', e)} onInvalid={(e) => this.changeInputBackground('red', e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="surname" className="col-sm-2 col-form-label">Nazwisko:</label>
                        <div className="col-sm-10">
                            <input type="text" data-testid="surname-test" className="form-control inputText" placeholder="Kowalski" required name="surname" value={this.state.surname} onChange={this.handleChange} onBlur={(e) => this.changeInputBackground('white', e)} onFocus={(e) => this.changeInputBackground('lightBlue', e)} onCopy={(e) => this.changeInputBackground('yellow', e)} onPaste={(e) => this.changeInputBackground('lightGreen', e)} onCut={(e) => this.changeInputBackground('lightCoral', e)} onInvalid={(e) => this.changeInputBackground('red', e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">E-mail:</label>
                        <div className="col-sm-10">
                            <input type="email" data-testid="email-test" className="form-control inputText" placeholder="jan.kowalski@gmail.com" required name="email" value={this.state.email} onChange={this.handleChange} onBlur={(e) => this.changeInputBackground('white', e)} onFocus={(e) => this.changeInputBackground('lightBlue', e)} onCopy={(e) => this.changeInputBackground('yellow', e)} onPaste={(e) => this.changeInputBackground('lightGreen', e)} onCut={(e) => this.changeInputBackground('lightCoral', e)} onInvalid={(e) => this.changeInputBackground('red', e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <input type="submit" className="btn btn-dark" required id="submit"/>
                        </div>
                    </div>
                </form>
                {this.state.submitted && this.renderFormInfo()}
            </article>
        );
    }
}