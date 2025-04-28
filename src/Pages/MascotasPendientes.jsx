import React from "react";
import Mascota1 from '../Images/Mascotas/Mascota1.png';
import Mascota2 from '../Images/Mascotas/Mascota2.png';
import Mascota3 from '../Images/Mascotas/Mascota3.png';
import Mascota4 from '../Images/Mascotas/Mascota4.png';
import Mascota5 from '../Images/Mascotas/Mascota5.png';
import Mascota6 from '../Images/Mascotas/Mascota6.png';

import Header from "../Components/Header";
import Footer from "../Components/Footer";

const PetCards = () => {
    // Datos de ejemplo para las mascotas
    const pets = [
        {
            id: 1,
            name: "Max",
            image: Mascota1,
            time: "10:30 AM",
            reason: "Revisión general"
        },
        {
            id: 2,
            name: "Bella",
            image: Mascota2,
            time: "11:00 AM",
            reason: "Vacunación"
        },
        {
            id: 3,
            name: "Charlie",
            image: Mascota3,
            time: "12:00 PM",
            reason: "Emergencia"
        },
        {
            id: 4,
            name: "Manchas",
            image: Mascota4,
            time: "12:00 PM",
            reason: "Emergencia"
        },
        {
            id: 5,
            name: "Poli",
            image: Mascota5,
            time: "12:00 PM",
            reason: "Emergencia"
        },
        {
            id: 6,
            name: "Esponjoso",
            image: Mascota6,
            time: "12:00 PM",
            reason: "Emergencia"
        }
    ];
    return (
        <div>
            <Header /> {/* Importamos el Header */}
            <section className="section">
                <div className="container">
                    <h1 className="title has-text-centered">Mascotas en la Veterinaria</h1>
                    <p className="mensaje">Aquí están las mascotas que nos visitan hoy.</p>
                    <br />
                    <div className="columns is-multiline is-centered">
                        {pets.map((pet) => (
                            <div key={pet.id} className="column is-one-third">
                                <div className="info-card">
                                    <h2 className="title is-4 has-text-centered">{pet.name}</h2>
                                    <div className="card-image">
                                        <figure className="image">
                                            <img src={pet.image} alt={pet.name} />
                                        </figure>
                                    </div>
                                    <div className="content">
                                        <p><strong>Hora:</strong> {pet.time}</p>
                                        <p><strong>Motivo:</strong> {pet.reason}</p>
                                    </div>
                                    <div className="card-footer">
                                        <button className="button is-fullwidth">Ver Ficha</button>
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

export default PetCards;
