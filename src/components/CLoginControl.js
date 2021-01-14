import React, {Component} from "react";
import './CLoginControl.css';
import {Link} from "react-router-dom";

export default class CLoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLogoutClick() {
        localStorage.removeItem("log");
        this.setState({isLoggedIn: false});
        window.location.reload();
    }

    componentDidMount() {
        console.log(localStorage.getItem("log"))
        if (localStorage.getItem("log"))
            this.setState({isLoggedIn: true});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            <div>
                {isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick}/> : <LoginButton/>}
            </div>
        );
    }
}

const LoginButton = props => (
    <button className="btn btn-dark" onClick={props.onClick}>
        <Link to="/login" className="text-white text-decoration-none">
            Zaloguj się
        </Link>
    </button>
);

const LogoutButton = props => (
    <button className="btn btn-dark" onClick={props.onClick}>
        <Link to="/login" className="text-white text-decoration-none">
            Wyloguj się
        </Link>
    </button>
);