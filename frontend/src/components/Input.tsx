export type InputProps = {
  type: string;
  id: string;
  name: string;
  value: string;
  onChange?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Input = ({ ...props }: InputProps) => {
  return (
    <input {...props} className="border rounded-sm py-1 px-2 border-gray-500" />
  );
};
export default Input;
