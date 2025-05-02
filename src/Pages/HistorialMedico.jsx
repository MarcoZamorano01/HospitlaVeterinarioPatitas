import React, { useState, useEffect } from 'react';
import '../Styles/Listas.css';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import { db } from '../Data/Firebase';  // Importar la configuración de Firebase
import { collection, query, onSnapshot } from 'firebase/firestore';  // Importar las funciones necesarias de Firestore
import PantallaCarga from '../Components/PantallaCarga';

const HistorialMedico = () => {
    const navigate = useNavigate(); // Inicializar useNavigate

    // Estado para almacenar las mascotas obtenidas desde Firestore
    const [mascotas, setMascotas] = useState([]);

    // Estado para almacenar los filtros
    const [filters, setFilters] = useState({
        nombre: '',
        especie: '',
        tutor: '',
        fechaIngreso: '',
        fechaSalida: ''
    });

    // Función para obtener las mascotas de Firestore
    useEffect(() => {
        const q = query(collection(db, "Mascotas"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const mascotasArray = [];
            querySnapshot.forEach((doc) => {
                const mascotaData = doc.data();

                let fechaIngreso = mascotaData.FechaIngreso || 'Fecha no disponible';
                let fechaSalida = mascotaData.FechaSalida || 'Fecha no disponible';

                // Si las fechas son de tipo Timestamp, convertimos a formato local
                if (mascotaData.FechaIngreso && mascotaData.FechaIngreso.seconds) {
                    fechaIngreso = new Date(mascotaData.FechaIngreso.seconds * 1000).toLocaleDateString();
                }

                if (mascotaData.FechaSalida && mascotaData.FechaSalida.seconds) {
                    fechaSalida = new Date(mascotaData.FechaSalida.seconds * 1000).toLocaleDateString();
                }

                // Solo agregar la mascota si el estado es "Atendido"
                if (mascotaData.Estado === "Atendido") {
                    mascotasArray.push({
                        id: doc.id,
                        nombre: mascotaData.NombreMascota,
                        especie: mascotaData.Especie,
                        raza: mascotaData.Raza,  // Raza de la mascota
                        edad: mascotaData.Edad,  // Edad de la mascota
                        tutor: mascotaData.Tutor,
                        fechaIngreso: fechaIngreso,  // Fecha de ingreso
                        fechaSalida: fechaSalida,  // Fecha de salida
                    });
                }
            });
            setMascotas(mascotasArray); // Actualiza el estado con las mascotas "Atendido"
        });

        return () => unsubscribe();  // Limpiar la suscripción cuando el componente se desmonta
    }, []);  // Este efecto solo se ejecutará una vez al montar el componente

    // Filtrar las mascotas según los criterios seleccionados
    const filteredPets = mascotas.filter(pet => {
        return (
            (filters.nombre === '' || pet.nombre.toLowerCase().includes(filters.nombre.toLowerCase())) &&
            (filters.especie === '' || pet.especie.toLowerCase().includes(filters.especie.toLowerCase())) &&
            (filters.tutor === '' || pet.tutor.toLowerCase().includes(filters.tutor.toLowerCase())) &&
            (filters.fechaIngreso === '' || pet.fechaIngreso.includes(filters.fechaIngreso)) &&
            (filters.fechaSalida === '' || pet.fechaSalida.includes(filters.fechaSalida))
        );
    });

    // Manejar los cambios en los filtros
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    // Manejar el botón de redirección
    const handleRedirect = () => {
        navigate('/reporte');
    };

    return (
        <div>
            <Header />
            <PantallaCarga />
            <div className="pet-management-container">
                <h1 className="title">Historial Médico</h1>
                <p>Puedes filtrar los historiales médicos por los siguientes campos:</p>
                <br />

                {/* Filtros */}
                <div className="top-buttons">
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Filtrar por Nombre"
                        value={filters.nombre}
                        onChange={handleFilterChange}
                    />
                    <input
                        type="text"
                        name="especie"
                        placeholder="Filtrar por Especie"
                        value={filters.especie}
                        onChange={handleFilterChange}
                    />
                    <input
                        type="text"
                        name="tutor"
                        placeholder="Filtrar por Tutor"
                        value={filters.tutor}
                        onChange={handleFilterChange}
                    />
                    <input
                        type="date"
                        name="fechaIngreso"
                        value={filters.fechaIngreso}
                        onChange={handleFilterChange}
                    />
                    <input
                        type="date"
                        name="fechaSalida"
                        value={filters.fechaSalida}
                        onChange={handleFilterChange}
                    />
                </div>

                {/* Botón para redirigir a otra pantalla */}
                <div className="top-buttons">
                    <button className="button is-primary" onClick={handleRedirect}>
                        <span>Generar Nuevo Reporte</span>
                    </button>
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
                                    <td>{pet.fechaIngreso}</td>
                                    <td>{pet.fechaSalida}</td>
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

export default HistorialMedico;
