// DetallesMascota.jsx
import React, { useState } from 'react';
import '../Styles/DetalleMascota.css';

const DetallesMascota = () => {
    const [mascota, setMascota] = useState({
        nombre: 'Max',
        especie: 'Gato',
        raza: 'Delmo',
        edad: '2 años',
        tutor: 'Carlos',
        diagnosticos: '',
        tratamientos: '',
        recordatorio: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMascota(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRegistrar = () => {
        console.log('Mascota registrada:', mascota);
        // Aquí iría la lógica para guardar los datos
    };

    const handleCancelar = () => {
        console.log('Operación cancelada');
        // Aquí iría la lógica para cancelar
    };

    return (
        <div className="detalle-mascota-container">
            <div className="detalle-header">
                <h2>Detalle de mascota</h2>
            </div>

            <div className="detalle-content">
                <div className="field-row">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={mascota.nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="field-row">
                    <label>Especie:</label>
                    <input
                        type="text"
                        name="especie"
                        value={mascota.especie}
                        onChange={handleChange}
                    />
                </div>

                <div className="field-row">
                    <label>Raza:</label>
                    <input
                        type="text"
                        name="raza"
                        value={mascota.raza}
                        onChange={handleChange}
                    />
                </div>

                <div className="field-row">
                    <label>Edad:</label>
                    <input
                        type="text"
                        name="edad"
                        value={mascota.edad}
                        onChange={handleChange}
                    />
                </div>

                <div className="field-row">
                    <label>Tutor:</label>
                    <input
                        type="text"
                        name="tutor"
                        value={mascota.tutor}
                        onChange={handleChange}
                    />
                </div>

                <div className="mascota-imagen">
                    <img src="/src/images/Mascotas/Mascota1.png" alt="Foto de mascota" />
                </div>

                <div className="field-row">
                    <label>diagnósticos:</label>
                    <input
                        type="text"
                        name="diagnosticos"
                        value={mascota.diagnosticos}
                        onChange={handleChange}
                    />
                </div>

                <div className="field-row">
                    <label>tratamientos:</label>
                    <input
                        type="text"
                        name="tratamientos"
                        value={mascota.tratamientos}
                        onChange={handleChange}
                    />
                </div>

                <div className="field-row">
                    <label>Recordatorio:</label>
                    <input
                        type="text"
                        name="recordatorio"
                        value={mascota.recordatorio}
                        onChange={handleChange}
                    />
                </div>

                <div className="actions-container">
                    <button
                        className="button is-danger is-rounded"
                        onClick={handleCancelar}
                    >
                        <span className="icon">
                            <i className="fas fa-times"></i>
                        </span>
                        <span>Cancelar</span>
                    </button>

                    <button
                        className="button is-primary is-rounded"
                        onClick={handleRegistrar}
                    >
                        <span>Registrar Tratamiento</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetallesMascota;