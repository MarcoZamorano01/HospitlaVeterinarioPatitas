import React from 'react';
import '../Styles/PartesInicio.css'

const PartesInicio = () => {
    return (
        <div className="veterinary-clinic-container">
            {/* Promotions section */}
            <section className="promotions-section">
                <h3 className="title has-text-centered">PROMOCIONES</h3>
                <div className="promotions-container">
                    <div className="promotion-card blue-card">
                        <div className="promotion-content">
                            <h4>CAMPAÑA DE ESTERILIZACIÓN</h4>
                            <div className="promotion-image">
                                <img src="/src/images/principal/PromoEste.png" alt="Perro con afecciones dermatológicas" />
                            </div>
                            <button className="info-button">INFÓRMATE AQUÍ</button>
                        </div>
                    </div>
                    <div className="promotion-card cyan-card">
                        <div className="promotion-content">
                            <h4>CAMPAÑA DESPARASITACIÓN INTERNA</h4>
                            <div className="promotion-image">
                                <img src="src/images/principal/PromoDespa.png" alt="Gato y perro" />
                            </div>
                            <button className="info-button">INFÓRMATE AQUÍ</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features section */}
            <section className="features-section">
                <div className="features-container">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <h4>Patitas cerca de ti</h4>
                        <p>Encuentranos en tu zona local buscando nuestras sucursales</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-user-md"></i>
                        </div>
                        <h4>Profesionales especializados</h4>
                        <p>Más de 250 expertos en medicina veterinaria ofreciendo el mejor servicio a tu mascota.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-plus-circle"></i>
                        </div>
                        <h4>Servicio integral</h4>
                        <p>Servicio especializado en cada una de las áreas médicas de tu mascota.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <i className="fas fa-percentage"></i>
                        </div>
                        <h4>Campañas</h4>
                        <p>Lanzamos constantemente promociones para que tu mascota tenga el mejor cuidado.</p>
                    </div>
                </div>
            </section>

            {/* Services section */}
            <section className="services-section">
                <div className="">
                    <h3 className="title has-text-centered">Nuestros servicios</h3>
                    <h4 className="title has-text-centered">Su salud nos importa</h4>
                    <p className="mensaje">En KiVet nos caracterizamos por <strong>excelente servicio al cliente</strong>. Nuestra atención médica veterinaria es de la más alta calidad y ofrecemos una gran variedad de servicios especializados con vanguardia y experiencia.</p>
                </div>
                <div className="services-grid">
                    <div className="service-item">
                        <img src="src/images/principal/MedicinaGeneral.png" alt="Medicina veterinaria general" />
                        <span>Medicina veterinaria general</span>
                    </div>
                    <div className="service-item">
                        <img src="src/images/principal/Vacuna.png" alt="Vacunación" />
                        <span>Vacunación veterinaria</span>
                    </div>
                    <div className="service-item">
                        <img src="src/images/principal/Esterilizacion.png" alt="Esterilización" />
                        <span>Esterilización veterinaria</span>
                    </div>
                    <div className="service-item">
                        <img src="src/images/principal/Diagnostico.png" alt="Diagnóstico" />
                        <span>Diagnóstico veterinario</span>
                    </div>
                    <div className="service-item">
                        <img src="src/images/principal/Laboratorio.png" alt="Laboratorio" />
                        <span>Laboratorio</span>
                    </div>
                    <div className="service-item">
                        <img src="src/images/principal/Especialistas.png" alt="Especialidades" />
                        <span>Especialidades médicas</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PartesInicio;
