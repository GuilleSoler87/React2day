import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__logo">Restaurante 3 Platos</h1>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__item"><a href="#" className="header__link">Inicio</a></li>
                        <li className="header__item"><a href="#" className="header__link">Menú</a></li>
                        <li className="header__item"><a href="#" className="header__link">Reservas</a></li>
                        <li className="header__item"><a href="#" className="header__link">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
