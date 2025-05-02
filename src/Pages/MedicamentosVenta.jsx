import React, { useState, useEffect } from "react";
import { db } from "../Data/Firebase";  // Asegúrate de tener la configuración de Firebase
import { collection, query, onSnapshot } from "firebase/firestore"; // Importa las funciones necesarias de Firestore
import HeaderCliente from "../Components/HeaderCliente";
import Footer from "../Components/Footer";
import PantallaCarga from "../Components/PantallaCarga";
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const MedicamentosVenta = () => {
    const [medications, setMedications] = useState([]); // Estado para almacenar los medicamentos
    const navigate = useNavigate(); // Hook para navegar a otra pantalla

    // Función para obtener medicamentos de Firestore
    useEffect(() => {
        // Referencia a la colección 'Medicamentos' en Firestore
        const q = query(collection(db, "Medicamentos"));
        
        // Suscripción a los cambios en la colección 'Medicamentos'
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const medicamentosArray = [];
            querySnapshot.forEach((doc) => {
                const medicamentoData = doc.data();
                medicamentosArray.push({
                    id: doc.id,
                    name: medicamentoData.NombreMedicamento,
                    dose: `${medicamentoData.Dosis}mg`, // Asegúrate de que Dosis esté en formato numérico en Firestore
                    stock: medicamentoData.Stock,
                    price: `${medicamentoData.Precio}Bs`, // Asume que el precio está guardado como número en Firestore
                });
            });
            setMedications(medicamentosArray); // Actualiza el estado con los datos obtenidos
        });

        // Limpiar la suscripción al desmontar el componente
        return () => unsubscribe();
    }, []);  // El efecto solo se ejecutará una vez al montar el componente

    // Función para manejar el clic en el botón "Comprar"
    const handleCompra = (medicationId) => {
        // Redirige al usuario a la pantalla de compra, pasando el id del medicamento
        navigate(`/pagos`);
    };

    return (
        <div>
            <HeaderCliente />
            <PantallaCarga/>
            <section className="section">
                <div className="container">
                    <h1 className="title has-text-centered">Medicamentos en Venta</h1>
                    <p className="mensaje">Aquí están los medicamentos disponibles para compra.</p>
                    <br />
                    <div className="columns is-multiline is-centered">
                        {medications.length === 0 ? (
                            <p className="has-text-centered">No hay medicamentos disponibles en este momento.</p>
                        ) : (
                            medications.map((medication) => (
                                <div key={medication.id} className="column is-one-third">
                                    <div className="info-card">
                                        <h2 className="title is-4 has-text-centered">{medication.name}</h2>
                                        <div className="content">
                                            <p><strong>Dosis:</strong> {medication.dose}</p>
                                            <p><strong>Stock:</strong> {medication.stock} unidades</p>
                                            <p><strong>Precio:</strong> {medication.price}</p>
                                        </div>
                                        <div className="card-footer">
                                            <button 
                                                className="button is-fullwidth" 
                                                onClick={() => handleCompra(medication.id)} // Llama a la función al hacer clic
                                            >
                                                Comprar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
            <Footer /> {/* Importamos el Footer */}
        </div>
    );
};

export default MedicamentosVenta;
