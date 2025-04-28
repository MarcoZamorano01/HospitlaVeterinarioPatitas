import React, { useState } from 'react';
import '../Styles/Formularios.css';
import HeaderCliente from '../Components/HeaderCliente';
import Footer from '../Components/Footer';

const FormualarioConsulta = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        especie: '',
        raza: '',
        edad: '',
        tutor: ''
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
        console.log('Form submitted:', formData);
        // Add your submission logic here
    };

    const handleCancel = () => {
        setFormData({
            nombre: '',
            especie: '',
            raza: '',
            edad: '',
            tutor: ''
        });
        console.log('Form cancelled');
        // Add your cancel logic here
    };

    return (
        <div>
            <HeaderCliente/>
            <div className="registration-form-container">
            <div className="registration-form-card">
                <div className="form-header">
                    <h1>Registrar Consulta</h1>
                </div>

                <form onSubmit={handleSubmit} className="form-content">
                    <div className="form-field">
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="especie">Especie</label>
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
                            type="text"
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
            <Footer/>
        </div>
    );
};

export default FormualarioConsulta;