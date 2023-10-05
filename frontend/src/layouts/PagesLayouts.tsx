import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { useGET } from "../hooks/useNetwork";
import { toast } from "react-hot-toast";

const PagesLayouts = () => {
  const { data, isLoading, error, isError } = useGET("/auth/profile");
  console.log(data);
  if (isError) {
    const { error: ErrorMessage } = error as any;
    error && toast.error(ErrorMessage);
    return <Navigate to={"login"} />;
  }

  return (
    <>
      {isLoading ? (
        <>
          <div className="absolute inset-0 flex justify-center items-center">
            <span className="loading loading-spinner scale-[2] text-primary"></span>
          </div>
        </>
      ) : (
        <>
          <Header />
          <Outlet />
        </>
      )}
    </>
  );
};

export default PagesLayouts;
