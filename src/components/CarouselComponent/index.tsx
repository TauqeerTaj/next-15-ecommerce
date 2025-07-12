"use client";

import Carousel from "react-material-ui-carousel";
import Item from "@/components/CarouselComponent/Item";
import CarouselImage from "@/assests/carousel-1.png";

export default function CarouselComponent() {
  const items = [
    {
      image: CarouselImage,
    },
    {
      image: CarouselImage,
    },
  ];

  return (
    <Carousel>
      {items?.map((img, i) => (
        <Item key={i} item={img?.image} />
      ))}
    </Carousel>
  );
}
