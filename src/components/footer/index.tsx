"use client";
import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
//Images
import SendImage from "@/assests/send.png";
import PlayStoreImage from "@/assests/playstore.png";
import FacebookImage from "@/assests/facebook.png";
import TwitterImage from "@/assests/twitter.png";
import InstaImage from "@/assests/insta.png";
import LinkedinImage from "@/assests/linkedin.png";

//Styles
import Styles from "@/styles/footer.module.css";

const Footer = () => {
  return (
    <Box
      component="section"
      sx={{ p: 4, backgroundColor: "#000" }}
      className={Styles.footer}
    >
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
          <Typography
            style={{
              color: "#fff",
              fontFamily: "Inter, sans-serif",
              fontWeight: "bold",
              fontSize: "24px",
              marginBottom: "10px",
            }}
          >
            Exclusive
          </Typography>
          <Stack direction="column" spacing={1}>
            <Typography
              style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Subscribe
            </Typography>
            <Typography style={{ color: "#fff", marginBottom: "10px" }}>
              Get 10% off your first order
            </Typography>
            <Typography component="div" style={{ color: "#fff" }}>
              <FormControl>
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Enter Your email"
                  className={Styles.emailInput}
                  onChange={() => {}}
                  style={{
                    border: "1px solid #fff",
                    borderRadius: 5,
                    outline: "none",
                    color: "#fff",
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" onClick={() => {}}>
                        <Image
                          src={SendImage}
                          width={20}
                          height={20}
                          alt="send-icon"
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Typography>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2, xl: 2 }}>
          <Typography
            style={{
              color: "#fff",
              fontFamily: "Inter, sans-serif",
              fontWeight: "bold",
              fontSize: "24px",
              marginBottom: "10px",
            }}
          >
            Support
          </Typography>
          <Stack direction="column" spacing={1}>
            <Typography style={{ color: "#fff", marginBottom: "10px" }}>
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </Typography>
            <Typography style={{ color: "#fff", marginBottom: "10px" }}>
              exclusive@gmail.com
            </Typography>
            <Typography style={{ color: "#fff" }}>+88015-88888-9999</Typography>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2, xl: 2 }}>
          <Typography
            style={{
              color: "#fff",
              fontFamily: "Inter, sans-serif",
              fontWeight: "bold",
              fontSize: "24px",
              marginBottom: "10px",
            }}
          >
            Account
          </Typography>
          <Stack direction="column" spacing={1}>
            <Typography style={{ color: "#fff", marginBottom: "10px" }}>
              My Account
            </Typography>
            <Typography style={{ color: "#fff", marginBottom: "10px" }}>
              Login / Register
            </Typography>
            <Typography style={{ color: "#fff", marginBottom: "10px" }}>
              Cart
            </Typography>
            <Typography style={{ color: "#fff", marginBottom: "10px" }}>
              Wishlist
            </Typography>
            <Typography style={{ color: "#fff" }}>Shop</Typography>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2, xl: 2 }}>
          <Typography
            style={{
              color: "#fff",
              fontFamily: "Inter, sans-serif",
              fontWeight: "bold",
              fontSize: "24px",
              marginBottom: "10px",
            }}
          >
            Quick Link
          </Typography>
          <Stack direction="column" spacing={1}>
            <Typography style={{ color: "#fff", marginBottom: "10px" }}>
              Privacy Policy
            </Typography>
            <Typography style={{ color: "#fff", marginBottom: "10px" }}>
              Terms Of Use
            </Typography>
            <Typography style={{ color: "#fff", marginBottom: "10px" }}>
              FAQ
            </Typography>
            <Typography style={{ color: "#fff" }}>Contact</Typography>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
          <Typography
            style={{
              color: "#fff",
              fontFamily: "Inter, sans-serif",
              fontWeight: "bold",
              fontSize: "24px",
              marginBottom: "10px",
            }}
          >
            Download App
          </Typography>
          <Stack direction="column" spacing={1}>
            <Typography style={{ color: "#fff", marginBottom: "10px" }}>
              Save $3 with App New User Only
            </Typography>
            <Typography style={{ color: "#fff", marginBottom: "10px" }}>
              <Image src={PlayStoreImage} alt="playstore-icon" />
            </Typography>
            <Stack direction="row" spacing={5}>
              <Image src={FacebookImage} alt="facebook-icon" />
              <Image src={TwitterImage} alt="twitter-icon" />
              <Image src={InstaImage} alt="insta-icon" />
              <Image src={LinkedinImage} alt="linkedin-icon" />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Footer;
