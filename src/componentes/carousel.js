// import React, { useState, useEffect } from "react";

// function Carousel() {
//   const images = [
//     "https://i.imgur.com/4IBhft1.jpg",
//     "https://i.imgur.com/WBxk9ez.jpg",
//     "https://i.imgur.com/y0sWR42.jpg",
//     "https://i.imgur.com/S7gk8wq.jpg",
//     "https://i.imgur.com/S7gk8wq.jpg",
//     "https://i.imgur.com/ll0c5pC.jpg",
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((currentSlide + 1) % images.length);
//     }, 5000); // Cambia la imagen cada 5 segundos

//     return () => clearInterval(interval);
//   }, [currentSlide, images.length]);

//   return (
//     <div className="relative w-full max-w-screen-xl mx-auto">
//       <div className="relative h-96 overflow-hidden rounded-lg">
//         <div
//           className="w-full h-full flex transition-transform duration-700 ease-in-out"
//           style={{
//             transform: `translateX(-${currentSlide * (100 / images.length)}%)`,
//           }}
//         >
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className="w-full h-full flex-shrink-0"
//               style={{
//                 width: `${100 / images.length}%`,
//               }}
//             >
//               <img
//                 src={image}
//                 alt={`Slide ${index + 1}`}
//                 className="object-cover w-full h-full"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export { Carousel };



