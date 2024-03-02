import React, { useState, useEffect } from "react";
import '../App.css';

function Carouseldos() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidesData = [
    {
      title: "Atención Marzo",
      imageUrl: "https://i.postimg.cc/7LSSCSpq/429814325-422889160113068-7573488658192329086-n.jpg",
      description: "Apreciado matriculado, ¡NO TE QUEDES SIN RENOVAR TU REGISTRO! ⏰ \n La Cámara de Comercio de Pamplona, te presenta jornadas de atención especial para los días sábado 02, 09, 16 y 23 de marzo.",
    },
    {
      title: "Burguer",
      imageUrl: "https://i.postimg.cc/c1XcWMR3/430113532-421484626920188-2688360402528637461-n.jpg",
      description: "El progreso nos mueve! \n  #Empresarios  #RenovaciónMercantil #ProgresoParaTodos. 📌¿Para qué sirve el #RegistroMercantil?. 🔹Facilita los negocios. 🔹Fortalece las relaciones comerciales y crediticias. 🔹Permite tener información para generar políticas públicas. 🔹Propicia la generación de empleo y la inversión. No dejes para última hora la renovación de tu Matrícula Mercantil. ",
    },
        {
      title: "Viaje Santurban",
      imageUrl: "https://i.postimg.cc/s2vQC7JV/429976555-912666670866358-8963903214081969409-n.jpg",
      description: "¡Explora la magia subterránea de Zipaquirá con 𝑻𝒓𝒂𝒏𝒔𝒑𝒐𝒓𝒕𝒆𝒔 𝑬𝒔𝒑𝒆𝒄𝒊𝒂𝒍𝒆𝒔 𝑺𝒂𝒏𝒕𝒖𝒓𝒃𝒂𝒏 🕍⛏️ Sumérgete en las profundidades de la Catedral de Sal, una maravilla arquitectónica tallada en sal que te dejará sin palabras. 🌐✨",
    },
    {
      title: "Renovacion El Rincon de la Abuela",
      imageUrl: "https://i.postimg.cc/G2TXtBbR/429854248-422522710149713-3250834957752774051-n.jpg",
      description: "Nury Arciniegas Caceres de El Rincon de la Abuela  ya renovó su matrícula Mercantil. La renovación de la Matrícula Mercantil es la llave para que tu negocio siga creciendo. No olvides que el plazo vence el 1 de abril.",
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
