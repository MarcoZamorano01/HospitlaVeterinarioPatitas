import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Listas.css';
import Footer from "../Components/Footer";
import HeaderCliente from '../Components/HeaderCliente';

const MisMascotas = () => {
    const navigate = useNavigate(); // Hook de navegación

    // Datos de ejemplo para las consultas con estado
    const consultas = [
        { id: 1, nombre: 'Fido', especie: 'Perro', hora: '10:00 AM', tutor: 'Carlos', estado: 'En espera' },
        { id: 2, nombre: 'Luna', especie: 'Gato', hora: '11:30 AM', tutor: 'Ana', estado: 'En consulta' },
        { id: 3, nombre: 'Rex', especie: 'Perro', hora: '2:00 PM', tutor: 'Juan', estado: 'Atendido' },
        { id: 4, nombre: 'Mía', especie: 'Conejo', hora: '4:00 PM', tutor: 'Luisa', estado: 'En espera' },
        { id: 5, nombre: 'Max', especie: 'Perro', hora: '5:30 PM', tutor: 'Carlos', estado: 'Atendido' },
    ];

    const handleAgregarConsulta = () => {
        navigate('/nuevaConsulta'); // Navegar a la pantalla nuevaConsulta
    };

    return (
        <div>
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
                                <th>Hora</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {consultas.map(consulta => (
                                <tr key={consulta.id}>
                                    <td>{consulta.nombre}</td>
                                    <td>{consulta.especie}</td>
                                    <td>{consulta.hora}</td>
                                    <td>{consulta.estado}</td>
                                    <td className="action-buttons">
                                        <button className="button is-small is-info">
                                            <span className="icon">
                                                <i className="fas fa-eye"></i>
                                            </span>
                                            <span>Ver</span>
                                        </button>
                                        <button className="button is-small is-primary">
                                            <span className="icon">
                                                <i className="fas fa-edit"></i>
                                            </span>
                                            <span>Editar</span>
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
