import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
//Images
import Playstation from "@/assests/playstation.png";
import WomenArrival from "@/assests/womenArrival.png";
import NewArrivalSpeaker from "@/assests/newArrivalSpeaker.png";
import NewArrialPerfume from "@/assests/newArrivalPerfume.png";
//Styles
import Styles from "@/styles/newArrival.module.css";

const NewArrival: React.FC = () => {
  return (
    <Box mt={6} className={Styles.newArrival}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
          <Box position="relative">
            <Image src={Playstation} alt="product" />
            <Box className={Styles.playStationContent}>
              <Typography variant="h6">Play Station 5</Typography>
              <Typography>
                Black and White version of the PS5 coming out on sale.
              </Typography>
              <Link href="#">Shop Now</Link>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
          <Box position="relative">
            <Image src={WomenArrival} alt="product" />
            <Box className={Styles.playStationContent}>
              <Typography variant="h6">Women’s Collections</Typography>
              <Typography>
                Featured woman collections that give you another vibe.
              </Typography>
              <Link href="#">Shop Now</Link>
            </Box>
          </Box>
          <Grid container spacing={2} mt={2}>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
              <Box position="relative">
                <Image
                  src={NewArrivalSpeaker}
                  alt="product"
                  style={{ height: "100%" }}
                />
                <Box className={Styles.playStationContent}>
                  <Typography variant="h6">Speakers</Typography>
                  <Typography>Amazon wireless speakers</Typography>
                  <Link href="#">Shop Now</Link>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
              <Box position="relative">
                <Image
                  src={NewArrialPerfume}
                  alt="product"
                  style={{ height: "100%" }}
                />
                <Box className={Styles.playStationContent}>
                  <Typography variant="h6">Perfume</Typography>
                  <Typography>GUCCI INTENSE OUD EDP</Typography>
                  <Link href="#">Shop Now</Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewArrival;
