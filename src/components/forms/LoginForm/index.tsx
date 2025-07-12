"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";

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

  // Clean extension-added attributes on mount
  useEffect(() => {
    const cleanExtensionAttributes = () => {
      document.querySelectorAll("[fdprocessedid]").forEach((el) => {
        el.removeAttribute("fdprocessedid");
      });
    };

    cleanExtensionAttributes();
    const observer = new MutationObserver(cleanExtensionAttributes);
    observer.observe(document.body, { subtree: true, attributes: true });
    return () => observer.disconnect();
  }, []);

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
      console.log("login Error:", result);
      if (result?.error) toast.error(result.error);
      if (result?.ok) router.push("/home");
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error("Sorry");
    }
  };

  return (
    <>
      {loading && <LoadingComponent />}
      <ToastContainer />
      <form className="w-100 grid m-auto" onSubmit={submitHandler}>
        <h1 className="text-[36px]">Log in to Exclusive</h1>
        <p className="mt-[15px] mb-[30px]">Enter your details below</p>
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
            className="bg-[#DB4444] text-white py-3 rounded cursor-pointer w-30"
          >
            Log In
          </button>
          <Link href="" className="text-end text-[#DB4444] cursor-pointer">
            Forget password?
          </Link>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
