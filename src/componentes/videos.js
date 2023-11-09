import React from "react";

function Videos({ videoUrl }) {
  console.log(videoUrl);
  return (
    <div className="w-full" id="contenedor-video">
      <iframe
        className="absolute top-0 left-0 w-full h-full video"
        src={videoUrl} // Usa videoUrl como prop
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export { Videos };
