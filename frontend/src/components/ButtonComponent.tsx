type ButtonProps = {
  buttonType: "btn-danger" | "btn-secondary" | "btn-primary";
  padding?: string;
  onClick?: () => void;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonComponent({
  buttonType,
  onClick,
  children,
  padding,
  ...props
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`btn ${buttonType} btn-sm ${padding}`}
      {...props}
    >
      {children}
    </button>
  );
}
