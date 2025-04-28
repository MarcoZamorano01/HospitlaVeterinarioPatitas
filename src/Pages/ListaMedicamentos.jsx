import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate
import '../Styles/Listas.css';
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MedicamentoList = () => {
    const navigate = useNavigate(); // Usa el hook useNavigate para navegar

    // Datos de ejemplo para medicamentos
    const medicamentos = [
        { id: 1, nombre: 'Paracetamol', dosis: '500mg', stock: 100, precio: '$10' },
        { id: 2, nombre: 'Ibuprofeno', dosis: '400mg', stock: 150, precio: '$12' },
        { id: 3, nombre: 'Amoxicilina', dosis: '250mg', stock: 200, precio: '$8' },
        { id: 4, nombre: 'Cetirizina', dosis: '10mg', stock: 50, precio: '$6' },
        { id: 5, nombre: 'Omeprazol', dosis: '20mg', stock: 75, precio: '$7' },
        { id: 6, nombre: 'Dipirona', dosis: '500mg', stock: 120, precio: '$5' },
    ];

    // Función para manejar la redirección al formulario de registro
    const handleRegistrarMedicamento = () => {
        navigate('/registrarMedicamentos'); // Cambia '/registrar-medicamento' por la ruta que desees
    };

    return (
        <div>
            <Header />
            <div className="pet-management-container">
                <h1 className="title">Lista de Medicamentos</h1>

                <div className="top-buttons">
                    <button className="button is-primary" onClick={handleRegistrarMedicamento}>
                        <span>Registrar Medicamento</span>
                    </button>
                </div>

                <div className="table-container">
                    <table className="table is-fullwidth">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Dosis</th>
                                <th>Stock</th>
                                <th>Precio</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medicamentos.map(medicamento => (
                                <tr key={medicamento.id}>
                                    <td>{medicamento.nombre}</td>
                                    <td>{medicamento.dosis}</td>
                                    <td>{medicamento.stock}</td>
                                    <td>{medicamento.precio}</td>
                                    <td className="action-buttons">
                                        <button className="button is-small is-success">
                                            <span className="icon">
                                                <i className="fas fa-edit"></i>
                                            </span>
                                            <span>Editar</span>
                                        </button>
                                        <button className="button is-small is-danger">
                                            <span className="icon">
                                                <i className="fas fa-trash-alt"></i>
                                            </span>
                                            <span>Eliminar</span>
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

export default MedicamentoList;
