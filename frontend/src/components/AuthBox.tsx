import type { ReactNode } from "react";

export type AuthBoxType = {
  children: ReactNode;
};

const AuthBox = ({ children }: AuthBoxType) => {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-gray-200">
      <div className="flex flex-col w-sm border border-gray-400 rounded-sm p-5 bg-white shadow-md">
        {children}
      </div>
    </div>
  );
};

export default AuthBox;
