import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Reloj } from "./reloj";
import { Modal } from "./modal";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  return (
    <header className="grid md:grid-cols-3" id="contenedor-header">
      <div className="flex">
        <nav className="flex enlaces">
          <ul className="lista col-2">
            <li className="enlace">
              <Link to="/videos">Ver Videos</Link>
            </li>
            {/* <li>
              
              <Link to="#" onClick={openModal}>
                Administrar Videos
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
      <div className="grid md:grid-cols-3" id="info-empresa">
        <div className="md:w-1/3" id="contenedor-logos">
          <img
            src="https://i.imgur.com/k9aBoGR.png"
            id="logo-empresa-ochenta"
            alt="imagen-ochenta-años"
          />
          <img
            src="https://i.imgur.com/Ta3jMHa.png"
            id="logo-empresa"
            alt="logo-empresa"
          />
        </div>
        <div className="w-2/4" id="contenedor-nombre">
          <h2 className="text-xl font-semibold text-center md:text-2xl empresa">
            Cámara de Comercio de Pamplona
          </h2>
          <img
            className="mx-auto my-4 img-fondo-titulo"
            src="https://i.imgur.com/9LRqRNQ.png"
            alt="fondo-titulo"
          />
        </div>
        <div className="reloj">
          <Reloj />
        </div>
      </div>

      {/* Renderiza el componente Modal cuando isModalOpen es verdadero */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
          {/* Contenido del modal */}
        </Modal>
      )}
    </header>
  );
}

export { Header };
