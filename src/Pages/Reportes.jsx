import React, { useState } from 'react';
import '../Styles/Formularios.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Reporte = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        fecha: '',  // Campo de fecha agregado
        motivoReporte: '',  // Reporte
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
        console.log('Formulario de reporte enviado:', formData);
        // Lógica para enviar el formulario aquí
    };

    const handleCancel = () => {
        setFormData({
            nombre: '',
            fecha: '',  // Reiniciamos la fecha
            motivoReporte: '',  // Reiniciamos el reporte
        });
        console.log('Formulario cancelado');
        // Lógica para cancelar aquí
    };

    return (
        <div>
            <Header />
            <div className="registration-form-container">
                <div className="registration-form-card">
                    <div className="form-header">
                        <h1>Realizar Reporte</h1>
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
                            <label htmlFor="fecha">Fecha:</label>
                            <input
                                type="date"
                                id="fecha"
                                name="fecha"
                                value={formData.fecha}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="motivoReporte">Reporte:</label>
                            <textarea
                                id="motivoReporte"
                                name="motivoReporte"
                                value={formData.motivoReporte}
                                onChange={handleChange}
                                className="large-textarea"  // Clase especial para hacer más grande el textarea
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

export default Reporte;
