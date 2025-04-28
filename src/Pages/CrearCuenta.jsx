import React, { useState } from 'react';
import '../Styles/Formularios.css';
import HeaderCliente from '../Components/HeaderCliente';
import Footer from '../Components/Footer';

const FormularioRegistroUsuario = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        contraseña: ''
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
        console.log('Usuario registrado:', formData);
        // Aquí puedes agregar la lógica de envío a una API
    };

    const handleCancel = () => {
        setFormData({
            nombre: '',
            apellido: '',
            telefono: '',
            email: '',
            contraseña: ''
        });
        console.log('Registro cancelado');
    };

    return (
        <div>
            <HeaderCliente />
            <div className="registration-form-container">
                <div className="registration-form-card">
                    <div className="form-header">
                        <h1>Registrar Usuario</h1>
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
                            <label htmlFor="apellido">Apellido:</label>
                            <input
                                type="text"
                                id="apellido"
                                name="apellido"
                                value={formData.apellido}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="telefono">Teléfono:</label>
                            <input
                                type="tel"
                                id="telefono"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="contraseña">Contraseña:</label>
                            <input
                                type="password"
                                id="contraseña"
                                name="contraseña"
                                value={formData.contraseña}
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

export default FormularioRegistroUsuario;
