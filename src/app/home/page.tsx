import dynamic from "next/dynamic";
import Grid from "@mui/material/Grid";
import { Box, Divider } from "@mui/material";
//Components
import ListCategory from "@/components/categories/ListCategory";
import CarouselComponent from "@/components/CarouselComponent";
import SliderHeader from "@/components/SliderHeader";
import SliderComponent from "@/components/ImageSlider/ProductSlider";
import CategorySlider from "@/components/ImageSlider/CategorySlider";
import CategoryBanner from "@/components/CategoryBanner";
import NewArrival from "@/components/NewArrival";
import ServiceComponent from "@/components/common/ServiceComponent";
//Dynamic load Components
const Slider = dynamic(() => import("@/components/ImageSlider/ProductSlider"), {
  loading: () => <p>Products Loading...</p>,
  ssr: true,
});
//Constant
import {
  sliderCard,
  sliderCategoryCard,
  bestSellingCard,
  ourProducts,
} from "@/constant/sliderContent";

const Home = async () => {
  const [services, productsList] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services.json`).then((res) =>
      res.json()
    ),
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/home/api`).then((res) =>
      res.json()
    ),
  ]);

  console.log("getApiData:", services, productsList);

  return (
    <>
      <Box sx={{ mx: 3 }}>
        <Grid container spacing={2}>
          {/* Top Section */}
          <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
            <ListCategory />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 9, lg: 9, xl: 9 }}
            sx={{
              pt: { xs: 3, sm: 3, md: 6, lg: 6, xl: 6 },
              pl: { xs: 0, sm: 0, md: 8, lg: 8, xl: 8 },
            }}
          >
            <CarouselComponent />
          </Grid>
          {/* Flash Sales */}
          <Grid size={12} sx={{ mt: 6 }}>
            <SliderHeader identity="Today's" heading="Flash Sales" />
          </Grid>
          <Grid size={12} textAlign="center">
            <Slider
              setting={sliderCard.setting}
              sliderCard={productsList?.flashProducts}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 3 }} />
        {/* Category Slider */}
        <Grid size={12} sx={{ mt: 6 }}>
          <SliderHeader identity="Categories" heading="Browse By Category" />
        </Grid>
        <Grid
          size={12}
          textAlign="center"
          sx={{ mt: { xs: 3, sm: 3, md: 0, lg: 0, xl: 0 } }}
        >
          <CategorySlider sliderCategoryCard={sliderCategoryCard} />
        </Grid>
        <Divider sx={{ my: 3 }} />
        {/* Month Slider */}
        <Grid size={12} sx={{ mt: 6 }}>
          <SliderHeader identity="This Month" heading="Best Selling Products" />
        </Grid>
        <Grid
          size={12}
          textAlign="center"
          sx={{ mt: { xs: 4, sm: 4, md: 0, lg: 0, xl: 0 } }}
        >
          <SliderComponent
            sliderCard={bestSellingCard.content}
            setting={bestSellingCard.setting}
          />
        </Grid>
        {/* Category Banner */}
        <Grid size={12} sx={{ mt: 6 }}>
          <CategoryBanner />
        </Grid>
        {/* Our Products Slider */}
        <Grid size={12} sx={{ mt: 6 }}>
          <SliderHeader
            identity="Our Products"
            heading="Explore Our Products"
          />
        </Grid>
        <Grid
          size={12}
          textAlign="center"
          sx={{ mt: { xs: 3, sm: 3, md: 0, lg: 0, xl: 0 } }}
        >
          <SliderComponent
            setting={ourProducts.setting}
            sliderCard={productsList.products}
          />
        </Grid>
        {/* New Arrival */}
        <Grid size={12} sx={{ mt: 6 }}>
          <SliderHeader identity="Featured" heading="New Arrival" />
        </Grid>
        <Grid size={12}>
          <NewArrival />
        </Grid>
        {/* Service Section */}
        <Grid size={4} sx={{ mt: 6 }}>
          <ServiceComponent services={services} />
        </Grid>
      </Box>
    </>
  );
};

export default Home;
