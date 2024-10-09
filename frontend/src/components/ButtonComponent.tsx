type ButtonProps = {
  buttonType: "btn-outline-secondary" | "btn-dark" | "btn-light" | "btn-info";
  padding?: string;
  onClick?: () => void;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonComponent({
  buttonType,
  onClick,
  children,
  padding,
  color,
  ...props
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`btn ${buttonType} ${color} btn-sm ${padding}`}
      {...props}
    >
      {children}
    </button>
  );
}
