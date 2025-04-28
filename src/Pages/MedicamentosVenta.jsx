import React from "react";
import HeaderCliente from "../Components/HeaderCliente";
import Footer from "../Components/Footer";

const MedicamentosVenta = () => {
    // Datos de ejemplo para los medicamentos
    const medications = [
        {
            id: 1,
            name: "Aspirina",
            dose: "500mg",
            stock: 20,
            price: "$10"
        },
        {
            id: 2,
            name: "Ibuprofeno",
            dose: "400mg",
            stock: 15,
            price: "$8"
        },
        {
            id: 3,
            name: "Paracetamol",
            dose: "650mg",
            stock: 50,
            price: "$5"
        },
        {
            id: 4,
            name: "Amoxicilina",
            dose: "250mg",
            stock: 30,
            price: "$12"
        },
        {
            id: 5,
            name: "Loratadina",
            dose: "10mg",
            stock: 25,
            price: "$6"
        },
        {
            id: 6,
            name: "Omeprazol",
            dose: "20mg",
            stock: 18,
            price: "$9"
        }
    ];

    return (
        <div>
            <HeaderCliente /> {/* Importamos el Header */}
            <section className="section">
                <div className="container">
                    <h1 className="title has-text-centered">Medicamentos en Venta</h1>
                    <p className="mensaje">Aquí están los medicamentos disponibles para compra.</p>
                    <br />
                    <div className="columns is-multiline is-centered">
                        {medications.map((medication) => (
                            <div key={medication.id} className="column is-one-third">
                                <div className="info-card">
                                    <h2 className="title is-4 has-text-centered">{medication.name}</h2>
                                    <div className="content">
                                        <p><strong>Dosis:</strong> {medication.dose}</p>
                                        <p><strong>Stock:</strong> {medication.stock} unidades</p>
                                        <p><strong>Precio:</strong> {medication.price}</p>
                                    </div>
                                    <div className="card-footer">
                                        <button className="button is-fullwidth">Comprar</button>
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

export default MedicamentosVenta;
