import React from 'react';
import '../Styles/Header.css'; // Asegúrate de que los estilos estén actualizados
import logo from '../Images/TextoBlanco.png'; // Ajusta la ruta si es necesario

const Header = () => {
    return (
        <header>
            <nav className="navbar is-primary" id="Barra">
                <a className="navbar-item" href="/mascotasPendientes" title="Inicio">
                    <img
                        src={logo}
                        alt="Logo Chapacos Proactivos"
                        className="logoHead"
                        title="Logo"
                    />
                </a>

                <div className="navbar-menu">
                    <div className="navbar-end">
                        {/* Botón Próximas Citas */}
                        <a className="navbar-item" href="/mascotasPendientes">
                            <span className="icon is-small">
                                <i className="fas fa-calendar-day"></i>
                            </span>
                            <span>Próximas Citas</span>
                        </a>

                        {/* Botón Historial medico */}
                        <a className="navbar-item" href="/historialMedico">
                            <span className="icon is-small">
                                <i className="fas fa-list"></i>
                            </span>
                            <span>Historial Medico</span>
                        </a>

                        {/* Botón Agenda */}
                        <a className="navbar-item" href="/agenda">
                            <span className="icon is-small">
                                <i className="fas fa-calendar-alt"></i>
                            </span>
                            <span>Agenda</span>
                        </a>

                        {/* Botón Gestión de Medicamentos */}
                        <a className="navbar-item" href="/medicamentos">
                            <span className="icon is-small">
                                <i className="fas fa-pills"></i>
                            </span>
                            <span>Gestión de Medicamentos</span>
                        </a>

                        {/* Botón Gestión de Tratamientos */}
                        <a className="navbar-item" href="/tratamientos">
                            <span className="icon is-small">
                                <i className="fas fa-cogs"></i>
                            </span>
                            <span>Gestión de Tratamientos</span>
                        </a>

                        {/* Botón Gestión de Usuarios */}
                        <a className="navbar-item" href="/gestionUsuarios">
                            <span className="icon is-small">
                                <i className="fas fa-users-cog"></i>
                            </span>
                            <span>Gestión de Usuarios</span>
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

export default Header;
