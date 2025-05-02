// FormularioPago.jsx
import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Header from '../Components/HeaderCliente';
import Footer from '../Components/Footer';

import '../Styles/FormularioPago.css';
import HeaderCliente from '../Components/HeaderCliente';

const FormularioPago = () => {
    const [formData, setFormData] = useState({
        nombreTitular: '',
        numeroTarjeta: '',
        fechaExpiracion: '',
        cvv: '',
        email: '',
        monto: '',
        concepto: '',
        metodoPago: 'tarjeta' // tarjeta, paypal, transferencia
    });

    const [errors, setErrors] = useState({});
    const [showReceipt, setShowReceipt] = useState(false);
    const [transaccionId, setTransaccionId] = useState('');
    const comprobantePrintRef = useRef();

    // Manejador para imprimir el comprobante
    const handlePrint = useReactToPrint({
        content: () => comprobantePrintRef.current,
        documentTitle: 'Comprobante_de_Pago',
        onAfterPrint: () => console.log('Impresión completada')
    });

    // Genera un ID de transacción único
    const generarTransaccionId = () => {
        const timestamp = new Date().getTime();
        const random = Math.floor(Math.random() * 10000);
        return `TRX-${timestamp}-${random}`;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Validaciones específicas
        if (name === 'numeroTarjeta') {
            // Eliminar cualquier caracter que no sea número
            const sanitizedValue = value.replace(/\D/g, '');
            // Limitar a 16 dígitos
            const truncated = sanitizedValue.slice(0, 16);
            // Formatear con espacios cada 4 dígitos
            const formatted = truncated.replace(/(\d{4})(?=\d)/g, '$1 ').trim();

            setFormData({ ...formData, [name]: formatted });
        } else if (name === 'fechaExpiracion') {
            // Formato MM/AA
            const sanitized = value.replace(/\D/g, '');
            if (sanitized.length <= 2) {
                setFormData({ ...formData, [name]: sanitized });
            } else {
                const month = sanitized.slice(0, 2);
                const year = sanitized.slice(2, 4);
                setFormData({ ...formData, [name]: `${month}/${year}` });
            }
        } else if (name === 'cvv') {
            // Limitar a 3-4 dígitos
            const sanitized = value.replace(/\D/g, '');
            setFormData({ ...formData, [name]: sanitized.slice(0, 4) });
        } else if (name === 'monto') {
            // Solo permitir números y un punto decimal
            const sanitized = value.replace(/[^\d.]/g, '');
            // Asegurar que solo haya un punto decimal
            const match = sanitized.match(/^(\d*\.?\d{0,2})/);
            if (match) {
                setFormData({ ...formData, [name]: match[0] });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Validar según el método de pago
        if (formData.metodoPago === 'tarjeta') {
            if (!formData.nombreTitular.trim()) {
                newErrors.nombreTitular = 'El nombre del titular es requerido';
            }

            if (!formData.numeroTarjeta || formData.numeroTarjeta.replace(/\s/g, '').length !== 16) {
                newErrors.numeroTarjeta = 'Número de tarjeta inválido';
            }

            if (!formData.fechaExpiracion || !/^\d{2}\/\d{2}$/.test(formData.fechaExpiracion)) {
                newErrors.fechaExpiracion = 'Fecha inválida (MM/AA)';
            } else {
                // Validar que la fecha no esté expirada
                const [month, year] = formData.fechaExpiracion.split('/');
                const expiryDate = new Date(`20${year}`, month - 1);
                const currentDate = new Date();

                if (expiryDate < currentDate) {
                    newErrors.fechaExpiracion = 'La tarjeta ha expirado';
                }
            }

            if (!formData.cvv || formData.cvv.length < 3) {
                newErrors.cvv = 'CVV inválido';
            }
        }

        // Validaciones comunes para todos los métodos de pago
        if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Email inválido';
        }

        if (!formData.monto || parseFloat(formData.monto) <= 0) {
            newErrors.monto = 'Ingrese un monto válido';
        }

        if (!formData.concepto.trim()) {
            newErrors.concepto = 'El concepto es requerido';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Simular procesamiento de pago
            setTimeout(() => {
                const newTransaccionId = generarTransaccionId();
                setTransaccionId(newTransaccionId);
                setShowReceipt(true);
            }, 1500);
        } else {
            console.log('Formulario con errores');
        }
    };

    const formatDate = (date) => {
        return new Intl.DateTimeFormat('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).format(date);
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: 'MXN'
        }).format(amount);
    };

    const getLastFourDigits = () => {
        if (!formData.numeroTarjeta) return '****';
        const digits = formData.numeroTarjeta.replace(/\s/g, '');
        return digits.slice(-4);
    };

    const renderFormaPago = () => {
        switch (formData.metodoPago) {
            case 'tarjeta':
                return (
                    <>
                        <div className="field">
                            <label className="label">Nombre del Titular</label>
                            <div className="control has-icons-left">
                                <input
                                    className={`input ${errors.nombreTitular ? 'is-danger' : ''}`}
                                    type="text"
                                    name="nombreTitular"
                                    value={formData.nombreTitular}
                                    onChange={handleChange}
                                    placeholder="Nombre como aparece en la tarjeta"
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                            </div>
                            {errors.nombreTitular && <p className="help is-danger">{errors.nombreTitular}</p>}
                        </div>

                        <div className="field">
                            <label className="label">Número de Tarjeta</label>
                            <div className="control has-icons-left has-icons-right">
                                <input
                                    className={`input ${errors.numeroTarjeta ? 'is-danger' : ''}`}
                                    type="text"
                                    name="numeroTarjeta"
                                    value={formData.numeroTarjeta}
                                    onChange={handleChange}
                                    placeholder="XXXX XXXX XXXX XXXX"
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-credit-card"></i>
                                </span>
                                <span className="icon is-small is-right">
                                    {formData.numeroTarjeta.startsWith('4') && <i className="fab fa-cc-visa"></i>}
                                    {formData.numeroTarjeta.startsWith('5') && <i className="fab fa-cc-mastercard"></i>}
                                    {formData.numeroTarjeta.startsWith('3') && <i className="fab fa-cc-amex"></i>}
                                </span>
                            </div>
                            {errors.numeroTarjeta && <p className="help is-danger">{errors.numeroTarjeta}</p>}
                        </div>

                        <div className="columns">
                            <div className="column">
                                <div className="field">
                                    <label className="label">Fecha de Expiración</label>
                                    <div className="control has-icons-left">
                                        <input
                                            className={`input ${errors.fechaExpiracion ? 'is-danger' : ''}`}
                                            type="text"
                                            name="fechaExpiracion"
                                            value={formData.fechaExpiracion}
                                            onChange={handleChange}
                                            placeholder="MM/AA"
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-calendar"></i>
                                        </span>
                                    </div>
                                    {errors.fechaExpiracion && <p className="help is-danger">{errors.fechaExpiracion}</p>}
                                </div>
                            </div>

                            <div className="column">
                                <div className="field">
                                    <label className="label">CVV</label>
                                    <div className="control has-icons-left">
                                        <input
                                            className={`input ${errors.cvv ? 'is-danger' : ''}`}
                                            type="password"
                                            name="cvv"
                                            value={formData.cvv}
                                            onChange={handleChange}
                                            placeholder="123"
                                            maxLength="4"
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-lock"></i>
                                        </span>
                                    </div>
                                    {errors.cvv && <p className="help is-danger">{errors.cvv}</p>}
                                </div>
                            </div>
                        </div>
                    </>
                );

            case 'paypal':
                return (
                    <div className="paypal-info">
                        <div className="notification is-info">
                            <p>
                                <i className="fab fa-paypal"></i> Serás redirigido a PayPal para completar el pago seguro.
                            </p>
                        </div>
                    </div>
                );

            case 'transferencia':
                return (
                    <div className="bank-info">
                        <div className="notification is-info">
                            <h4 className="title is-5">Información Bancaria</h4>
                            <p><strong>Banco:</strong> Banco Nacional</p>
                            <p><strong>Titular:</strong> Empresa S.A. de C.V.</p>
                            <p><strong>Cuenta:</strong> 012 345 6789</p>
                            <p><strong>CLABE:</strong> 0123 4567 8901 2345 67</p>
                            <p className="mt-3">Una vez realizada la transferencia, por favor ingrese el concepto
                                y el correo donde recibirá su comprobante.</p>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div>
            <HeaderCliente/>
                
        <div className="formulario-pago-container">
            {!showReceipt ? (
                <div className="form-section">
                    <h1 className="title has-text-centered">Formulario de Pago</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <label className="label">Método de Pago</label>
                            <div className="control has-icons-left">
                                <div className="select is-fullwidth">
                                    <select
                                        name="metodoPago"
                                        value={formData.metodoPago}
                                        onChange={handleChange}
                                    >
                                        <option value="tarjeta">Tarjeta de Crédito/Débito</option>
                                        <option value="paypal">PayPal</option>
                                        <option value="transferencia">Transferencia Bancaria</option>
                                    </select>
                                </div>
                                <span className="icon is-small is-left">
                                    <i className="fas fa-money-bill"></i>
                                </span>
                            </div>
                        </div>

                        {renderFormaPago()}

                        <div className="field">
                            <label className="label">Correo Electrónico</label>
                            <div className="control has-icons-left">
                                <input
                                    className={`input ${errors.email ? 'is-danger' : ''}`}
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="ejemplo@correo.com"
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>
                            </div>
                            {errors.email && <p className="help is-danger">{errors.email}</p>}
                        </div>

                        <div className="field">
                            <label className="label">Monto</label>
                            <div className="control has-icons-left">
                                <input
                                    className={`input ${errors.monto ? 'is-danger' : ''}`}
                                    type="text"
                                    name="monto"
                                    value={formData.monto}
                                    onChange={handleChange}
                                    placeholder="0.00"
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-dollar-sign"></i>
                                </span>
                            </div>
                            {errors.monto && <p className="help is-danger">{errors.monto}</p>}
                        </div>

                        <div className="field">
                            <label className="label">Concepto</label>
                            <div className="control has-icons-left">
                                <input
                                    className={`input ${errors.concepto ? 'is-danger' : ''}`}
                                    type="text"
                                    name="concepto"
                                    value={formData.concepto}
                                    onChange={handleChange}
                                    placeholder="Pago de servicio"
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-file-invoice"></i>
                                </span>
                            </div>
                            {errors.concepto && <p className="help is-danger">{errors.concepto}</p>}
                        </div>

                        <div className="field mt-5">
                            <div className="control">
                                <button
                                    className="button is-primary is-fullwidth"
                                    type="submit"
                                >
                                    <span className="icon">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    <span>Procesar Pago</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="receipt-container">
                    <div ref={comprobantePrintRef} className="comprobante">
                        <div className="comprobante-header">
                            <div className="logo">
                                <i className="fas fa-store fa-2x"></i>
                                <h2>EMPRESA S.A.</h2>
                            </div>
                            <h3 className="title is-4">Comprobante de Pago</h3>
                        </div>

                        <div className="comprobante-detalles">
                            <div className="info-row">
                                <span className="label"><i className="fas fa-receipt"></i> No. Transacción:</span>
                                <span className="value">{transaccionId}</span>
                            </div>

                            <div className="info-row">
                                <span className="label"><i className="fas fa-calendar-alt"></i> Fecha:</span>
                                <span className="value">{formatDate(new Date())}</span>
                            </div>

                            <div className="info-row">
                                <span className="label"><i className="fas fa-user"></i> Cliente:</span>
                                <span className="value">{formData.nombreTitular || 'Cliente General'}</span>
                            </div>

                            <div className="info-row">
                                <span className="label"><i className="fas fa-envelope"></i> Email:</span>
                                <span className="value">{formData.email}</span>
                            </div>

                            <div className="info-row">
                                <span className="label"><i className="fas fa-credit-card"></i> Método de Pago:</span>
                                <span className="value">
                                    {formData.metodoPago === 'tarjeta' && `Tarjeta terminación **** ${getLastFourDigits()}`}
                                    {formData.metodoPago === 'paypal' && 'PayPal'}
                                    {formData.metodoPago === 'transferencia' && 'Transferencia Bancaria'}
                                </span>
                            </div>

                            <div className="info-row">
                                <span className="label"><i className="fas fa-file-invoice"></i> Concepto:</span>
                                <span className="value">{formData.concepto}</span>
                            </div>

                            <div className="comprobante-monto">
                                <div className="info-row total">
                                    <span className="label"><i className="fas fa-money-bill"></i> Total:</span>
                                    <span className="value">{formatCurrency(parseFloat(formData.monto))}</span>
                                </div>
                            </div>
                        </div>

                        <div className="comprobante-footer">
                            <p>Gracias por su preferencia</p>
                            <p className="small">Este comprobante es válido como recibo de pago</p>
                            <div className="qr-code">
                                <i className="fas fa-qrcode fa-5x"></i>
                            </div>
                        </div>
                    </div>

                    <div className="receipt-actions">
                        <button className="button is-info" onClick={handlePrint}>
                            <span className="icon">
                                <i className="fas fa-print"></i>
                            </span>
                            <span>Imprimir Comprobante</span>
                        </button>

                        <button
                            className="button is-success"
                            onClick={() => {
                                setShowReceipt(false);
                                setFormData({
                                    nombreTitular: '',
                                    numeroTarjeta: '',
                                    fechaExpiracion: '',
                                    cvv: '',
                                    email: '',
                                    monto: '',
                                    concepto: '',
                                    metodoPago: 'tarjeta'
                                });
                            }}
                        >
                            <span className="icon">
                                <i className="fas fa-redo"></i>
                            </span>
                            <span>Nuevo Pago</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
            <Footer/>
        </div>
    );
};

export default FormularioPago;