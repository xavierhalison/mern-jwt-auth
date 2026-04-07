export type InputProps = {
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: string) => void;
  keyboardSubmit?: () => void;
};

const Input = ({
  type,
  id,
  name,
  value,
  onChange,
  keyboardSubmit,
}: InputProps) => {
  const handleKeyboardSubmit = () => {
    if (keyboardSubmit) {
      keyboardSubmit();
    }
  };

  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      className="border rounded-sm py-1 px-2 my-2 border-gray-500"
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleKeyboardSubmit()}
    />
  );
};
export default Input;
