import './App.css';
import CHeader from "./components/CHeader";
import CNavbar from "./components/CNavbar";
import {CFooter} from "./components/CFooter";
import React, {Component} from "react";
import {CRoutes} from "./components/CRoutes";

class App extends Component {
    render() {
        return (
            <div className="App">
                <CHeader/>
                <CNavbar/>
                <CRoutes/>
                {this.props.children}
                <CFooter/>
            </div>
        );
    }
}

export default App;
