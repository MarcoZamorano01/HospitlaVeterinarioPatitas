import React, { useState } from 'react';
import '../Styles/Formularios.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const RegistrarMedicamentos = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        dosis: '',
        stock: '',
        precio: ''
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
        console.log('Formulario de medicamento enviado:', formData);
        // Agrega tu lógica para enviar el formulario aquí
    };

    const handleCancel = () => {
        setFormData({
            nombre: '',
            dosis: '',
            stock: '',
            precio: ''
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
                        <h1>Registrar Medicamento</h1>
                    </div>

                    <form onSubmit={handleSubmit} className="form-content">
                        <div className="form-field">
                            <label htmlFor="nombre">Nombre del Medicamento:</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="dosis">Dosis:</label>
                            <input
                                type="text"
                                id="dosis"
                                name="dosis"
                                value={formData.dosis}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="stock">Stock Disponible:</label>
                            <input
                                type="number"
                                id="stock"
                                name="stock"
                                value={formData.stock}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="precio">Precio:</label>
                            <input
                                type="number"
                                id="precio"
                                name="precio"
                                value={formData.precio}
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

export default RegistrarMedicamentos;
