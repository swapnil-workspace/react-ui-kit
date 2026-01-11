interface InputProps {
  value: string;
  placeholder?: string;
  onChange: (val: string) => void;
}

export const Input = ({ value, placeholder, onChange }: InputProps) => {
  return (
    <input
      className="input"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
