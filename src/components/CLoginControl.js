import React, {Component} from "react";
import './CLoginControl.css';

export default class CLoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}
const UserGreeting = () => <p className="small greeting">Zalogowano</p>;

const GuestGreeting = () => <p className="small greeting">Niezalogowano</p>;

const Greeting = props => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
};

const LoginButton = props => (
    <button className="btn btn-dark" onClick={props.onClick}>
        Login
    </button>
);

const LogoutButton = props => (
    <button className="btn btn-dark" onClick={props.onClick}>
        Logout
    </button>
);