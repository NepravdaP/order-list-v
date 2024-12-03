import styles from "./button.module.scss";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  styletype = "primary",
  type = "submit",
  border = false,
  onClick = () => null,
  disabled = false,
  children,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[styletype]} ${styles[size]} ${
        disabled ? styles.disabled : ""
      } ${border ? styles.border : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
