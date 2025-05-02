import React, { useState } from 'react';
import { db } from '../Data/Firebase';  // Importa la configuración de Firebase
import { collection, addDoc, Timestamp } from 'firebase/firestore'; // Importa las funciones necesarias de Firestore
import '../Styles/Formularios.css';
import HeaderCliente from '../Components/HeaderCliente';
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';

const FormualarioConsulta = () => {
    const navigate = useNavigate();  // Para redirigir después del registro
    const [formData, setFormData] = useState({
        nombre: '',
        especie: '',
        raza: '',
        edad: '',
        tutor: '',
        imagen: '',  // Campo para la URL de la imagen
    });

    // Manejar los cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Función para enviar el formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Asegurarse de que todos los campos necesarios estén completos
        if (!formData.nombre || !formData.especie || !formData.edad || !formData.tutor || !formData.imagen) {
            alert('Por favor complete todos los campos del formulario.');
            return;
        }

        try {
            // Agregar una nueva mascota a Firestore en la colección "Mascotas"
            await addDoc(collection(db, "Mascotas"), {
                NombreMascota: formData.nombre,
                Especie: formData.especie,
                Raza: formData.raza,
                Edad: parseInt(formData.edad),  // Convertir la edad a un número
                Tutor: formData.tutor,
                Foto: formData.imagen,  // URL de la imagen
                FechaIngreso: Timestamp.now(),  // Fecha de ingreso (timestamp actual)
                Estado: 'En espera',  // Estado inicial
                Diagnostico: '',  // Campo vacío para Diagnóstico
                Tratamientos: '',  // Campo vacío para Tratamientos
                FechaSalida: '',  // Campo vacío para Fecha de Salida
            });

            // Limpiar los campos después de enviar
            setFormData({
                nombre: '',
                especie: '',
                raza: '',
                edad: '',
                tutor: '',
                imagen: '',  // Limpiar la URL de la imagen
            });

            // Redirigir a otra página (por ejemplo, 'Mis Mascotas')
            navigate('/misMascotas');
        } catch (error) {
            console.error("Error al agregar la mascota:", error);
            alert("Hubo un error al registrar la mascota. Intente de nuevo.");
        }
    };

    // Función para cancelar y limpiar el formulario
    const handleCancel = () => {
        setFormData({
            nombre: '',
            especie: '',
            raza: '',
            edad: '',
            tutor: '',
            imagen: '',  // Limpiar el campo de la URL de la imagen
        });
        navigate('/misMascotas');  // Redirigir a 'Mis Mascotas' o página deseada
    };

    return (
        <div>
            <HeaderCliente />
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
                                placeholder="Ingresa el nombre de la mascota"
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
                                placeholder="Ingresa la especie"
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
                                placeholder="Ingresa la raza"
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
                                placeholder="Ingresa la edad"
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
                                placeholder="Ingresa el nombre del Tutor"
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="imagen">Imagen (URL):</label>
                            <input
                                type="text"
                                id="imagen"
                                name="imagen"
                                value={formData.imagen}
                                onChange={handleChange}
                                placeholder="Ingresa la URL de la imagen de tu mascota"
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
                                <span>Registrar</span>
                                <span className="icon">
                                    <i className="fas fa-check-circle"></i>
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

export default FormualarioConsulta;
