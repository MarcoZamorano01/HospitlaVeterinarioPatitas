import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../Data/Firebase'; // Asegúrate de tener Firestore importado
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'; // Para guardar en Firestore
import '../Styles/Formularios.css';

const FormularioRegistroUsuario = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        contraseña: '',  // Se mantiene para crear el usuario, pero no se guarda en Firestore
        rol: '',          // Ahora solo se pueden elegir tres roles
        estado: 'Activo', // Valor por defecto
    });

    const [errorMsg, setErrorMsg] = useState('');
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación básica
        if (!formData.nombre || !formData.email || !formData.rol) {
            setErrorMsg('Por favor, llena todos los campos.');
            return;
        }

        setErrorMsg('');
        setSubmitButtonDisabled(true);

        try {
            // Crear usuario en Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.contraseña);
            const user = userCredential.user;

            // Actualizar nombre de usuario en Firebase Authentication
            await updateProfile(user, {
                displayName: `${formData.nombre} ${formData.apellido}`,
            });

            // Guardar los datos en Firestore con los nombres de campo correctos (primera letra en mayúscula)
            await setDoc(doc(db, 'Usuarios', user.uid), {
                Nombre: formData.nombre,           // Cambié "nombre" por "Nombre"
                Apellido: formData.apellido,       // Cambié "apellido" por "Apellido"
                Telefono: formData.telefono,       // Cambié "telefono" por "Telefono"
                Correo: formData.email,            // Cambié "correo" por "Correo"
                Rol: formData.rol,                 // Cambié "rol" por "Rol"
                Estado: formData.estado,           // Cambié "estado" por "Estado"
            });

            // Mostrar mensaje de éxito
            alert(`¡Tu cuenta ha sido registrada exitosamente como ${formData.rol}!`);

            setSubmitButtonDisabled(false);
            navigate('/login'); // Redirigir a la página de login
        } catch (error) {
            setSubmitButtonDisabled(false);
            setErrorMsg(error.message);
        }
    };

    const handleCancel = () => {
        setFormData({
            nombre: '',
            apellido: '',
            telefono: '',
            email: '',
            contraseña: '',
            rol: '',
            estado: 'Activo',
        });
        console.log('Registro cancelado');
    };

    return (
        <div>
            <div className="registration-form-container">
                <div className="registration-form-card">
                    <div className="form-header">
                        <h1>Registrar Usuario</h1>
                    </div>

                    <form onSubmit={handleSubmit} className="form-content">
                        <div className="form-field">
                            <label htmlFor="nombre">Nombre:</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="apellido">Apellido:</label>
                            <input
                                type="text"
                                id="apellido"
                                name="apellido"
                                value={formData.apellido}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="telefono">Teléfono:</label>
                            <input
                                type="tel"
                                id="telefono"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="contraseña">Contraseña:</label>
                            <input
                                type="password"
                                id="contraseña"
                                name="contraseña"
                                value={formData.contraseña}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="rol">Rol:</label>
                            <select
                                id="rol"
                                name="rol"
                                value={formData.rol}
                                onChange={handleChange}
                            >
                                <option value="">Selecciona un rol</option>
                                <option value="Cliente">Cliente</option>
                                <option value="Administrador">Administrador</option>
                                <option value="Veterinario">Veterinario</option>
                            </select>
                        </div>

                        <div className="form-field">
                            <label htmlFor="estado">Estado:</label>
                            <select
                                id="estado"
                                name="estado"
                                value={formData.estado}
                                onChange={handleChange}
                            >
                                <option value="Activo">Activo</option>
                                <option value="Desactivado">Desactivado</option>
                            </select>
                        </div>

                        {errorMsg && <p className="error">{errorMsg}</p>}

                        <div className="form-actions">
                            <button
                                type="button"
                                className="button is-danger cancel-button"
                                onClick={handleCancel}
                            >
                                <span>Cancelar</span>
                                <span className="icon">
                                    <i className="fas fa-times"></i>
                                </span>
                            </button>

                            <button
                                type="submit"
                                className="button is-primary save-button"
                                disabled={submitButtonDisabled}
                            >
                                <span>Guardar</span>
                                <span className="icon">
                                    <i className="fas fa-save"></i>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormularioRegistroUsuario;
