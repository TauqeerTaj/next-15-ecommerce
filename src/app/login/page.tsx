import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BackgroundImage from "@/assests/auth-bg.png";
import LoginForm from "@/components/forms/LoginForm";

import Styles from "@/styles/authForm.module.css";

const Login = () => {
  return (
    <Box component="section" className={Styles.signup}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box>
            <Image
              src={BackgroundImage}
              alt="background-image"
              className={Styles.bgImage}
              width={600} // apne image size ke hisab se adjust karo
              height={600}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <LoginForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
