import React, { useState } from 'react';
import '../Styles/Formularios.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const RegistrarTratamiento = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        especie: '',
        raza: '',
        edad: '',
        tutor: '',
        diagnosticos: '',
        tratamientos: '',
        recordatorio: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario de tratamiento enviado:', formData);
        // Agrega tu lógica para enviar el formulario aquí
    };

    const handleCancel = () => {
        setFormData({
            nombre: '',
            especie: '',
            raza: '',
            edad: '',
            tutor: '',
            diagnosticos: '',
            tratamientos: '',
            recordatorio: ''
        });
        console.log('Formulario cancelado');
        // Agrega tu lógica para cancelar aquí
    };

    return (
        <div>
            <Header />
            <div className="registration-form-container">
                <div className="registration-form-card">
                    <div className="form-header">
                        <h1>Registrar Tratamiento</h1>
                    </div>

                    <form onSubmit={handleSubmit} className="form-content">
                        <div className="form-field">
                            <label htmlFor="nombre">Nombre del Paciente:</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="especie">Especie:</label>
                            <input
                                type="text"
                                id="especie"
                                name="especie"
                                value={formData.especie}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="raza">Raza:</label>
                            <input
                                type="text"
                                id="raza"
                                name="raza"
                                value={formData.raza}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="edad">Edad:</label>
                            <input
                                type="number"
                                id="edad"
                                name="edad"
                                value={formData.edad}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="tutor">Tutor:</label>
                            <input
                                type="text"
                                id="tutor"
                                name="tutor"
                                value={formData.tutor}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="diagnosticos">Diagnósticos:</label>
                            <textarea
                                id="diagnosticos"
                                name="diagnosticos"
                                value={formData.diagnosticos}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="tratamientos">Tratamientos:</label>
                            <textarea
                                id="tratamientos"
                                name="tratamientos"
                                value={formData.tratamientos}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="recordatorio">Recordatorio:</label>
                            <textarea
                                id="recordatorio"
                                name="recordatorio"
                                value={formData.recordatorio}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-actions">
                            <button
                                type="button"
                                className="button is-danger cancel-button"
                                onClick={handleCancel}
                            >
                                <span>Cancelar</span>
                                <span className="icon">
                                    <i className="fas fa-times"></i>
                                </span>
                            </button>

                            <button
                                type="submit"
                                className="button is-primary save-button"
                            >
                                <span>Guardar</span>
                                <span className="icon">
                                    <i className="fas fa-save"></i>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RegistrarTratamiento;
