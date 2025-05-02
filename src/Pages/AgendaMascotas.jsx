import React, { useState, useEffect } from 'react';
import '../Styles/Listas.css';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from 'react-router-dom';
import { db } from '../Data/Firebase';  // Importa la configuración de Firestore
import { collection, query, onSnapshot } from 'firebase/firestore';  // Importa las funciones necesarias de Firestore
import PantallaCarga from '../Components/PantallaCarga';

const Calendario = () => {
    const [filters, setFilters] = useState({
        nombre: '',
        especie: '',
        tutor: '',
        fechaIngreso: '',
        fechaSalida: ''
    });

    const [pets, setPets] = useState([]);  // Estado para almacenar los datos de las mascotas
    const navigate = useNavigate();  // Para redirigir a la página de detalle de la mascota

    // Función para formatear fecha
    const formatDate = (timestamp) => {
        // Si el valor de fecha es un Timestamp de Firestore, convertirlo a Date
        if (timestamp && timestamp.seconds) {
            const date = new Date(timestamp.seconds * 1000);  // Convertir a milisegundos
            return date.toLocaleDateString();  // Formatear a "dd/mm/yyyy"
        }
        return '';  // Retornar una cadena vacía si no es una fecha válida
    };

    // Recuperar los datos de Firestore
    useEffect(() => {
        const q = query(collection(db, "Mascotas"));  // Consulta de la colección "Mascotas"
        
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const petsData = [];
            querySnapshot.forEach((doc) => {
                petsData.push({
                    id: doc.id,
                    nombre: doc.data().NombreMascota,
                    especie: doc.data().Especie,
                    raza: doc.data().Raza,
                    edad: doc.data().Edad,
                    tutor: doc.data().Tutor,
                    fechaIngreso: doc.data().FechaIngreso,
                    fechaSalida: doc.data().FechaSalida,
                });
            });
            setPets(petsData);  // Establecer los datos obtenidos en el estado
        });

        return () => unsubscribe();  // Limpiar la suscripción cuando el componente se desmonte
    }, []);

    // Filtrar los datos según los filtros seleccionados
    const filteredPets = pets.filter(pet => {
        return (
            (filters.nombre === '' || pet.nombre.toLowerCase().includes(filters.nombre.toLowerCase())) &&
            (filters.especie === '' || pet.especie.toLowerCase().includes(filters.especie.toLowerCase())) &&
            (filters.tutor === '' || pet.tutor.toLowerCase().includes(filters.tutor.toLowerCase())) &&
            (filters.fechaIngreso === '' || pet.fechaIngreso.toLowerCase().includes(filters.fechaIngreso.toLowerCase())) &&
            (filters.fechaSalida === '' || pet.fechaSalida.toLowerCase().includes(filters.fechaSalida.toLowerCase()))
        );
    });

    // Manejar el cambio en los filtros
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    // Manejar la redirección al detalle de la mascota
    const handleViewDetails = (id) => {
        navigate(`/detallesMascota/${id}`);  // Redirige a la página de detalles de la mascota con el ID
    };

    return (
        <div>
            <Header />
            <PantallaCarga/>
            <div className="pet-management-container">
                <h1 className="title">Agenda de citas pendientes</h1>
                <p>Aquí puedes revisar todos los pacientes que tenemos pendientes</p>
                <br />

                {/* Filtros */}
                <p>Puedes filtrar las mascotas por los siguientes campos:</p>
                <div className="top-buttons">
                    <input type="text" name="nombre" placeholder="Filtrar por Nombre" value={filters.nombre} onChange={handleFilterChange} />
                    <input type="text" name="especie" placeholder="Filtrar por Especie" value={filters.especie} onChange={handleFilterChange} />
                    <input type="text" name="tutor" placeholder="Filtrar por Tutor" value={filters.tutor} onChange={handleFilterChange} />
                    <input type="date" name="fechaIngreso" value={filters.fechaIngreso} onChange={handleFilterChange} />
                    <input type="date" name="fechaSalida" value={filters.fechaSalida} onChange={handleFilterChange} />
                </div>

                {/* Tabla de mascotas */}
                <div className="table-container">
                    <table className="table is-fullwidth">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Especie</th>
                                <th>Raza</th>
                                <th>Edad</th>
                                <th>Tutor</th>
                                <th>Fecha de Ingreso</th>
                                <th>Fecha de Salida</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPets.map(pet => (
                                <tr key={pet.id}>
                                    <td>{pet.nombre}</td>
                                    <td>{pet.especie}</td>
                                    <td>{pet.raza}</td>
                                    <td>{pet.edad} años</td>
                                    <td>{pet.tutor}</td>
                                    <td>{formatDate(pet.fechaIngreso)}</td>  {/* Convertir y formatear fecha de ingreso */}
                                    <td>{formatDate(pet.fechaSalida)}</td>    {/* Convertir y formatear fecha de salida */}
                                    <td className="action-buttons">
                                        <button className="button is-small is-info" onClick={() => handleViewDetails(pet.id)}>
                                            <span className="icon">
                                                <i className="fas fa-eye"></i>
                                            </span>
                                            <span>Ver</span>
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

export default Calendario;
