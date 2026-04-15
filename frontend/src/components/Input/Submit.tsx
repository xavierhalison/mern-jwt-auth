import { type InputHTMLAttributes } from "react";

type SubmitProps = InputHTMLAttributes<HTMLInputElement>;

export const Submit = ({ ...props }: SubmitProps) => {
  return (
    <input
      type="submit"
      {...props}
      className={`bg-gray-500 text-white font-bold rounded-sm py-1 px-2 my-4 font-funnel hover:cursor-pointer hover:bg-gray-600 disabled:bg-gray-400 text-center`}
    />
  );
};
