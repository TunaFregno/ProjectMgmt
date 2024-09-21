type ButtonProps = {
  buttonType: "btn-danger" | "btn-secondary";
  onClick?: () => void;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonComponent({
  buttonType,
  onClick,
  children,
  ...props
}: ButtonProps) {
  return (
    <button onClick={onClick} className={`btn ${buttonType} btn-sm`} {...props}>
      {children}
    </button>
  );
}
