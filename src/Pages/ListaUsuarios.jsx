import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate
import { db } from '../Data/Firebase'; // Asegúrate de importar la configuración de Firestore
import { collection, query, onSnapshot } from 'firebase/firestore'; // Funciones de Firestore
import '../Styles/Listas.css';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PantallaCarga from '../Components/PantallaCarga';

const UsuarioList = () => {
    const [usuarios, setUsuarios] = useState([]);  // Estado para almacenar los usuarios
    const navigate = useNavigate();  // Hook para navegar

    // Recuperar los usuarios desde Firestore
    useEffect(() => {
        const q = query(collection(db, "Usuarios"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const usuariosData = [];
            querySnapshot.forEach((doc) => {
                // Suponemos que cada documento tiene los campos correspondientes
                usuariosData.push({
                    id: doc.id,  // ID del usuario
                    nombre: doc.data().Nombre,
                    apellido: doc.data().Apellido,
                    telefono: doc.data().Telefono,
                    correo: doc.data().Correo,
                    rol: doc.data().Rol,
                    estado: doc.data().Estado,
                });
            });
            setUsuarios(usuariosData);  // Guardar los datos en el estado
        });

        return () => unsubscribe();  // Limpiar la suscripción cuando el componente se desmonte
    }, []);

    // Función para manejar la redirección al formulario de registro de usuario
    const handleAgregarUsuario = () => {
        navigate('/registrarUsuario'); // Redirige a la página para registrar un nuevo usuario
    };

    // Función para manejar la redirección al formulario de edición de usuario
    const handleEditarUsuario = (id) => {
        navigate(`/editarUsuario/${id}`); // Redirige a la página de edición de usuario
    };

    return (
        <div>
            <Header />
            <PantallaCarga />
            <div className="pet-management-container">
                <h1 className="title">Gestión de Usuarios</h1>

                {/* Botón para agregar un nuevo usuario */}
                <div className="top-buttons">
                    <button className="button is-primary" onClick={handleAgregarUsuario}>
                        <span>Agregar Nuevo Usuario</span>
                    </button>
                </div>

                {/* Tabla de usuarios */}
                <div className="table-container">
                    <table className="table is-fullwidth">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Teléfono</th>
                                <th>Correo</th>
                                <th>Rol</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map(usuario => (
                                <tr key={usuario.id}>
                                    <td>{usuario.nombre}</td>
                                    <td>{usuario.apellido}</td>
                                    <td>{usuario.telefono}</td>
                                    <td>{usuario.correo}</td>
                                    <td>{usuario.rol}</td>
                                    <td>{usuario.estado}</td>
                                    <td className="action-buttons">
                                        {/* Botón para editar */}
                                        <button className="button is-small is-success" onClick={() => handleEditarUsuario(usuario.id)}>
                                            <span className="icon">
                                                <i className="fas fa-edit"></i>
                                            </span>
                                            <span>Editar</span>
                                        </button>
                                        {/* Botón para eliminar (funcionalidad no implementada aquí) */}
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

export default UsuarioList;
