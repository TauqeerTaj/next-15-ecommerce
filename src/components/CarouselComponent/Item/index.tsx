import Image from "next/image";
import { Paper } from "@mui/material";
//Styles
import Styles from '@/styles/carousel.module.css'

export default function Item(props: { item: unknown }) {
  return (
    <Paper className={Styles.carouselImg}>
      <Image
        src={props.item as HTMLImageElement}
        alt="carousel-image"
        style={{width:'100%', objectFit: "inherit"}}
        height={400}
      />
    </Paper>
  );
}
