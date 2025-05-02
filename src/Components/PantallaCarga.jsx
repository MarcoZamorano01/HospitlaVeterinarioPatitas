// PantallaCarga.jsx
import React, { useState, useEffect } from 'react';
import '../Styles/PantallaCarga.css';

const PantallaCarga = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulamos una carga de 3 segundos
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 3000 ms = 3 segundos

        // Limpiamos el temporizador si el componente se desmonta antes
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Cargando tus datos por favor espera...</p>
            </div>
        );
    }

    // Si no está cargando, el componente no hace nada y solo renderiza un "null"
    return null;
};

export default PantallaCarga;
