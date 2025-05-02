import React, { useState, useEffect } from 'react'; 
import { db } from '../Data/Firebase';  // Importa la configuración de Firebase
import { collection, query, onSnapshot } from 'firebase/firestore';  // Importa las funciones necesarias de Firestore
import { useNavigate } from 'react-router-dom';  // Importa navigate para redirigir
import '../Styles/Listas.css';
import Footer from "../Components/Footer";
import HeaderCliente from '../Components/HeaderCliente';
import PantallaCarga from '../Components/PantallaCarga';

const MisMascotas = () => {
    const navigate = useNavigate();
    const [mascotas, setMascotas] = useState([]); // Estado para almacenar las mascotas

    // Función para obtener las mascotas de Firestore
    useEffect(() => {
        const q = query(collection(db, "Mascotas"));
        
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const mascotasArray = [];
            querySnapshot.forEach((doc) => {
                const mascotaData = doc.data();
                mascotasArray.push({
                    id: doc.id,  // Asegúrate de almacenar el ID del documento
                    nombre: mascotaData.NombreMascota,
                    especie: mascotaData.Especie,
                    estado: mascotaData.Estado,
                    foto: mascotaData.Foto,  // Se maneja como URL
                });
            });
            setMascotas(mascotasArray); // Actualiza el estado con los datos obtenidos
        });

        return () => unsubscribe();  // Limpiar la suscripción cuando el componente se desmonta
    }, []);  // Este efecto solo se ejecutará una vez al montar el componente

    // Función para redirigir a la página de agregar nueva consulta
    const handleAgregarConsulta = () => {
        navigate('/nuevaConsulta');
    };

    // Función para redirigir a los detalles de la mascota según su ID
    const handleVerDetalles = (id) => {
        navigate(`/detallesMascota/${id}`);  // Redirige a la página de detalles de la mascota
    };

    return (
        <div>
            <PantallaCarga/>
            <HeaderCliente />
            <div className="pet-management-container">
                <h1 className="title">Mis Mascotas</h1>

                <div className="top-buttons">
                    <button className="button is-primary" onClick={handleAgregarConsulta}>
                        <span>Agregar Nueva Consulta</span>
                    </button>
                </div>

                <div className="table-container">
                    <table className="table is-fullwidth">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Especie</th>
                                <th>Foto</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mascotas.map((mascota) => (
                                <tr key={mascota.id}>
                                    <td>{mascota.nombre}</td>
                                    <td>{mascota.especie}</td>
                                    <td>
                                        <img src={mascota.foto} alt={mascota.nombre} style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                                    </td>
                                    <td>{mascota.estado}</td>
                                    <td className="action-buttons">
                                        <button 
                                            className="button is-small is-info"
                                            onClick={() => handleVerDetalles(mascota.id)} // Llamada a la función con el ID
                                        >
                                            <span className="icon">
                                                <i className="fas fa-eye"></i>
                                            </span>
                                            <span>Ver</span>
                                        </button>
                                        
                                        <button className="button is-small is-danger">
                                            <span className="icon">
                                                <i className="fas fa-file-alt"></i>
                                            </span>
                                            <span>Comprobante</span>
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

export default MisMascotas;
