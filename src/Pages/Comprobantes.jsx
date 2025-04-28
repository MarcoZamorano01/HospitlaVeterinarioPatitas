import React from 'react';
import '../Styles/Comprobantes.css';

const Comprobante = () => {
    return (
        <div className="pet-confirmation-container">
            <div className="confirmation-card">
                <div className="confirmation-header">
                    <h1>Comprobante de Mascota</h1>
                </div>

                <div className="confirmation-content">
                    <div className="confirmation-icons">
                        <div className="check-icon">
                            <span className="icon">
                                <i className="fas fa-check"></i>
                            </span>
                        </div>
                        
                    </div>

                    <div className="confirmation-details">
                        <div className="detail-row">
                            <div className="detail-label">Nombre de mascota</div>
                            <div className="detail-value">Firulais</div>
                        </div>
                        <div className="detail-row">
                            <div className="detail-label">Tutor</div>
                            <div className="detail-value">Carlos Ortiz</div>
                        </div>
                        <div className="detail-row">
                            <div className="detail-label">Fecha</div>
                            <div className="detail-value">20/05/2025</div>
                        </div>
                        <div className="detail-row">
                            <div className="detail-label">Hora</div>
                            <div className="detail-value">16:45</div>
                        </div>
                        <div className="detail-row">
                            <div className="detail-label">Diagnóstico</div>
                            <div className="detail-value">Problemas respiratorios</div>
                        </div>
                        <div className="detail-row">
                            <div className="detail-label">Tratamiento</div>
                            <div className="detail-value">Descanso</div>
                        </div>
                        <div className="detail-row">
                            <div className="detail-label">Próxima visita</div>
                            <div className="detail-value">21/05/2025</div>
                        </div>
                    </div>

                    <div className="confirmation-actions">
                        <button className="button is-danger cancel-button">
                            <span>Cancelar</span>
                            <span className="icon">
                                <i className="fas fa-times"></i>
                            </span>
                        </button>
                        <button className="button is-primary download-button">
                            <span>Descargar PDF</span>
                            <span className="icon">
                                <i className="fas fa-file-pdf"></i>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comprobante;