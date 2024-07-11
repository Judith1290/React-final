// // import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
// import background from '../assets/img/logo1.jpg'

const Bootstrap = () => {

    const images = [
        { src: "/img/imagen.jpeg", alt: "SAMSUNG" },
        { src: "/img/imagen1.jpeg", alt: "HUAWEI" },
        { src: "/img/imagen2.jpeg", alt: "IPHONE" },
         ]
    return (
        <div>
           
            <Carousel data-theme="white" className='Carrusel'>
                {images.map((imagen, index) => (
                    <Carousel.Item key={index} className='CarruselItems'>
                        <img
                            className="d-block w-100"
                            src={imagen.src}
                            alt={imagen.alt}
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>

        </div>
    
    );
}

export default Bootstrap

