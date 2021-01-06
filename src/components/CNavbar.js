import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Nav, Navbar} from "react-bootstrap";
import './CNavbar.css';
import { Link } from 'react-router-dom';

export class CNavbar extends Component {
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
                        <Link to="/home" className="nav-link act" data-testid="Home">
                            Home
                        </Link>
                        <Link to="/materials" className="nav-link" data-testid="Materials">
                            Materiały
                        </Link>
                        <Link to="/cooperation" className="nav-link" data-testid="Coop">
                            Współpraca
                        </Link>
                        <Link to="/contact" className="nav-link" data-testid="Contact">
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