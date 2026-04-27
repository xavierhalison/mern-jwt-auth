import type { ButtonHTMLAttributes } from "react";

export type Variant = "primary" | "outline" | "link";

const Button = ({
  children,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) => {
  const variantClasses: Record<Variant, string> = {
    primary: "bg-moss text-white",
    outline: "border border-2 border-moss text-moss",
    link: "text-cool",
  };

  return (
    <button
      className={`font-bold rounded-sm py-1 px-2 font-funnel hover:cursor-pointer ${variantClasses[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
