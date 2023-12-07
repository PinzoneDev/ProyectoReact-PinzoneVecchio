import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Mi Tienda</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link custom-nav-link" to="/">
                                Artículos en venta
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link custom-nav-link" to="/">
                                Noticias
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link custom-nav-link" to="/">
                                Redes sociales
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link custom-nav-link" to="/catalog">
                                <i className="fas fa-shopping-cart"></i> Ver Catálogo
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;






