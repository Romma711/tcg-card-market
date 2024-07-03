import { useState } from "react";

///Cargar imagenes al carrousel

function Carrousel (){
    const [currentIndex,SetCurrentIndex] = useState(0)
    
    const prevSlide = () => {
        SetCurrentIndex((prevIndex) => (prevIndex === 0 ?  images.lengt -1 : prevIndex -))
    }

    const nextSlide = () => {
        SetCurrentIndex((prevIndex) => (prevIndex === images.lengt ?  0 : prevIndex +))
    }

    return (
        <div className="carousel">
          <button onClick={prevSlide} className="carousel-button prev">Anterior</button>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
          <button onClick={nextSlide} className="carousel-button next">Siguiente</button>
        </div>
      );
}