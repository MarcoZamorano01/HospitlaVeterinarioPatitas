import React, { useState } from 'react';
import { db } from '../Data/Firebase'; // Asegúrate de tener Firestore importado
import { doc, setDoc } from 'firebase/firestore'; // Para guardar en Firestore
import '../Styles/Formularios.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const RegistrarMedicamentos = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        dosis: '',
        stock: '',
        precio: '',
        estado: 'Activo', // Valor por defecto
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación básica
        if (!formData.nombre || !formData.dosis || !formData.stock || !formData.precio) {
            alert('Por favor, llena todos los campos.');
            return;
        }

        try {
            // Guardar medicamento en Firestore
            const docRef = doc(db, 'Medicamentos', formData.nombre); // Usamos el nombre como ID del documento
            await setDoc(docRef, {
                NombreMedicamento: formData.nombre,
                Dosis: formData.dosis,
                Stock: formData.stock,
                Precio: parseFloat(formData.precio), // Convertir el precio a número decimal
                Estado: formData.estado,
            });

            // Limpiar el formulario después de enviar
            setFormData({
                nombre: '',
                dosis: '',
                stock: '',
                precio: '',
                estado: 'Activo',
            });

            alert('Medicamento registrado correctamente');
        } catch (error) {
            console.error('Error al registrar medicamento:', error);
            alert('Hubo un error al registrar el medicamento. Intenta de nuevo.');
        }
    };

    const handleCancel = () => {
        setFormData({
            nombre: '',
            dosis: '',
            stock: '',
            precio: '',
            estado: 'Activo',
        });
        console.log('Formulario cancelado');
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

                        <div className="form-field">
                            <label htmlFor="estado">Estado:</label>
                            <select
                                id="estado"
                                name="estado"
                                value={formData.estado}
                                onChange={handleChange}
                            >
                                <option value="Activo">Activo</option>
                                <option value="Desactivado">Desactivado</option>
                            </select>
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
