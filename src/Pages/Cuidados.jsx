import React from "react";
import Footer from "../Components/Footer"; 
import '../Styles/General.css'
import HeaderCliente from "../Components/HeaderCliente";

const Cuidados = () => {
    return (
        <div>
            <HeaderCliente />
            <div className="sobre-nosotros">

                <section className="cuidados">
                    <h2 className="title">Cuidados Esenciales según el Tipo de Mascota</h2>

                    <h3>🐶 Perros</h3>
                    <p>
                        Los perros requieren atención diaria, tanto física como emocional. Es fundamental brindarles paseos frecuentes, alimentación balanceada según su edad y raza, vacunación al día, desparasitación y chequeos médicos periódicos. El entrenamiento y la socialización temprana también son claves para su bienestar emocional. El baño debe ser regular, con productos adecuados, y su espacio debe mantenerse limpio y seguro.
                    </p>

                    <h3>🐱 Gatos</h3>
                    <p>
                        Los gatos son animales independientes pero también necesitan cuidados específicos. Deben tener acceso a una alimentación rica en proteínas, arena sanitaria limpia y enriquecimiento ambiental con rascadores y juguetes. Es vital mantener al día sus vacunas, desparasitación y controles veterinarios. El cepillado regular y la atención a su comportamiento (como cambios en el apetito o el uso del arenero) son importantes para detectar problemas a tiempo.
                    </p>

                    <h3>🐦 Aves</h3>
                    <p>
                        Las aves como loros, canarios o periquitos necesitan jaulas amplias, limpias y seguras, con perchas de distintos tamaños, juguetes y acceso constante a agua fresca. La alimentación debe ser variada, incluyendo semillas, frutas y verduras (según especie). También necesitan tiempo de vuelo fuera de la jaula (en un ambiente seguro) y contacto social. El control veterinario es clave, ya que ocultan enfermedades hasta estar graves.
                    </p>

                    <h3>🐰 Conejos</h3>
                    <p>
                        Los conejos requieren un hábitat limpio y espacioso, con heno fresco siempre disponible, vegetales frescos y pellets de calidad. Es importante permitirles ejercicio diario fuera de la jaula. Necesitan revisiones dentales regulares, ya que sus dientes crecen constantemente. También deben vacunarse (según la región) y vivir en un ambiente tranquilo y seguro, lejos de temperaturas extremas y depredadores.
                    </p>

                    <h3>🦎 Reptiles</h3>
                    <p>
                        Las mascotas exóticas como tortugas, iguanas o geckos necesitan cuidados especializados. Cada especie requiere un hábitat con temperatura, humedad e iluminación controladas (luz UVB para muchos reptiles). La alimentación varía según si son herbívoros, insectívoros u omnívoros. Es fundamental informarse sobre las necesidades específicas de cada reptil y contar con asesoría veterinaria especializada en fauna exótica.
                    </p>

                    <p>
                        En Veterinaria Patitas, asesoramos a cada tutor sobre los cuidados específicos que su mascota necesita. Creemos que una mascota bien cuidada es una mascota feliz y saludable, por eso nos comprometemos a acompañarte en cada etapa de su vida.
                    </p>
                </section>

            </div>
            <Footer />
        </div>
    );
};

export default Cuidados;
