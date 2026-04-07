const Toast = ({
  message,
  variant,
}: {
  message: string;
  variant: "info" | "danger";
}) => {
  const variantToClass = {
    danger: {
      bg: "bg-red-100",
      text: "text-red-500",
    },
    info: {
      bg: "bg-gray-100",
      text: "text-gray-500",
    },
  };

  return (
    <code
      className={`text-center p-2 my-2 ${variantToClass[variant].bg} ${variantToClass[variant].text}`}
    >
      {message}
    </code>
  );
};

export default Toast;
