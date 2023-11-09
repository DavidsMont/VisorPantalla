import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { Header } from "./componentes/header";
import { Footer } from "./componentes/footer";
import { Carouseldos } from "./componentes/carouselprueba";
import { Videos } from "./componentes/videos";
import { Admin } from "./componentes/administrador";

function App() {
  const initialVideoUrl = localStorage.getItem("videoUrl");

  const [videoUrl, setVideoUrl] = useState(
    initialVideoUrl ||
      "https://www.youtube.com/embed/videoseries?si=Xs2Z1ebYm9RkBpnM&amp;list=PLaZmxwblqOt7n4Y2NfTQmBskPy_bHf_jM&autoplay=1"
  );

  return (
    <>
      <Router>
        <Header />
        <div className="layout">
          <div className="video-container">
            <Routes>
              <Route path="/videos" element={<Videos videoUrl={videoUrl} />} />
            </Routes>
          </div>
          <div className="carousel">
            <Carouseldos />
          </div>
        </div>
        <Footer />
      </Router>


      <Admin onChangeVideoUrl={setVideoUrl} />
    </>
  );
}

export default App;
