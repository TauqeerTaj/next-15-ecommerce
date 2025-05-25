import Image from "next/image";
import BackgroundImage from "@/assests/auth-bg.png";
import SignupForm from "@/components/forms/signup";

const Signup = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <div>
          <Image
            src={BackgroundImage}
            alt="background-image"
            className="object-cover"
            quality={100}
            priority
          />
        </div>
        <div
          className="w-100 h-screen place-content-center flex-1"
          suppressHydrationWarning
        >
          <SignupForm />
        </div>
      </div>
    </>
  );
};

export default Signup;
