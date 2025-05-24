import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BackgroundImage from "@/assests/auth-bg.png";
import SignupForm from "@/components/forms/signup";

//styles
import Styles from "@/styles/authForm.module.css";

const Signup = () => {
  return (
    <>
      <Box component="section" className={Styles.signup}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <Box>
              {" "}
              <Image
                src={BackgroundImage}
                alt="background-image"
                className={Styles.bgImage}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <SignupForm />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Signup;
