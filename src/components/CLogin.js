import React, {Component} from "react";
import './CLogin.css';
import {Redirect} from "react-router-dom";

export class CLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            pass: '',
            isLoggedIn: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        if (this.state.login === "admin" && this.state.pass === "admin") {
            document.getElementById("msg").innerHTML = "Zalogowano się poprawnie, proszę czekać...";
            localStorage.setItem("log", "true");
            setTimeout(() => {
                this.setState({isLoggedIn: true});
            }, 1000);
        } else {
            document.getElementById("msg").innerHTML = "Niepoprawne dane";
        }
        event.preventDefault();
    }

    changeInputBackground(param, event) {
        event.target.style.backgroundColor = param;
    }

    render() {
        if (this.state.isLoggedIn){
            window.location.reload();
            return <Redirect to="/"/>
        }
        return (
            <article id="loginPage">
                <form onSubmit={this.handleSubmit} data-testid="form">
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Login:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control inputText" placeholder="login" required name="login" onChange={this.handleChange} onBlur={(e) => this.changeInputBackground('white', e)} onFocus={(e) => this.changeInputBackground('lightBlue', e)} onCopy={(e) => this.changeInputBackground('yellow', e)} onPaste={(e) => this.changeInputBackground('lightGreen', e)} onCut={(e) => this.changeInputBackground('lightCoral', e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="surname" className="col-sm-2 col-form-label">Hasło:</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control inputText" placeholder="password" required name="pass" onChange={this.handleChange} onBlur={(e) => this.changeInputBackground('white', e)} onFocus={(e) => this.changeInputBackground('lightBlue', e)} onPaste={(e) => this.changeInputBackground('lightGreen', e)}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-2">
                            <input type="submit" className="btn btn-dark" id="submit" value="Zaloguj się"/>
                        </div>
                    </div>
                </form>
                <p id="msg"> </p>
            </article>
        );
    }
}