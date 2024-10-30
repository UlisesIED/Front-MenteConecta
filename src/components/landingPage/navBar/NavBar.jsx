import React from 'react';


export function NavBar() {

    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

                <a href="/" className="logo d-flex align-items-center">
                    <h1 className="sitename">Mente Conecta</h1>
                </a>
                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><a href="#hero" className="active">Inicio</a></li>
                        <li><a href="#about">Nosotros</a></li>
                        <li><a href="#features">Caracteristicas</a></li>
                        <li><a href="#faq">Preguntas Frecuentes</a></li>

                        <li><a href="http://18.212.151.35">Iniciar sesión</a></li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

            </div>
        </header>
    );
}

/*
<li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
    <ul>
        <li><a href="#">Dropdown 1</a></li>
        <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
                <li><a href="#">Deep Dropdown 1</a></li>
                <li><a href="#">Deep Dropdown 2</a></li>
                <li><a href="#">Deep Dropdown 3</a></li>
                <li><a href="#">Deep Dropdown 4</a></li>
                <li><a href="#">Deep Dropdown 5</a></li>
            </ul>
        </li>
        <li><a href="#">Dropdown 2</a></li>
        <li><a href="#">Dropdown 3</a></li>
        <li><a href="#">Dropdown 4</a></li>
    </ul>
</li>
    */