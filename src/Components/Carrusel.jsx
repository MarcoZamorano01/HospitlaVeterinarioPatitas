import React from 'react';
import Slider from 'react-slick';
import '../Styles/Carrusel.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Mascota1 from '../Images/Mascotas/Mascota1.png';
import Mascota2 from '../Images/Mascotas/Mascota2.png';
import Mascota3 from '../Images/Mascotas/Mascota3.png';
import Mascota4 from '../Images/Mascotas/Mascota4.png';
import Mascota5 from '../Images/Mascotas/Mascota5.png';
import Mascota6 from '../Images/Mascotas/Mascota6.png';



const Carousel = () => {
    const settings = {
        dots: true, // Muestra los puntos de navegación
        infinite: true, // Carrusel infinito
        speed: 500, // Velocidad de transición
        slidesToShow: 1, // Número de elementos a mostrar a la vez
        slidesToScroll: 1, // Número de elementos a desplazar por vez
        autoplay: true, // Habilita el autoplay
        autoplaySpeed: 3000, // Velocidad de autoplay
    };

    const games = [
        {
            title: "Dota 2",
            image: Mascota1,
            description: "Dota 2 is a multiplayer online battle arena by Valve.",
        },
        {
            title: "The Witcher 3",
            image: Mascota2,
            description: "The Witcher 3 is a multiplayer online battle arena by Valve.",
        },
        {
            title: "RDR 2",
            image: Mascota3,
            description: "RDR 2 is a multiplayer online battle arena by Valve.",
        },
        {
            title: "PUBG Mobile",
            image: Mascota4,
            description: "PUBG 2 is a multiplayer online battle arena by Valve.",
        },
        {
            title: "Fortnite",
            image: Mascota5,
            description: "Battle royale where 100 players fight to be the last person standing.",
        },
        {
            title: "Far Cry 5",
            image: Mascota6,
            description: "Far Cry 5 is a 2018 first-person shooter game developed by Ubisoft.",
        },
    ];

    return (
        <section className="game-section">
            <h2 className="line-title">Trending Games</h2>
            <Slider {...settings}>
                {games.map((game, index) => (
                    <div key={index} className="item" style={{ backgroundImage: `url(${game.image})` }}>
                        <div className="item-desc">
                            <h3>{game.title}</h3>
                            <p>{game.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Carousel;
