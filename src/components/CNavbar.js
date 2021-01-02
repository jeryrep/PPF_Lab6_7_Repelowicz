import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Nav, Navbar} from "react-bootstrap";
import './CNavbar.css';
import { Link } from 'react-router-dom';

export default class CNavbar extends Component {
    render() {
        return (
            <nav className="navigation">
                <Navbar variant="dark">
                    <Nav className="mr-auto">
                        <Link to="/home" className="nav-link">
                            Home
                        </Link>
                        <Link to="/materials" className="nav-link">
                            Materiały
                        </Link>
                        <Link to="/cooperation" className="nav-link">
                            Współpraca
                        </Link>
                        <Link to="/about" className="nav-link">
                            O nas
                        </Link>
                        <Link to="/contact" className="nav-link">
                            Kontakt
                        </Link>
                    </Nav>
                </Navbar>
            </nav>
        );
    }
}