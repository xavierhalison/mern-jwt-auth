import type React from "react";

export type ButtonType = {
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const Button = ({ children, ...props }: ButtonType) => {
  return (
    <button
      className="bg-gray-500 text-white font-bold rounded-sm py-1 px-2 my-4 font-funnel hover:cursor-pointer hover:bg-gray-600"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
