import React, { useState, useEffect } from "react";
import '../App.css';

function Carouseldos() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidesData = [
    {
      title: "Seguridad Pamplona",
      imageUrl: "https://i.postimg.cc/5N02fnMg/policia.jpg",
      description: "Por la seguridad de los comerciantes de Pamplona y los municipios de la provincia",
    },
    {
      title: "Combo Chicken dos",
      imageUrl: "https://i.postimg.cc/wMWxhsDD/combo-chicken-2.jpg",
      description: "El Combo de Chicken Bros dos viene con 6 porciones de pechuga 🍗 1 porción de papas a la francesa, gaseosa 400 ml. y una porción de ensalada de la casa 😋",
    },
    {
      title: "Donaton",
      imageUrl: "https://i.postimg.cc/Yqsq0YrH/donaton.jpg",
      description: "Únete a la DONATÓN DE ÚTILES ESCOLARES Y UNIFORMES así entre todos ayudamos a que niñas y niños puedan continuar su educación",
    },
    {
      title: "Hamburguesa Garfield",
      imageUrl: "https://i.postimg.cc/wxFBKnn3/hamburguesa-garfield.jpg",
      description: "¿Ya probaste la hamburguesa doble 🍔? que viene con doble carne 🥩🥩 madurada, queso 🧀 chedar, tocineta 🥓 alemana, cebolla 🧅 grille, vegetales 🥗 frescos, salsas de la casa y por si fuera poco papitas a la francesa 🍟",
    },
    {
      title: "Linea de Atención Express",
      imageUrl: "https://i.imgur.com/XIbD9ht.jpg",
      description: "Linea de atención Express Cameral",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slidesData.length); // Mostrar un elemento a la vez
    }, 15000);

    return () => clearInterval(interval);
  }, [slidesData.length]);

  return (
    <div id="carouselExampleCaptions" className="absolute" data-te-carousel-init data-te-ride="carousel">
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {slidesData.slice(activeIndex, activeIndex + 1).map((slide, index) => (
          <div
            key={index}
            className={`relative float-left w-full transition-transform duration-600ms ease-in-out motion-reduce:transition-none`}
            data-te-carousel-active
            data-te-carousel-item
            id="slide-carousel"
          >
            <img
              src={slide.imageUrl}
              className="block w-full"
              id="imagen-carousel"
              alt="..."
            />
            <div className="absolute bottom-5 py-5 text-center text-white md:block" id="descripcion">
              {/* <h5 className="text-sm my-1">{slide.title}</h5> */}
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Carouseldos };
