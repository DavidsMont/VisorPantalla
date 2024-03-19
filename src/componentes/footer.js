
import React, { useEffect, useState } from "react";
import gsap from "gsap";

function Footer() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentMessage, setCurrentMessage] = useState("");

  const messages = [
    "Agendate con la Cámara de Comercio y consulta los beneficios de estar formalizado en www.camarapamplona.org.co",
    "Recuerda nuestro horario de atención 📆 Lunes a Viernes  🕗  de 8:00am - 12:00pm    y    de 2:00pm - 6:00pm",
    "Nuestros asesores estan aquí para brindarte la información que necesitas",
    "La generación de oportunidades de emprendimiento, fortalecimiento y aceleración empresarial de la región, son nuestro compromiso",
    "Siguenos en nuestras redes sociales 👍 Facebook, Instagram y Twitter como # Camara de Comercio de Pamplona",
    "Prestador de servicios turisticos y/o alojamientos, no olvides alimentar día a día tu Tarjeta de Registro de Alojamiento",
    "Recuerda nuestros canales de contacto: ccpamplona@camarapamplona.org.co, teléfonos (60)75680993 - 75684696 - 75682047 y WhatsApp Registral: 3209458221",
    "Recuerda que el término de ley para atender tus tramites es de QUINCE (15) DÍAS HÁBILES",
    "No olvides calificar el servicio prestado por nuestro personal, pregunta con nuestras Asesoras como hacerlo",
    "Además de tu registro en Cámara de Comercio, adquieres responsabilidades tributarias en la DIAN y en la Alcaldía Municipal  (Impuesto de Industria y Comercio).",
    "Si tienes actividades de alto impacto, debes gestionar los permisos necesarios ante las autoridades locales (Planeación municipal, sayco y acinpro, bomberos, entre otros).",
    "Recuerda que puedes realizar tu matrícula mercantil mediante la Ventanilla Unica Empresarial VUE, aplica solo para Pamplona."
  ];

  useEffect(() => {
    const mensajeElement = document.querySelector(".message-text");
    const footerContainer = document.querySelector(".mensajes");
    const mensajeWidth = mensajeElement.offsetWidth;
    const containerWidth = footerContainer.offsetWidth;

    const updateMessage = () => {
      const message = messages[currentMessageIndex];
      setCurrentMessage(message);

      gsap.set(mensajeElement, { x: containerWidth + mensajeWidth });
      gsap.to(mensajeElement, {
        x: -mensajeWidth,
        duration: containerWidth * 0.03,
        ease: "linear",
        onComplete: () => {
          setCurrentMessageIndex((currentMessageIndex + 1) % messages.length);
        },
      });
    };

    updateMessage();
  }, [currentMessageIndex]);

  return (
    <footer className="container-fluid">
      <div className="banner-container">
        <div className="col-md-1 banner">
          <img
            src="https://i.imgur.com/j9uTn4R.png"
            id="camarito"
            alt="camarito"
          />
        </div>
        <div className="col-md-11 mensajes">
          <p className="message-text">{currentMessage}</p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
