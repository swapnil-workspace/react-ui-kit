import { ButtonProps } from "./Button.types";
import "../../styles/theme.css";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  loading,
  disabled,
  onClick
}: ButtonProps) => {
  return (
    <button
      className={`btn ${variant} ${size}`}
      disabled={loading || disabled}
      onClick={onClick}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};
