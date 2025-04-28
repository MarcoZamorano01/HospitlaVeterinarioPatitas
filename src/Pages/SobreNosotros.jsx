import React from "react";
import Footer from "../Components/Footer"; 
import '../Styles/General.css'
import HeaderCliente from "../Components/HeaderCliente";

const SobreNosotros = () => {
    return (
        <div>
            <HeaderCliente />
            <div className="sobre-nosotros">
                <h1 className="title">Sobre Nosotros</h1>

                <section className="introduccion">
                    <p>
                        En la actualidad, las clínicas veterinarias enfrentan el reto de gestionar de manera eficiente y centralizada la información médica de sus pacientes, las agendas de atención, la venta de medicamentos y la relación con los tutores de mascotas. La falta de digitalización o el uso de herramientas desconectadas puede generar errores, pérdidas de información o retrasos en la atención, afectando tanto la calidad del servicio como la experiencia del cliente.
                    </p>
                    <p>
                        Conscientes de esta necesidad, se ha desarrollado un proyecto tecnológico cuyo objetivo principal es optimizar la administración de las clínicas veterinarias mediante una plataforma digital integral, moderna y fácil de usar.
                    </p>
                </section>

                <section className="descripcion-proyecto">
                    <h2 className="title">Descripción del Proyecto</h2>
                    <p>
                        El presente proyecto consiste en el desarrollo de una aplicación web para la gestión de clínicas veterinarias, que permitirá registrar nuevas mascotas, almacenar y consultar historiales médicos, programar consultas, emitir recordatorios de vacunas y gestionar la venta de medicamentos. Los profesionales veterinarios podrán modificar diagnósticos y tratamientos, registrar nuevos controles, y generar reportes de atención personalizados.
                    </p>
                    <p>
                        Asimismo, se habilitarán funciones administrativas como la emisión de comprobantes de citas, la gestión de inventario de medicamentos y la generación de reportes médicos y financieros. La solución está diseñada para adaptarse tanto a clínicas pequeñas como medianas, con distintos perfiles de usuario según su rol (veterinarios, recepcionistas, administradores y tutores de mascotas).
                    </p>
                </section>

                <section className="objetivos">
                    <h2 className="title">Objetivos del Proyecto</h2>

                    <h3 className="subtitulo">Objetivo General</h3>
                    <p>
                        Desarrollar un sistema digital integral que optimice los procesos operativos, médicos y administrativos en clínicas veterinarias, mejorando la atención al cliente y la eficiencia del personal.
                    </p>

                    <h3 className="subtitulo">Objetivos Específicos</h3>
                    <ul>
                        <li>Facilitar el registro y gestión de pacientes veterinarios (mascotas) y sus tutores.</li>
                        <li>Permitir la programación, seguimiento y modificación de consultas médicas.</li>
                        <li>Registrar diagnósticos, tratamientos y crear historiales médicos por paciente.</li>
                        <li>Automatizar el envío de recordatorios para vacunaciones y revisiones periódicas.</li>
                        <li>Gestionar la venta de medicamentos y su inventario.</li>
                        <li>Emitir comprobantes y reportes personalizados según consultas, ventas o citas.</li>
                        <li>Proporcionar a los administradores herramientas de control y análisis operativo.</li>
                    </ul>
                </section>

            </div>
            <Footer />
        </div>
    );
};

export default SobreNosotros;
