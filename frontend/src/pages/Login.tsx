import Button from "../components/UI/Button";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="absolute inset-0 flex flex-col space-y-10 justify-center items-center">
      <h2 className="font-semibold text-3xl">Sign In To Your Account</h2>
      {/* Button for signing in with Google */}
      <Button
        onClick={() =>
          window.open("http://localhost:4000/api/v1/auth/google", "_self")
        }
        className="w-9/12 btn-outline space-x-2"
      >
        <FcGoogle className="scale-[2]" />
        <p>Google</p>
      </Button>
    </div>
  );
};

export default Login;
