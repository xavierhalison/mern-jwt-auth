import type { ButtonHTMLAttributes } from "react";

const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
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
