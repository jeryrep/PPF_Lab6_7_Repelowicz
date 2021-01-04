import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Nav, Navbar} from "react-bootstrap";
import './CNavbar.css';
import { Link } from 'react-router-dom';

export default class CNavbar extends Component {

    responsiveNav() {
        let x = document.getElementById("topnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    render() {
        return (
            <Navbar variant="dark" id="navigation">
                <Nav className="mr-auto navContainer">
                    <div className="topnav" id="topnav">
                        <Link to="/home" className="nav-link act">
                            Home
                        </Link>
                        <Link to="/materials" className="nav-link">
                            Materiały
                        </Link>
                        <Link to="/cooperation" className="nav-link">
                            Współpraca
                        </Link>
                        <Link to="/contact" className="nav-link">
                            Kontakt
                        </Link>
                        <a href="javascript:void(0);" className="icon" onClick={this.responsiveNav}>
                            <i className="fa fa-bars"></i>
                        </a>
                    </div>
                </Nav>
            </Navbar>
        );
    }
}