import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../Data/Firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import '../Styles/Login.css'; 

export default function LoginVeterinario() {
    const navigate = useNavigate();
    const [values, setValues] = useState({ email: "", pass: "" });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const Iniciar = () => {
        if (!values.email || !values.pass) {
            setErrorMsg("Datos Incompletos");
            return;
        }
        setErrorMsg("");
        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth, values.email, values.pass)
            .then(async (res) => {
                setSubmitButtonDisabled(false);
                navigate("/mascotasPendientes");
            })
            .catch((err) => {
                setSubmitButtonDisabled(false);
                setErrorMsg(err.message);
            });
    };

    return (
        <div className="flex h-screen w-full items-center justify-center bg-gray-100">
            <div className="flex w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
                {/* Left side - Blue section */}
                <div className="flex w-1/2 flex-col bg-blue-600 p-8 text-white">
                    <div className="mb-5 h-16 w-full">
                        {/* Aquí va la imagen del logo */}
                        <img
                            src="/src/images/TextoBlanco.png"
                            id="LogoLogin"
                            alt="Hospital Veterinario Patitas"
                            className="h-full object-contain"
                        />
                    </div>

                    <div className="mt-16">
                        <h1 className="text-4xl font-bold">Bienvenido</h1>
                        <h2 className="text-3xl font-bold mb-6">de Nuevo</h2>

                        <p className="text-sm">
                            Por favor ingresa tus credenciales<br />
                            para poder iniciar con el sistema.
                        </p>
                    </div>
                </div>

                {/* Right side - Gray section */}
                <div className="flex w-1/2 flex-col items-center bg-gray-200 p-8">
                    {/* User icon */}
                    <div className="mb-8 mt-4 flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-white">
                        <div className="h-20 w-20 rounded-full bg-white"></div>
                    </div>

                    {/* Login form */}
                    <div className="w-full max-w-md">
                        {/* Email input */}
                        <div className="mb-4 relative">
                            <i className="fas fa-envelope absolute top-3 right-4 text-blue-600"> Ingresa tu Email</i>
                            <input
                                type="email"
                                placeholder="Email"
                                value={values.email}
                                onChange={(e) =>
                                    setValues((prev) => ({ ...prev, email: e.target.value }))
                                }
                                className="w-full rounded-full border border-blue-600 p-2 px-4 text-center"
                            />
                        </div>

                        {/* Password input */}
                        <div className="mb-6 relative">
                            <i className="fas fa-lock absolute top-3 right-4 text-blue-600"> Ingresa tu Contraseña</i>
                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={values.pass}
                                onChange={(e) =>
                                    setValues((prev) => ({ ...prev, pass: e.target.value }))
                                }
                                className="w-full rounded-full border border-blue-600 p-2 px-4 text-center"
                            />
                        </div>

                        {/* Error message */}
                        {errorMsg && <p className="text-red-500 text-sm mb-4">{errorMsg}</p>}

                        {/* Social login buttons */}
                        <div className="mb-6 flex justify-center space-x-4">
                            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-600 text-blue-600">
                                <i className="fab fa-facebook-f"></i>
                            </button>

                            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-600 text-blue-600">
                                <i className="fab fa-google"></i>
                            </button>

                            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-600 text-blue-600">
                                <i className="fab fa-twitter"></i>
                            </button>
                        </div>

                        {/* Action buttons */}
                        <div className="flex justify-between items-center">
                            <Link to="/crearcuenta" className="text-blue-600 font-medium">
                                Crear Cuenta
                            </Link>
                            <button
                                onClick={Iniciar}
                                disabled={submitButtonDisabled}
                                className="rounded-full bg-blue-600 px-6 py-2 text-white"
                            >
                                <i className="fas fa-sign-in-alt mr-2"></i> Ingresar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
