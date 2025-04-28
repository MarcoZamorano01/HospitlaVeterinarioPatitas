import React, { useEffect } from 'react';
import '../Styles/Footer.css'; // Asegúrate de extraer los estilos al archivo CSS
import logo from '../Images/TextoBlanco.png'; // Ajusta la ruta si es necesario

const Footer = () => {
    useEffect(() => {
        // Si necesitas alguna lógica adicional al montar el componente
    }, []);

    return (
        <footer className="footer is-primary fade-in">
            <div className="content has-text-centered">
                <div className="columns">
                    {/* Social Media Links */}
                    <div className="column">
                        <a href="https://www.facebook.com/" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://x.com/home?lang=es" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/?hl=es" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>

                    {/* Footer Links */}
                    <div className="column">
                        <a href="/" className="footer-link">Inicio</a>
                        <a href="/sobreNosotros" className="footer-link">Sobre nosotros</a>
                        <a href="/objetivos" className="footer-link">Objetivos</a>
                        <a href="https://wa.me/525512345678" className="footer-link">Info</a>
                    </div>

                    {/* Logo */}
                    <div className="column">
                        <img src={logo} alt="Chapacos Proactivos Logo" title="Logo" />
                    </div>
                </div>

                <p id='derechos'>&copy; 2025 | HospitalVeterinarioPatitas</p>
            </div>
        </footer>
    );
};

export default Footer;
