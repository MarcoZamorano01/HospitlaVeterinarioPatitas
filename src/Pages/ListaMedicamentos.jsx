import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../Data/Firebase'; // Asegúrate de importar tu configuración de Firestore
import { collection, query, onSnapshot, deleteDoc, doc } from 'firebase/firestore';  // Funciones de Firestore
import '../Styles/Listas.css';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PantallaCarga from '../Components/PantallaCarga';

const MedicamentoList = () => {
    const [medicamentos, setMedicamentos] = useState([]);  // Estado para almacenar los medicamentos
    const navigate = useNavigate();  // Hook para navegar a otras pantallas

    // Recuperar los medicamentos desde Firestore
    useEffect(() => {
        const q = query(collection(db, "Medicamentos"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const medicamentosData = [];
            querySnapshot.forEach((doc) => {
                medicamentosData.push({
                    id: doc.id,  // ID del medicamento
                    nombre: doc.data().NombreMedicamento,
                    dosis: doc.data().Dosis,
                    stock: doc.data().Stock,
                    precio: doc.data().Precio,
                    estado: doc.data().Estado,
                });
            });
            setMedicamentos(medicamentosData);  // Guardar los datos en el estado
        });

        return () => unsubscribe();  // Limpiar la suscripción al desmontar el componente
    }, []);

    // Función para manejar la redirección al formulario de registro de medicamento
    const handleRegistrarMedicamento = () => {
        navigate('/registrarMedicamentos');
    };

    // Función para manejar la acción de eliminar un medicamento
    const handleEliminarMedicamento = async (id) => {
        try {
            await deleteDoc(doc(db, "Medicamentos", id));  // Eliminar el medicamento de Firestore
            alert('Medicamento eliminado correctamente');
        } catch (error) {
            alert('Error al eliminar el medicamento: ', error);
        }
    };

    // Función para manejar la redirección al formulario de edición de medicamento
    const handleEditarMedicamento = (id) => {
        navigate(`/editarMedicamento/${id}`);  // Navegar a la página de edición
    };

    return (
        <div>
            <Header />
            <PantallaCarga/>
            <div className="pet-management-container">
                <h1 className="title">Lista de Medicamentos</h1>

                {/* Botón para registrar un nuevo medicamento */}
                <div className="top-buttons">
                    <button className="button is-primary" onClick={handleRegistrarMedicamento}>
                        <span>Registrar Medicamento</span>
                    </button>
                </div>

                {/* Tabla de medicamentos */}
                <div className="table-container">
                    <table className="table is-fullwidth">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Dosis</th>
                                <th>Stock</th>
                                <th>Precio</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medicamentos.map(medicamento => (
                                <tr key={medicamento.id}>
                                    <td>{medicamento.nombre}</td>
                                    <td>{medicamento.dosis} mg</td>
                                    <td>{medicamento.stock} unidades</td>
                                    <td>{medicamento.precio} Bs</td>
                                    <td>{medicamento.estado}</td>
                                    <td className="action-buttons">
                                        {/* Botón para editar */}
                                        <button className="button is-small is-success" onClick={() => handleEditarMedicamento(medicamento.id)}>
                                            <span className="icon">
                                                <i className="fas fa-edit"></i>
                                            </span>
                                            <span>Editar</span>
                                        </button>
                                        {/* Botón para eliminar */}
                                        <button className="button is-small is-danger" onClick={() => handleEliminarMedicamento(medicamento.id)}>
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
