import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../Data/Firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';  // Asegúrate de importar las funciones necesarias
import '../Styles/Formularios.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const RegistrarTratamiento = () => {
    const { id } = useParams();  // Obtener el ID de la mascota desde los parámetros de la URL
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nombre: '',
        especie: '',
        raza: '',
        edad: '',
        tutor: '',
        diagnosticos: '',
        tratamientos: '',
        recordatorio: '',
        foto: '',  // Campo para la foto
        estado: 'En espera',  // Campo para el estado
        fechaSalida: ''  // Campo para la Fecha de Salida
    });
    
    const [showSuccessNotification, setShowSuccessNotification] = useState(false);  // Estado para mostrar la notificación

    useEffect(() => {
        // Verificamos si tenemos un id
        if (!id) return;

        // Recuperar los datos de Firestore
        const fetchData = async () => {
            try {
                const docRef = doc(db, 'Mascotas', id);  // Obtener el documento
                const docSnap = await getDoc(docRef);  // Obtener los datos

                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setFormData({
                        nombre: data.NombreMascota || '',
                        especie: data.Especie || '',
                        raza: data.Raza || '',
                        edad: data.Edad || '',
                        tutor: data.Tutor || '',
                        diagnosticos: data.Diagnostico || '',
                        tratamientos: data.Tratamientos || '',
                        recordatorio: data.Recordatorios || '',
                        foto: data.Foto || '',  // Asignar la URL de la foto
                        estado: data.Estado || 'En espera',  // Asignar el estado de la mascota
                        fechaSalida: data.FechaSalida || ''  // Asignar la Fecha de Salida
                    });
                } else {
                    console.log("No se encontró el documento de la mascota");
                }
            } catch (error) {
                console.error("Error al obtener los datos de la mascota:", error);
            }
        };

        fetchData();
    }, [id]);  // Dependencia de `id` para que se ejecute cuando cambie

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Verificamos que el ID exista para actualizar el documento
            if (!id) {
                console.error("No hay ID para actualizar");
                return;
            }

            // Referencia al documento que se va a actualizar
            const docRef = doc(db, 'Mascotas', id);
            
            // Actualizamos el documento en Firestore
            await updateDoc(docRef, {
                NombreMascota: formData.nombre,
                Especie: formData.especie,
                Raza: formData.raza,
                Edad: formData.edad,
                Tutor: formData.tutor,
                Diagnostico: formData.diagnosticos,
                Tratamientos: formData.tratamientos,
                Recordatorios: formData.recordatorio,
                Estado: formData.estado,  // Guardamos el estado
                FechaSalida: formData.fechaSalida // Guardamos la Fecha de Salida
            });

            console.log('Formulario de tratamiento enviado:', formData);
            setShowSuccessNotification(true);  // Mostrar notificación de éxito
            setTimeout(() => {
                setShowSuccessNotification(false);  // Ocultar notificación después de 3 segundos
                navigate(`/tratamientos`);  // Redirigir después de guardar
            }, 3000);
        } catch (error) {
            console.error("Error al actualizar el tratamiento:", error);
        }
    };

    const handleCancel = () => {
        navigate(`/tratamientos`);  // Cancelar y redirigir a la lista de tratamientos
    };

    return (
        <div>
            <Header />
            <div className="registration-form-container">
                <div className="registration-form-card">
                    <div className="form-header">
                        <h1>Registrar Tratamiento</h1>
                    </div>

                    {showSuccessNotification && (
                        <div className="notification success-notification">
                            <p>¡Tratamiento guardado exitosamente!</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="form-content">
                        {/* Mostrar la imagen de la mascota */}
                        {formData.foto && (
                            <div className="form-field">
                                <label></label>
                                <div className="image-container">
                                    <img src={formData.foto} alt="Foto de la mascota" className="pet-photo" />
                                </div>
                            </div>
                        )}

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

                        {/* Campo de Estado */}
                        <div className="form-field">
                            <label htmlFor="estado">Estado:</label>
                            <select
                                id="estado"
                                name="estado"
                                value={formData.estado}
                                onChange={handleChange}
                            >
                                <option value="En espera">En espera</option>
                                <option value="Atendido">Atendido</option>
                            </select>
                        </div>

                        {/* Campo de Fecha de Salida */}
                        <div className="form-field">
                            <label htmlFor="fechaSalida">Fecha de Salida:</label>
                            <input
                                type="date"
                                id="fechaSalida"
                                name="fechaSalida"
                                value={formData.fechaSalida}
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
