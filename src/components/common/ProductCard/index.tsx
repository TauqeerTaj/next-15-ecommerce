import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { Box } from "@mui/material";
//Toast
import { ToastContainer, toast } from "react-toastify";
//Images
import Heart from "@/assests/heart.png";
import View from "@/assests/view.png";
import Trash from "@/assests/delete.png";
//Components
import LoadingComponent from "@/components/LoadingBar";
//Interface
import { PayLoadType } from "@/reduxToolkit/wishListSlice";
//Styles
import Styles from "@/styles/slider.module.css";

type ProductCardProps = {
  data: PayLoadType;
  trash: boolean;
};

const ProductCard: React.FC<ProductCardProps> = (data, trash) => {
  const router = useRouter();

  const [loading, setLoading] = React.useState(false);

  const ShowDetailPage = (id: string) => {
    router.push({
      pathname: "/productDetails/[productId]",
      query: { productId: id },
    });
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      const response = await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/deleteWishList/${id}`
      );
      console.log("delete response:", response);
      toast.success(response.data.message);
      setLoading(false);
      router.reload();
    } catch (error) {
      setLoading(false);
      console.error("Error deleting product:", error);
    }
  };

  return (
    <Box className={Styles.productItem} key={data.data.productHeading} mb={5}>
      {loading && <LoadingComponent />}
      <ToastContainer />
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
          src={`data:image/png;base64,${data.data.image as string}`}
          alt="product"
          className={Styles.sliderImg}
        />
        {data.data.discount && (
          <Box className={Styles.discountOffer}>{data.data.discount}</Box>
        )}
        <Box className={Styles.productIcon}>
          {trash ? (
            <Image
              src={Trash}
              alt="trash-icon"
              width={40}
              height={40}
              onClick={() => handleDelete(data.data._id)}
            />
          ) : (
            <>
              <Image src={Heart} alt="favourite-icon" width={40} height={40} />
              <Image
                src={View}
                alt="View-icon"
                width={40}
                height={40}
                onClick={() => ShowDetailPage(data.data._id)}
              />
            </>
          )}
        </Box>
        <Box className={Styles.addToCart}>Add To Cart</Box>
      </Box>
      <Box className={Styles.productHeading}>{data.data.productHeading}</Box>
      <Box className={Styles.productPrice}>
        {data.data.productPrice} <s>{data.data.priceOff}</s>
      </Box>
    </Box>
  );
};

export default ProductCard;
