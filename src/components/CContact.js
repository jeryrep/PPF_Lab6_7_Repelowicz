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

    render() {
        return (
            <article className="formContainer">
                <p className="formText display-4">
                    W celu skontaktowania się z naszą firmą wypęlnij poniższe dane kontaktowe
                </p>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Imię:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control inputText" placeholder="Jan" required name="name" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="surname" className="col-sm-2 col-form-label">Nazwisko:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control inputText" placeholder="Kowalski" required name="surname" value={this.state.surname} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label">E-mail:</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control inputText" placeholder="jan.kowalski@gmail.com" required name="email" value={this.state.email} onChange={this.handleChange}/>
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