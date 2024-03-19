import React, { useState, useEffect } from "react";
import '../App.css';

function Carouseldos() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidesData = [
    {
      title: "Atención Marzo",
      imageUrl: "https://i.postimg.cc/7LSSCSpq/429814325-422889160113068-7573488658192329086-n.jpg",
      description: "Apreciado matriculado, ¡NO TE QUEDES SIN RENOVAR TU REGISTRO! ⏰ \n Atención especial los días sábado 02, 09, 16 y 23 de marzo.",
    },
    {
      title: "Afiliados 1",
      imageUrl: "https://i.postimg.cc/nL9sKpdR/afiliados1.jpg",
      description: "¡Únete a nuestra Unidad de Afiliados! ❤️🤍💛✨",
    },
    {
      title: "Afiliados 2",
      imageUrl: "https://i.postimg.cc/k4r2fzzn/afiliados2.jpg",
      description: "¡Únete a nuestra Unidad de Afiliados! ❤️🤍💛✨",
    },
    {
      title: "Festival Dulce Y Colacion",
      imageUrl: "https://i.postimg.cc/gknBYpCN/432709739-7608814752474037-5043492032141945310-n.jpg",
      description: "Feria del Dulce y la Colación Pamplonesa en sus 41 años de historia",
    },
      {
      title: "Entidades Sin Animo de Lucro",
      imageUrl: "https://i.postimg.cc/QtrB7rhZ/432465615-7611498202205692-5210682753751623298-n.jpg",
      description: "Renueve su registro de entidad sin animo de lucro antes del 01 de abril 2024.",
    },
    {
      title: "Renovacion El Rincon de la Abuela",
      imageUrl: "https://i.postimg.cc/G2TXtBbR/429854248-422522710149713-3250834957752774051-n.jpg",
      description: "Nury Arciniegas Caceres de El Rincon de la Abuela  ya renovó su matrícula Mercantil. No olvides que el plazo vence el 1 de abril.",
    },
    {
      title: "Feria Artesanal",
      imageUrl: "https://i.postimg.cc/xdp1nJ1C/432998252-7608925555796290-1071116971021957680-n.jpg",
      description: "Feria Artesanal Cariongo 'Cara de Oro' apoya a nuestros empresarios y emprendedores",
    },
    {
      title: "Renovacion RNT",
      imageUrl: "https://i.postimg.cc/yxfpV0Zx/432480790-7611521285536717-7716585335228694244-n.jpg",
      description: "Renueva tu Registro Nacional de Turismo #RNT antes del 01 de abril sin costo y en línea ingresando a https://rnt.confecamaras.co",
    },
    {
      title: "Semana Santa",
      imageUrl: "https://i.postimg.cc/fTpqyFZZ/432773176-7608788029143376-4179017954771599391-n.jpg",
      description: "Invitacion a vivir la semana santa en Pamplona, Norte de Santander",
    },
    {
      title: "Jornadas de atencion",
      imageUrl: "https://i.postimg.cc/KjThTY9y/Whats-App-Image-2024-03-19-at-3-01-38-PM.jpg",
      description: "Jornadas de atencion mes de marzo",
    },
    {
      title: "Renovacion RUP",
      imageUrl: "https://i.postimg.cc/5y15ZyK0/432447159-7611501412205371-8072102347269526709-n.jpg",
      description: "Renueva el Registro Unico de Proponente antes del 5 de abril",
    },
    // {
    //   title: "Galeria Cafe",
    //   imageUrl: "",
    //   description: "",
    // },
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
