import { useId, type InputHTMLAttributes, type ReactNode } from "react";

type InputVariant = "default" | "filled" | "outline";
type InputSize = "sm" | "md" | "lg";

interface InputProps extends Readonly<Omit<InputHTMLAttributes<HTMLInputElement>, "size">> {
  variant?: InputVariant;
  size?: InputSize;
  label?: ReactNode;
  error?: boolean;
  success?: boolean;
}

function Input(props: Readonly<InputProps>) {
  const {
    variant = "default",
    size = "md",
    label,
    error = false,
    success = false,
    disabled = false,
    id,
    className = "",
    ...restProps
  } = props;
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className="d-flex flex-column gap-2 w-100">
      {label ? (
        <label htmlFor={inputId} className="text-secondary text-sm">
          {label}
        </label>
      ) : null}

      <input
        id={inputId}
        disabled={disabled}
        aria-invalid={error || undefined}
        aria-disabled={disabled || undefined}
        className={[
          "input-field",
          variant === "filled" ? "input-filled" : "",
          variant === "outline" ? "input-outline" : "",
          error ? "input-error" : "",
          success ? "input-success" : "",
          size === "sm" ? "input-sm" : size === "lg" ? "input-lg" : "input-md",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...restProps}
      />
    </div>
  );
}

export default Input;
