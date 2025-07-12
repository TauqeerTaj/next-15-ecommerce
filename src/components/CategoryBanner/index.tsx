import Image from "next/image";
import Grid from "@mui/material/Grid";
import { Box, Button, Typography } from "@mui/material";
//Images
import Speaker from "@/assests/jbl-speaker.png";
//Styles
import Styles from "@/styles/categoryBanner.module.css";

const CategoryBanner: React.FC = () => {
  return (
    <Box className={Styles.categoryBanner}>
      <Grid container spacing={2} alignItems="center">
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
          <Typography
            color="#00FF66"
            mb={{ xs: 2, sm: 2, md: 2, lg: 2, xl: 2 }}
          >
            categories
          </Typography>
          <Typography
            color="#fff"
            mt={3}
            mb={3}
            variant={{ xs: "h6", sm: "h5", md: "h4", lg: "h3" }}
          >
            Enhance Your Music Experience
          </Typography>
          <Box mt={{ xs: 2, sm: 2, md: 2, lg: 2, xl: 2 }}>
            <Button
              sx={{
                backgroundColor: "#00FF66",
                color: "#fff",
                textTransform: "capitalize",
                py: 1,
                px: 3,
              }}
            >
              Buy Now!
            </Button>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }} textAlign="center">
          <Image src={Speaker} alt="speaker" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CategoryBanner;
