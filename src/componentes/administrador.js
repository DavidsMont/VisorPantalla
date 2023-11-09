import React, { useState } from "react";
import { Modal } from "./modal";
import './administrador.css';

function Admin({ onChangeVideoUrl }) {
  const [newVideoUrl, setNewVideoUrl] = useState("");
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const toggleAdmin = () => {
    setIsAdminOpen(!isAdminOpen);
  };

  const handleChangeVideo = () => {
    // Lógica para cambiar la URL del video
    // Puedes colocar la llamada a onChangeVideoUrl aquí si es necesario
    localStorage.setItem("videoUrl", newVideoUrl);
    onChangeVideoUrl(newVideoUrl);

    // Cierra el modal después de realizar los cambios
    setIsAdminOpen(false);
  };

  return (
    <div>
      {isAdminOpen ? (
        <Modal isOpen={isAdminOpen} onRequestClose={toggleAdmin}>
          <div className="">
            <div className="pru">
              <div>
                <label className="text-center">
                  Cambio de enlace video
                </label>
              </div>  
              <div className="cambio-enlace-video">
                <input
                    type="text"
                    value={newVideoUrl}
                    placeholder="Ingresa la URL del nuevo video"
                    onChange={(e) => setNewVideoUrl(e.target.value)}
                  />
                  <button onClick={handleChangeVideo}>Cambiar Video</button>
              </div>
            </div>

            <div className="contenedor">
              <label>
                Cambio enlace de corousel
              </label>
              <div className="cambios-carousel">
                <div>
                  <label>Url Imagen</label>
                  <input type="text" placeholder="Ingrese enlace imagen 1"/>
                  <label>Descripción</label>
                  <input type="text" placeholder="Descripción imagen 1"/>
                </div>
                <div>
                  <label>Url Imagen</label>
                  <input type="text" placeholder="Ingrese enlace imagen 2"/>
                  <label>Descripción</label>
                  <input type="text" placeholder="Descripción imagen 2"/>
                </div>
                <div>
                  <label>Url Imagen</label>
                  <input type="text" placeholder="Ingrese enlace imagen 3"/>
                  <label>Descripción</label>
                  <input type="text" placeholder="Descripción imagen 3"/>
                </div>
              </div>
            </div>

            <div className="contenedor">
              <label>
                Cambio mensajes banner
              </label>
            <div className="cambio-mensajes">
              <label>Mensajes</label>
              <input type="text" placeholder="Ingrese mensaje 1"/>
              <input type="text" placeholder="Ingrese mensaje 2"/>
              <input type="text" placeholder="Ingrese mensaje 3"/>
              <input type="text" placeholder="Ingrese mensaje 4"/>
              <input type="text" placeholder="Ingrese mensaje 5"/>
              <input type="text" placeholder="Ingrese mensaje 6"/>
            </div>
            </div>
          </div>
        </Modal>
      ) : (
        <button className="admin-button" onClick={toggleAdmin}>
          Abrir Administrador
        </button>
      )}
    </div>
  );
}

export { Admin };
