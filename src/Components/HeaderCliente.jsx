import React from 'react';
import '../Styles/Header.css'; // Asegúrate de que los estilos estén actualizados
import logo from '../Images/TextoBlanco.png'; // Ajusta la ruta si es necesario

const HeaderCliente = () => {
    return (
        <header>
            <nav className="navbar is-primary" id='Barra'>
                <a className="navbar-item" href="/" title="Inicio">
                    <img
                        src={logo}
                        alt="Logo Chapacos Proactivos"
                        className="logoHead"
                        title="Logo"
                    />
                </a>

                <div className="navbar-menu">
                    <div className="navbar-end">
                        {/* Botón Mis Mascotas */}
                        <a className="navbar-item" href="/misMascotas">
                            <span className="icon is-small">
                                <i className="fas fa-paw"></i>
                            </span>
                            <span>Mis Mascotas</span>
                        </a>

                        {/* Botón Tratamientos */}
                        <a className="navbar-item" href="/tratamientosCliente">
                            <span className="icon is-small">
                                <i className="fas fa-cogs"></i>
                            </span>
                            <span>Tratamientos</span>
                        </a>

                        {/* Botón Cuidados */}
                        <a className="navbar-item" href="/cuidados">
                            <span className="icon is-small">
                                <i className="fas fa-heart"></i>
                            </span>
                            <span>Cuidados</span>
                        </a>

                        {/* Botón Medicamentos */}
                        <a className="navbar-item" href="/ventaMedicamentos">
                            <span className="icon is-small">
                                <i className="fas fa-syringe"></i>
                            </span>
                            <span>Medicamentos</span>
                        </a>

                        {/* Botón Sesiones */}
                        <a className="navbar-item" href="/login">
                            <span className="icon is-small">
                                <i className="fas fa-user-clock"></i>
                            </span>
                            <span>Sesiones</span>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderCliente;
