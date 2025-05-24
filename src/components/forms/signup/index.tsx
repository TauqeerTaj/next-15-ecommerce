"use client";

import React from "react";

import Image from "next/image";
import { useSession } from "next-auth/react";
//axios
import axios from "axios";

import { useRouter } from "next/navigation";

//Interface
import { AuthInterface } from "@/constant/authInterface";

//Material UI Imports
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/material";
//Toast
import { toast } from "react-toastify";
//Images
import GoogleImage from "@/assests/google.png";
//Components
import LoadingComponent from "@/components/LoadingBar";
//Styles
import Styles from "@/styles/authForm.module.css";

const SignupForm = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const createUser = async (userData: AuthInterface) => {
    const data = await axios.post("api/auth/signup", userData);
    return data;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const result = await createUser(user);
      setLoading(false);
      toast.success(result.data.message);
      router.push("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errResp = error?.response?.data.message;
        setLoading(false);
        toast.error(errResp);
      }
    }
  };

  const loginAlert = () => {
    toast.warning("You are already logged in");
  };
  return (
    <>
      <Box textAlign="center">
        {loading && <LoadingComponent />}
        <FormControl
          component="form"
          // action={authSubmitHandler}
          className={Styles.form}
          sx={{
            md: { translate: "0px 90px" },
            lg: { translate: "0px 90px" },
            xl: { translate: "0px 90px" },
          }}
          onSubmit={submitHandler}
        >
          <Typography
            className={Styles.heading}
            variant="h4"
            style={{ textAlign: "left", marginBottom: 10 }}
          >
            Create an account
          </Typography>
          <Typography
            variant="body1"
            style={{ marginBottom: 20, textAlign: "left" }}
          >
            Enter your details below
          </Typography>
          <Stack direction="column" spacing={2}>
            <TextField
              id="name"
              label="Name"
              variant="standard"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
            <TextField
              id="email"
              label="Email"
              name="email"
              variant="standard"
              type="email"
              value={user.email}
              onChange={handleChange}
            />
            <TextField
              id="password"
              label="Password"
              name="password"
              variant="standard"
              type="password"
              value={user.password}
              onChange={handleChange}
            />
            <Button
              variant="contained"
              color="error"
              sx={{ textTransform: "capitalize", p: 2 }}
              style={{ marginTop: 40 }}
              type="submit"
              disabled={!user.name || !user.email || !user.password}
            >
              Create Account
            </Button>
            <Button
              variant="outlined"
              startIcon={<Image src={GoogleImage} alt="google-icon" />}
              sx={{
                textTransform: "none",
                p: 2,
                border: "1px solid #ccc",
                color: "#000",
              }}
            >
              Sign up with Google
            </Button>
            <Typography variant="body1" textAlign="center">
              Already have account?{" "}
              <span
                style={{
                  borderBottom: "1px solid #000",
                  paddingBottom: 3,
                  marginLeft: 5,
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  if (session?.user) {
                    loginAlert();
                  } else {
                    router.push("/login");
                  }
                }}
              >
                Log in
              </span>
            </Typography>
          </Stack>
        </FormControl>
      </Box>
    </>
  );
};

export default SignupForm;
