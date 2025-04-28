import React from "react";
import Footer from "../Components/Footer"; 
import '../Styles/General.css'
import HeaderCliente from "../Components/HeaderCliente";

const TratamientosCliente = () => {
    return (
        <div>
            <HeaderCliente />
            <div className="sobre-nosotros">
                <section className="tratamientos">
                    <h2 className="title">Tratamientos en Veterinaria Patitas</h2>
                    <p>
                        En Veterinaria Patitas ofrecemos una amplia gama de tratamientos médicos y preventivos para garantizar la salud y el bienestar de tus mascotas. Nuestro equipo de profesionales altamente capacitados trabaja con pasión y compromiso, utilizando tecnología de última generación y protocolos clínicos actualizados.
                    </p>
                    <p>
                        <strong>Medicina Preventiva:</strong> Aplicamos vacunas esenciales y opcionales según la especie, edad y estilo de vida del animal. Ofrecemos planes de vacunación personalizados, desparasitaciones internas y externas, chequeos generales periódicos y control de peso. También proporcionamos microchip de identificación para mayor seguridad.
                    </p>
                    <p>
                        <strong>Medicina Interna:</strong> Diagnosticamos y tratamos enfermedades crónicas y agudas en órganos como el hígado, riñones, pulmones y corazón. Realizamos análisis clínicos de laboratorio (hematología, bioquímica, pruebas específicas), ecografías, radiografías y electrocardiogramas. 
                    </p>
                    <p>
                        <strong>Cirugías:</strong> Contamos con quirófano completamente equipado para realizar cirugías generales (como esterilización/castración), cirugías de tejidos blandos, ortopedia, extracción de tumores, limpiezas dentales bajo anestesia y otros procedimientos quirúrgicos más complejos con anestesia inhalada y monitoreo constante.
                    </p>
                    <p>
                        <strong>Dermatología:</strong> Tratamos enfermedades de la piel como alergias, infecciones bacterianas, fúngicas, sarna y dermatitis. Ofrecemos pruebas de alergia, raspados cutáneos y tratamientos dermatológicos personalizados.
                    </p>
                    <p>
                        <strong>Odontología Veterinaria:</strong> Realizamos limpieza dental profesional, extracción de piezas dentales dañadas, tratamientos de gingivitis y asesoramiento en higiene bucal para mascotas.
                    </p>
                    <p>
                        <strong>Hospitalización:</strong> Para casos que requieren observación o tratamiento continuo, contamos con una unidad de hospitalización equipada, con monitoreo constante, oxigenoterapia y soporte nutricional.
                    </p>
                    <p>
                        <strong>Atención de Emergencias:</strong> Brindamos atención de urgencias durante el horario de clínica para casos como accidentes, envenenamientos, convulsiones, partos complicados, entre otros. Nuestro equipo está entrenado para actuar con rapidez y eficacia.
                    </p>
                    <p>
                        <strong>Rehabilitación y fisioterapia:</strong> Contamos con sesiones de rehabilitación postquirúrgica, fisioterapia para recuperación muscular, terapias con láser y ultrasonido para mejorar la calidad de vida de mascotas con movilidad reducida.
                    </p>
                    <p>
                        En Veterinaria Patitas, cada tratamiento se basa en una evaluación clínica rigurosa, adaptada a las necesidades individuales de cada paciente, garantizando una atención compasiva, responsable y profesional.
                    </p>
                </section>

            </div>
            <Footer />
        </div>
    );
};

export default TratamientosCliente;
