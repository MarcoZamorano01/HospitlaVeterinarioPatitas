import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Listas.css';
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const UsuarioList = () => {
    const navigate = useNavigate();

    // Datos de ejemplo para usuarios
    const usuarios = [
        { id: 1, nombre: 'Juan', apellido: 'Pérez', rol: 'Administrador', estado: 'Activo' },
        { id: 2, nombre: 'Ana', apellido: 'Gómez', rol: 'Usuario', estado: 'Inactivo' },
        { id: 3, nombre: 'Carlos', apellido: 'Ramírez', rol: 'Moderador', estado: 'Activo' },
        { id: 4, nombre: 'Laura', apellido: 'López', rol: 'Usuario', estado: 'Activo' },
    ];

    // Redirige al formulario para agregar nuevo usuario
    const handleAgregarUsuario = () => {
        navigate('/registrarUsuario'); // Cambia la ruta según tu estructura
    };

    return (
        <div>
            <Header />
            <div className="pet-management-container">
                <h1 className="title">Gestión de usuarios</h1>

                <div className="top-buttons">
                    <button className="button is-primary" onClick={handleAgregarUsuario}>
                        <span>Agregar nuevo usuario</span>
                    </button>
                </div>

                <div className="table-container">
                    <table className="table is-fullwidth">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
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
                                    <td>{usuario.rol}</td>
                                    <td>{usuario.estado}</td>
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

export default UsuarioList;
