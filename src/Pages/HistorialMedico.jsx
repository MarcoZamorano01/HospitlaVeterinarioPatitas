import React, { useState } from 'react';
import '../Styles/Listas.css';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

const HistorialMedico = () => {
    const navigate = useNavigate(); // Inicializar useNavigate

    // Estado para almacenar los filtros
    const [filters, setFilters] = useState({
        nombre: '',
        especie: '',
        tutor: '',
        fechaIngreso: '',
        fechaSalida: ''
    });

    // Sample data
    const pets = [
        { id: 1, nombre: 'Fido', especie: 'Perro', raza: 'Pitbull', edad: '2 años', tutor: 'Carlos', fechaIngreso: '2025-01-15', fechaSalida: '2025-02-15' },
        { id: 2, nombre: 'Luna', especie: 'Gato', raza: 'Siames', edad: '3 años', tutor: 'Laura', fechaIngreso: '2025-01-20', fechaSalida: '2025-02-20' },
        { id: 3, nombre: 'Max', especie: 'Gato', raza: 'Labrador', edad: '1 año', tutor: 'Juan', fechaIngreso: '2025-02-01', fechaSalida: '2025-03-01' },
        { id: 4, nombre: 'Bella', especie: 'Gato', raza: 'Persa', edad: '4 años', tutor: 'Sofia', fechaIngreso: '2025-03-01', fechaSalida: '2025-04-01' },
        { id: 5, nombre: 'Fido', especie: 'Perro', raza: 'Pitbull', edad: '2 años', tutor: 'Carlos', fechaIngreso: '2025-04-10', fechaSalida: '2025-05-10' },
        { id: 6, nombre: 'Milo', especie: 'Perro', raza: 'Beagle', edad: '2 años', tutor: 'Rosa', fechaIngreso: '2025-04-15', fechaSalida: '2025-05-15' },
        { id: 7, nombre: 'Rex', especie: 'Perro', raza: 'Doberman', edad: '3 años', tutor: 'Ana', fechaIngreso: '2025-05-01', fechaSalida: '2025-06-01' },
        { id: 8, nombre: 'Chester', especie: 'Gato', raza: 'Maine Coon', edad: '5 años', tutor: 'Javier', fechaIngreso: '2025-05-10', fechaSalida: '2025-06-10' },
    ];

    // Filtrar las mascotas según los criterios seleccionados
    const filteredPets = pets.filter(pet => {
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
                                    <td>{pet.edad}</td>
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
