import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook para la navegación
import { db } from '../Data/Firebase'; // Asegúrate de importar la configuración de Firestore
import { collection, query, onSnapshot } from 'firebase/firestore'; // Funciones de Firestore
import '../Styles/Listas.css';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PantallaCarga from '../Components/PantallaCarga';

const TratamientoList = () => {
    const [mascotas, setMascotas] = useState([]);  // Estado para almacenar las mascotas
    const navigate = useNavigate();  // Hook para navegar

    // Recuperar las mascotas desde Firestore
    useEffect(() => {
        const q = query(collection(db, "Mascotas"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const mascotasData = [];
            querySnapshot.forEach((doc) => {
                // Suponemos que cada documento tiene los campos correspondientes
                mascotasData.push({
                    id: doc.id,  // ID de la mascota
                    NombreMascota: doc.data().NombreMascota,
                    especie: doc.data().Especie,
                    diagnostico: doc.data().Diagnostico,
                    tratamientos: doc.data().Tratamientos,
                    recordatorios: doc.data().Recordatorios,
                });
            });
            setMascotas(mascotasData);  // Guardar los datos en el estado
        });

        return () => unsubscribe();  // Limpiar la suscripción cuando el componente se desmonte
    }, []);

    // Función para manejar la redirección al formulario de edición de tratamiento
    // En TratamientoList
    const handleEditarTratamiento = (id) => {
        navigate(`/registrar-tratamiento/${id}`); // Ahora pasamos el id como parte de la ruta
    };


    // Función para verificar si un valor está vacío o no definido y retornar un valor predeterminado
    const getValor = (valor) => {
        return valor && valor.trim() !== "" ? valor : "No Realizado";
    };

    return (
        <div>
            <Header />
            <PantallaCarga />
            <div className="pet-management-container">
                <h1 className="title">Lista de Tratamientos</h1>
                {/* Tabla de tratamientos */}
                <div className="table-container">
                    <table className="table is-fullwidth">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Especie</th>
                                <th>Diagnóstico</th>
                                <th>Tratamientos</th>
                                <th>Recordatorios</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mascotas.map(mascota => (
                                <tr key={mascota.id}>
                                    <td>{getValor(mascota.NombreMascota)}</td>
                                    <td>{getValor(mascota.especie)}</td>
                                    <td>{getValor(mascota.diagnostico)}</td>
                                    <td>{getValor(mascota.tratamientos)}</td>
                                    <td>{getValor(mascota.recordatorios)}</td>
                                    <td className="action-buttons">
                                        {/* Botón para editar */}
                                        <button className="button is-small is-success" onClick={() => handleEditarTratamiento(mascota.id)}>
                                            <span className="icon">
                                                <i className="fas fa-edit"></i>
                                            </span>
                                            <span>Tratar</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TratamientoList;
