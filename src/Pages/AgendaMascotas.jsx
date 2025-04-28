import React, { useState } from 'react';
import '../Styles/Listas.css';
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Calendario = () => {
    const [filters, setFilters] = useState({
        nombre: '',
        especie: '',
        tutor: '',
        fechaIngreso: '',
        fechaSalida: ''
    });

    const data = [
        { id: 1, nombre: 'Fido', especie: 'Perro', raza: 'Pitbull', edad: '2 años', tutor: 'Carlos', fechaIngreso: '2025-01-15', fechaSalida: '2025-02-15', hora: '10:00' },
        { id: 2, nombre: 'Luna', especie: 'Gato', raza: 'Siames', edad: '3 años', tutor: 'Laura', fechaIngreso: '2025-01-20', fechaSalida: '2025-02-20', hora: '11:30' },
        { id: 3, nombre: 'Max', especie: 'Gato', raza: 'Labrador', edad: '1 año', tutor: 'Juan', fechaIngreso: '2025-02-01', fechaSalida: '2025-03-01', hora: '13:00' },
        { id: 4, nombre: 'Bella', especie: 'Gato', raza: 'Persa', edad: '4 años', tutor: 'Sofia', fechaIngreso: '2025-03-01', fechaSalida: '2025-04-01', hora: '14:00' },
        { id: 5, nombre: 'Fido', especie: 'Perro', raza: 'Pitbull', edad: '2 años', tutor: 'Carlos', fechaIngreso: '2025-04-10', fechaSalida: '2025-05-10', hora: '16:00' },
        { id: 6, nombre: 'Milo', especie: 'Perro', raza: 'Beagle', edad: '2 años', tutor: 'Rosa', fechaIngreso: '2025-04-15', fechaSalida: '2025-05-15', hora: '18:00' },
    ];

    const filteredData = data.filter(pet => {
        return (
            (filters.nombre === '' || pet.nombre.toLowerCase().includes(filters.nombre.toLowerCase())) &&
            (filters.especie === '' || pet.especie.toLowerCase().includes(filters.especie.toLowerCase())) &&
            (filters.tutor === '' || pet.tutor.toLowerCase().includes(filters.tutor.toLowerCase())) &&
            (filters.fechaIngreso === '' || pet.fechaIngreso.includes(filters.fechaIngreso)) &&
            (filters.fechaSalida === '' || pet.fechaSalida.includes(filters.fechaSalida))
        );
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div>
            <Header />
            <div className="pet-management-container">
                <h1 className="title">Agenda de citas pendientes</h1>
                <p>Aqui puedes revisar todos los pacientes que tenemos pendientes</p>
                <br />

                {/* Botón Agregar */}
                <div className="top-buttons">
                    <button className="button is-primary">
                        <span>Agregar Nueva Cita</span>
                        <span className="icon">
                            <i className="fas fa-plus-circle"></i>
                        </span>
                    </button>
                </div>

                {/* Filtros */}
                <p>Puedes filtrar los historiales médicos por los siguientes campos:</p>
                <div className="top-buttons">
                    <input type="text" name="nombre" placeholder="Filtrar por Nombre" value={filters.nombre} onChange={handleFilterChange} />
                    <input type="text" name="especie" placeholder="Filtrar por Especie" value={filters.especie} onChange={handleFilterChange} />
                    <input type="text" name="tutor" placeholder="Filtrar por Tutor" value={filters.tutor} onChange={handleFilterChange} />
                    <input type="date" name="fechaIngreso" value={filters.fechaIngreso} onChange={handleFilterChange} />
                    <input type="date" name="fechaSalida" value={filters.fechaSalida} onChange={handleFilterChange} />
                </div>

                {/* Tabla combinada */}
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
                                <th>Hora</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map(pet => (
                                <tr key={pet.id}>
                                    <td>{pet.nombre}</td>
                                    <td>{pet.especie}</td>
                                    <td>{pet.raza}</td>
                                    <td>{pet.edad}</td>
                                    <td>{pet.tutor}</td>
                                    <td>{pet.fechaIngreso}</td>
                                    <td>{pet.fechaSalida}</td>
                                    <td>{pet.hora}</td>
                                    <td className="action-buttons">
                                        <button className="button is-small is-info">
                                            <span className="icon">
                                                <i className="fas fa-eye"></i>
                                            </span>
                                            <span>Ver</span>
                                        </button>
                                        <button className="button is-small is-success">
                                            <span className="icon">
                                                <i className="fas fa-edit"></i>
                                            </span>
                                            <span>Editar</span>
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
