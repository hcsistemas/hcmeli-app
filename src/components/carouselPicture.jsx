'use client'

import { useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';

export default function CarouselPicture(props) {
  const { pictures } = props.product;
  
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-cont">
      {pictures.map((item) => (
        <Carousel.Item key={item.id} interval={4000}>
          <Image src={item.url} alt={item.id}/>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
