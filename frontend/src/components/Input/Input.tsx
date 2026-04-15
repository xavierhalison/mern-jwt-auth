import { type UseFormRegisterReturn } from "react-hook-form";
import { type InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & UseFormRegisterReturn;

export const Input = (props: InputProps) => {
  return (
    <>
      <input
        {...props}
        className="border rounded-sm py-1 px-2 border-gray-500"
      />
    </>
  );
};
