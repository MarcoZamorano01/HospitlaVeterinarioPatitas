import React, { useState, useEffect } from "react";
import { db } from '../Data/Firebase'; // Importa la configuración de Firebase
import { collection, query, onSnapshot } from 'firebase/firestore'; // Importa las funciones necesarias de Firestore
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PantallaCarga from "../Components/PantallaCarga";
import { Link } from "react-router-dom";
import '../Styles/MascotasVeterinaria.css'

const MascotasPendientes = () => {
    const [mascotas, setMascotas] = useState([]); // Estado para almacenar las mascotas desde Firestore

    // Función para obtener las mascotas de Firestore
    useEffect(() => {
        const q = query(collection(db, "Mascotas"));
        
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const mascotasArray = [];
            querySnapshot.forEach((doc) => {
                const mascotaData = doc.data();
                // Asegúrate de formatear la fecha correctamente
                const fechaIngreso = mascotaData.FechaIngreso ? new Date(mascotaData.FechaIngreso.seconds * 1000).toLocaleDateString() : 'Fecha no disponible';

                mascotasArray.push({
                    id: doc.id,
                    name: mascotaData.NombreMascota,
                    image: mascotaData.Foto, // Asumiendo que "Foto" es la URL de la imagen
                    ingreso: fechaIngreso, // Fecha de ingreso formateada
                    especie: mascotaData.Especie
                });
            });
            setMascotas(mascotasArray); // Actualiza el estado con los datos obtenidos
        });

        return () => unsubscribe();  // Limpiar la suscripción cuando el componente se desmonta
    }, []); // Este efecto solo se ejecutará una vez al montar el componente

    return (
        <div>
            <Header />
            <section className="section">
                <div className="container">
                    <h1 className="title has-text-centered">Mascotas en la Veterinaria</h1>
                    <p className="mensaje">Aquí están las mascotas que nos visitan hoy.</p>
                    <br />
                    <PantallaCarga/>
                    <div className="columns is-multiline is-centered">
                        {/* Mapear las mascotas obtenidas de Firestore */}
                        {mascotas.map((pet) => (
                            <div key={pet.id} className="column is-one-third">
                                <div className="info-card">
                                    <div className="card-content">
                                        {/* Columna izquierda: Imagen */}
                                        <div className="left-column">
                                            <img 
                                                src={pet.image || "/src/images/default-mascota.png"} 
                                                alt={pet.name} 
                                                className="pet-image"
                                            />
                                        </div>

                                        {/* Columna derecha: Información y botones */}
                                        <div className="right-column">
                                            <h2 className="title is-4">{pet.name}</h2>
                                            <p><strong>Fecha de Ingreso:</strong> {pet.ingreso}</p>
                                            <p><strong>Especie:</strong> {pet.especie}</p>
                                            <div className="card-footer">
                                                <Link to={`/detallesMascotaVeterinario/${pet.id}`}>
                                                    <button className="button is-fullwidth">Ver Ficha</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer /> {/* Importamos el Footer */}
        </div>
    );
};

export default MascotasPendientes;
