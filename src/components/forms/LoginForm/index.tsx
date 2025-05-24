"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

// MUI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";

// Components
import Styles from "@/styles/authForm.module.css";
import dynamic from "next/dynamic";

const ToastContainer = dynamic(
  () => import("react-toastify").then((mod) => mod.ToastContainer),
  { ssr: false }
);
const LoadingComponent = dynamic(() => import("@/components/LoadingBar"), {
  ssr: false,
});

const LoginForm = () => {
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: user.email,
        password: user.password,
      });

      setLoading(false);
      // if (result?.error) toast.error(result.error);
      if (result?.ok) router.push("/home");
    } catch (error) {
      setLoading(false);
      console.log(error);
      // toast.error("Sorry");
    }
  };

  return (
    <Box textAlign="center">
      {loading && <LoadingComponent />}
      <ToastContainer />
      <FormControl
        component="form"
        onSubmit={submitHandler}
        className={Styles.form}
        sx={{
          md: { translate: "0px 150px" },
          lg: { translate: "0px 150px" },
          xl: { translate: "0px 150px" },
        }}
      >
        <Typography
          className={Styles.heading}
          variant="h4"
          sx={{ textAlign: "left", mb: 2 }}
        >
          Log in to Exclusive
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, textAlign: "left" }}>
          Enter your details below
        </Typography>
        <Stack direction="column" spacing={2}>
          <TextField
            id="email"
            label="Email or Phone Number"
            variant="standard"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <TextField
            id="password"
            label="Password"
            variant="standard"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <Stack
            direction="row"
            spacing={5}
            sx={{ mt: 6, alignItems: "center" }}
          >
            <Button
              variant="contained"
              color="error"
              type="submit"
              sx={{ textTransform: "capitalize", p: 2, width: 120 }}
              disabled={!user.email || !user.password}
            >
              Log In
            </Button>
            <Link href="" style={{ color: "#DB4444", fontWeight: "bold" }}>
              Forget Password?
            </Link>
          </Stack>
        </Stack>
      </FormControl>
    </Box>
  );
};

export default LoginForm;
