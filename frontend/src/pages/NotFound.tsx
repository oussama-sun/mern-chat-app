import { useLocation } from "react-router-dom";

export const NotFound = () => {
  const location = useLocation();
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <h1 className="font-semibold text-center text-2xl lg:text-3xl">
        404 This page : {location.pathname} <h1>is not exists.</h1>
      </h1>
    </div>
  );
};
