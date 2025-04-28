import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate
import '../Styles/Listas.css';
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const TratamientoList = () => {
    const navigate = useNavigate(); // Usa el hook useNavigate para navegar

    // Datos de ejemplo para tratamientos
    const tratamientos = [
        { id: 1, nombre: 'Tratamiento 1', especie: 'Perro', diagnosticos: 'Infección', tratamientos: 'Antibióticos', recordatorios: 'Cada 12 horas' },
        { id: 2, nombre: 'Tratamiento 2', especie: 'Gato', diagnosticos: 'Alergia', tratamientos: 'Antihistamínico', recordatorios: 'Cada 24 horas' },
        { id: 3, nombre: 'Tratamiento 3', especie: 'Perro', diagnosticos: 'Dolor', tratamientos: 'Analgésico', recordatorios: 'Cada 6 horas' },
        { id: 4, nombre: 'Tratamiento 4', especie: 'Conejo', diagnosticos: 'Parásitos', tratamientos: 'Desparacitación', recordatorios: 'Cada 2 semanas' },
        { id: 5, nombre: 'Tratamiento 5', especie: 'Gato', diagnosticos: 'Virus', tratamientos: 'Antivirales', recordatorios: 'Cada 8 horas' },
        { id: 6, nombre: 'Tratamiento 6', especie: 'Perro', diagnosticos: 'Infección', tratamientos: 'Antibióticos', recordatorios: 'Cada 12 horas' },
    ];

    // Función para manejar la redirección al formulario de registro de tratamiento
    const handleRegistrarTratamiento = () => {
        navigate('/registrarTratamientos'); // Cambia '/registrar-tratamiento' por la ruta que desees
    };

    return (
        <div>
            <Header />
            <div className="pet-management-container">
                <h1 className="title">Lista de Tratamientos</h1>

                <div className="top-buttons">
                    <button className="button is-primary" onClick={handleRegistrarTratamiento}>
                        <span>Agregar Tratamiento</span>
                    </button>
                </div>

                <div className="table-container">
                    <table className="table is-fullwidth">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Especie</th>
                                <th>Diagnósticos</th>
                                <th>Tratamientos</th>
                                <th>Recordatorios</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tratamientos.map(tratamiento => (
                                <tr key={tratamiento.id}>
                                    <td>{tratamiento.nombre}</td>
                                    <td>{tratamiento.especie}</td>
                                    <td>{tratamiento.diagnosticos}</td>
                                    <td>{tratamiento.tratamientos}</td>
                                    <td>{tratamiento.recordatorios}</td>
                                    <td className="action-buttons">
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

export default TratamientoList;
