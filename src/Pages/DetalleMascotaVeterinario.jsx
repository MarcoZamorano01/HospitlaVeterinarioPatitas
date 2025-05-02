import React, { useState, useEffect } from 'react';
import { db } from '../Data/Firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Styles/DetalleMascota.css';
import PantallaCarga from '../Components/PantallaCarga';

const DetallesMascotaVeterinario = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [mascota, setMascota] = useState(null);

    useEffect(() => {
        if (!id) {
            console.error("ID de la mascota no proporcionado.");
            return;
        }

        const obtenerMascota = async () => {
            try {
                const docRef = doc(db, "Mascotas", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log("Datos de la mascota:", docSnap.data());
                    setMascota(docSnap.data());
                } else {
                    console.log("No se encontró el documento de la mascota con el ID:", id);
                }
            } catch (error) {
                console.error("Error al obtener los datos de la mascota:", error);
            }
        };

        obtenerMascota();
    }, [id]);

    const handleCancelar = () => {
        navigate('/mascotasPendientes');
    };

    if (!mascota) {
        return (
            <div>
                <Header/>
                <PantallaCarga/>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Header />
            <br />
            <div className="detalle-mascota-container">
                <div className="detalle-header">
                    <h2>Detalle de Mascota</h2>
                </div>

                <div className="detalle-content">
                    <div className="text-column">
                        <p><strong>Nombre:</strong> {mascota.NombreMascota}</p>
                        <p><strong>Especie:</strong> {mascota.Especie}</p>
                        <p><strong>Raza:</strong> {mascota.Raza}</p>
                        <p><strong>Edad:</strong> {mascota.Edad} años</p>
                        <p><strong>Tutor:</strong> {mascota.Tutor}</p>
                        <p><strong>Diagnóstico:</strong> {mascota.Diagnostico || "No disponible"}</p>
                        <p><strong>Tratamientos:</strong> {mascota.Tratamientos || "No disponible"}</p>
                        <p><strong>Recordatorios:</strong> {mascota.Recordatorios || "No disponible"}</p>
                        <p><strong>Fecha de Ingreso:</strong> {mascota.FechaIngreso ? new Date(mascota.FechaIngreso.seconds * 1000).toLocaleDateString() : "No disponible"}</p>
                        <p><strong>Fecha de Salida:</strong> {mascota.FechaSalida ? new Date(mascota.FechaSalida.seconds * 1000).toLocaleDateString() : "No disponible"}</p>
                        <p><strong>Estado:</strong> {mascota.Estado || "No disponible"}</p>
                    </div>

                    <div className="mascota-imagen">
                        <img src={mascota.Foto || "/src/images/default-mascota.png"} alt="Foto de mascota" />
                    </div>
                </div>

                <div className="actions-container">
                    <button className="button is-danger is-rounded" onClick={handleCancelar}>
                        <span className="icon">
                            <i className="fas fa-times"></i>
                        </span>
                        <span>Cancelar</span>
                    </button>
                </div>
            </div>
            <br />
            <Footer />
        </div>
    );
};

export default DetallesMascotaVeterinario;
