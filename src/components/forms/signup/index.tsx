"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

//axios
import axios from "axios";

//Router
import { useRouter } from "next/navigation";

//Interface
import { AuthInterface } from "@/constant/authInterface";
//Toast
import { toast } from "react-toastify";
//Images
import GoogleImage from "@/assests/google.png";
//Components
import LoadingComponent from "@/components/LoadingBar";

const SignupForm = () => {
  const router = useRouter();
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

  return (
    <>
      {loading && <LoadingComponent />}
      <form className="w-100 grid m-auto" onSubmit={submitHandler}>
        <h1 className="text-[36px]">Create an account</h1>
        <p className="mt-[15px] mb-[30px]">Enter your details below</p>
        <div className="mb-[30px]">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={user.name}
            className="border-b border-[#ccc] w-[100%] outline-none"
            onChange={handleChange}
            data-extension-resist
          />
        </div>
        <div className="mb-[30px]">
          <input
            type="text"
            name="email"
            value={user.email}
            placeholder="Email or Phone Number"
            className="border-b border-[#ccc] w-[100%] outline-none"
            onChange={handleChange}
            data-extension-resist
          />
        </div>
        <div className="mb-[30px]">
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Password"
            className="border-b border-[#ccc] w-[100%] outline-none"
            onChange={handleChange}
            data-extension-resist
          />
        </div>
        <div className="grid grid-cols-2 gap-4 items-center">
          <button
            type="submit"
            className="bg-[#DB4444] text-white py-3 rounded cursor-pointer w-100 mb-4"
          >
            Create Account
          </button>
        </div>
        <div>
          <button className="w-100 border border-[#ccc] rounded flex place-content-center py-3 cursor-pointer mb-7">
            <Image src={GoogleImage} alt="google-icon" className="mr-4" />
            Sign up with Google
          </button>
        </div>
        <div className="w-100 text-center">
          Already have account?
          <Link
            href="/login"
            className="text-end cursor-pointer ms-4 pb-1 border-b"
          >
            Log In
          </Link>
        </div>
      </form>
    </>
  );
};

export default SignupForm;
