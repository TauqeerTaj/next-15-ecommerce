"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
//Interface
import { SliderContentList, SliderTypes } from "@/constant/sliderInterface";
import { PayLoadType } from "@/reduxToolkit/wishListSlice";
//Images
import Rating from "@/assests/rating.png";
import Heart from "@/assests/heart.png";
import View from "@/assests/view.png";
import Trash from "@/assests/delete.png";
//Styles
import Styles from "@/styles/slider.module.css";

const SliderComponent: React.FC<SliderContentList> = ({
  sliderCard,
  setting,
  trash,
}) => {
  const router = useRouter();
  const settings = {
    dots: false,
    infinite: true,
    arrows: setting?.arrows,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const rows = 4;
  const itemsPerRow = Math.ceil(sliderCard.length / rows);

  const splitRows = [];
  for (let i = 0; i < rows; i++) {
    splitRows.push(sliderCard.slice(i * itemsPerRow, (i + 1) * itemsPerRow));
  }

  const ShowDetailPage = (id: string) => {
    router.push(`/productDetails/${id}`);
  };

  return (
    <Box p={3} className={Styles.mainSlider}>
      <Slider {...settings}>
        {setting.rows === "double"
          ? splitRows.map((row, rowIndex) => (
              <Box key={rowIndex}>
                {row.map((data: SliderTypes | PayLoadType) => (
                  <Box
                    className={Styles.productItem}
                    key={data?.productHeading}
                    mb={5}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#F5F5F5",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "50px 5px",
                        marginBottom: "20px",
                        position: "relative",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`data:image/png;base64,${data.image as string}`}
                        alt="product"
                        className={Styles.sliderImg}
                      />
                      {data.discount && (
                        <Box className={Styles.discountOffer}>
                          {data.discount}
                        </Box>
                      )}
                      <Box className={Styles.productIcon}>
                        <Box className={Styles.multiImg}>
                          <Image
                            src={Heart}
                            alt="favourite-icon"
                            width={20}
                            height={20}
                            layout="responsive"
                            style={{ padding: 5 }}
                          />
                        </Box>
                        <Box className={Styles.img}>
                          <Image
                            src={View}
                            alt="View-icon"
                            width={20}
                            height={20}
                            layout="responsive"
                            style={{ padding: 5 }}
                            onClick={() => ShowDetailPage(data._id)}
                          />
                        </Box>
                      </Box>
                      <Box className={Styles.addToCart}>Add To Cart</Box>
                    </Box>
                    <Box className={Styles.productHeading}>
                      {data.productHeading}
                    </Box>
                    <Box className={Styles.productPrice}>
                      {data.productPrice} <s>{data.priceOff}</s>
                    </Box>
                    <Box className={Styles.productRating}>
                      {[1, 2, 3, 4, 5].map((item) => (
                        <Image
                          src={Rating}
                          alt="rating"
                          key={item}
                          style={{ marginRight: 5 }}
                        />
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            ))
          : sliderCard.map((data: SliderTypes | PayLoadType) => (
              <>
                <Box
                  className={Styles.productItem}
                  key={data.productHeading}
                  mb={5}
                >
                  <Box
                    sx={{
                      backgroundColor: "#F5F5F5",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "50px 5px",
                      position: "relative",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`data:image/png;base64,${data.image as string}`}
                      alt="product"
                      className={Styles.sliderImg}
                    />
                    {data.discount && (
                      <Box className={Styles.discountOffer}>
                        {data.discount}
                      </Box>
                    )}
                    <Box className={Styles.productIcon}>
                      {trash ? (
                        <Image
                          src={Trash}
                          alt="trash-icon"
                          width={40}
                          height={40}
                        />
                      ) : (
                        <>
                          <Image
                            src={Heart}
                            alt="favourite-icon"
                            width={20}
                            height={20}
                            layout="responsive"
                            style={{ padding: 5 }}
                          />
                          <Image
                            src={View}
                            alt="View-icon"
                            width={20}
                            height={20}
                            layout="responsive"
                            style={{ padding: 5 }}
                            onClick={() => ShowDetailPage(data._id)}
                          />
                        </>
                      )}
                    </Box>
                    <Box className={Styles.addToCart}>Add To Cart</Box>
                  </Box>
                  <Box className={Styles.productHeading}>
                    {data.productHeading}
                  </Box>
                  <Box className={Styles.productPrice}>
                    {data.productPrice} <s>{data.priceOff}</s>
                  </Box>
                  <Box className={Styles.productRating}>
                    {[1, 2, 3, 4, 5].map((item) => (
                      <Image
                        src={Rating}
                        alt="rating"
                        key={item}
                        style={{ marginRight: 5 }}
                      />
                    ))}
                  </Box>
                </Box>
              </>
            ))}
      </Slider>
      {setting.button === "small" ? (
        <Button className={Styles.viewButtonSmall}>View All</Button>
      ) : setting.button === "large" ? (
        <Button className={Styles.viewButton}>View All Products</Button>
      ) : (
        ""
      )}
    </Box>
  );
};
export default SliderComponent;
