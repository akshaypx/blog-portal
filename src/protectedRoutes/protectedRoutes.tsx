import React from "react";
import { useUserStore } from "../store/userStore";
import { Navigate } from "react-router-dom";

interface ProtectedRoutesProps {
  children: JSX.Element;
}

const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
  const { isLoggedIn } = useUserStore((state) => ({
    isLoggedIn: state.isLoggedIn,
  }));
  // if (isLoggedIn) {
  //   return children;
  // }
  // return (
  //   <>
  //     <Navigate to="/login" replace={true} />
  //   </>
  // );
  return children;
};

export default ProtectedRoutes;
