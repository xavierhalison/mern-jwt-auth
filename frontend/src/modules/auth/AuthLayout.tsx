import type { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Toast from "../../components/Toast";

export type CenteredContainerType = {
  children: ReactNode;
};

const AuthLayout = () => {
  return (
    <>
      <Toast />
      <div className="flex justify-center items-center h-screen w-full bg-gray-200">
        <div className="flex flex-col w-sm border border-gray-400 rounded-sm p-5 bg-white shadow-md">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
