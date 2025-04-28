import React, { useState, useEffect } from "react";
import HeaderCliente from "../Components/HeaderCliente";
import Footer from "../Components/Footer";  // Asegúrate de que la ruta sea correcta
import { Link } from "react-router-dom";  // Asegúrate de tener react-router-dom instalado
import PartesInicio from "../Components/PartesInicio";




const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 6; 

    useEffect(() => {
        // Autoplay del carrusel
        const autoplayInterval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % totalSlides);
        }, 5000); // Cambiar de slide cada 5 segundos

        // Limpiar el intervalo al desmontar el componente
        return () => clearInterval(autoplayInterval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div>
            <HeaderCliente />


            <section className="hero is-fullheight hero-background">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="TITULO">Hospital Veterinario Patitas</h1>
                        <h2 className="SUBTITULO">Nos apasiona cuidar de tus compañeros peludos</h2>
                        <p className="MENSSAJE">
                            ¡Bienvenidos! Cuidamos de tu mascota con cariño y profesionalismo. Tu compañero está en las mejores manos.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="title has-text-centered">
                        Descubre lo que tenemos para ti!
                    </h2>
                    <p className="mensaje">
                        Tenemos distintas funciones para ofrecerte: Ver el cuidado de tus mascotas, sus tratamientos, consejos y cuidados.
                    </p>

                    <PartesInicio />

                    <section className="hero is-fullheight carousel-section">
                        <div className="hero-carousel">
                            <div className="carousel-container">
                                {/* Carrusel dinámico */}
                                {[...Array(totalSlides)].map((_, index) => (
                                    <div className={`carousel-item ${index === currentSlide ? 'active' : ''}`} key={index}>
                                        <a href="/misMascotas" title="MisMascotas">
                                            <img
                                                src={`src/images/Carrusel/Carrusel${index + 1}.png`}
                                                alt={`Carrusel ${index + 1}`}
                                                title="Servicio Profesional para tu Mascota"
                                            />
                                        </a>
                                    </div>
                                ))}
                            </div>

                            <div className="carousel-controls">
                                <button className="prev-button" onClick={prevSlide}>❮</button>
                                <div className="carousel-indicators">
                                    {[...Array(totalSlides)].map((_, index) => (
                                        <span
                                            className={`indicator ${index === currentSlide ? 'active' : ''}`}
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                        ></span>
                                    ))}
                                </div>
                                <button className="next-button" onClick={nextSlide}>❯</button>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <section className="section info-columns">
                <div className="container">
                    <div className="columns is-centered">
                        {/* Mis mascotas Column */}
                        <div className="column is-one-third">
                            <div className="info-card">
                                <h2 className="title is-4 has-text-centered">
                                    Mis Mascotas
                                </h2>
                                <div className="card-image">
                                    <figure className="image">
                                        <img
                                            src="src/images/Tarjetas/Tarjeta1.png"
                                            alt="Mis Mascotas"
                                        />
                                    </figure>
                                </div>
                                <div className="content">
                                    <p>
                                        Conoce el cuidado que le brindamos a tus animales, asegurándonos de que estén siempre felices y saludables.
                                    </p>
                                    <Link to="/misMascotas" className="button is-primary" id="linksPrincipal">Ver</Link> {/* Botón de ver */}
                                </div>
                            </div>
                        </div>

                        {/* Tratamientos Column */}
                        <div className="column is-one-third">
                            <div className="info-card">
                                <h2 className="title is-4 has-text-centered">
                                    Tratamientos
                                </h2>
                                <div className="card-image">
                                    <figure className="image">
                                        <img
                                            src="src/images/Tarjetas/Tarjeta2.png"
                                            alt="Tratamientos"
                                        />
                                    </figure>
                                </div>
                                <div className="content">
                                    <p>
                                        Ofrecemos una variedad de tratamientos especializados para asegurar la salud y el bienestar de tus mascotas.
                                    </p>
                                    <Link to="/tratamientosCliente" className="button is-primary" id="linksPrincipal">Ver</Link> {/* Botón de ver */}
                                </div>
                            </div>
                        </div>

                        {/* Consejos y Cuidados Column */}
                        <div className="column is-one-third">
                            <div className="info-card">
                                <h2 className="title is-4 has-text-centered">
                                    Cuidados
                                </h2>
                                <div className="card-image">
                                    <figure className="image">
                                        <img
                                            src="src/images/Tarjetas/Tarjeta3.png"
                                            alt="Consejos y Cuidados"
                                        />
                                    </figure>
                                </div>
                                <div className="content">
                                    <p>
                                        Aprende sobre los cuidados diarios y consejos prácticos para mantener a tu mascota sana y feliz.
                                    </p>
                                    <Link to="/cuidados" className="button is-primary" id="linksPrincipal">Ver</Link> {/* Botón de ver */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HomePage;
