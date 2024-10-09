import ButtonComponent from "./ButtonComponent";

type ModalProps = {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  target: string;
  buttonType: "btn-outline-secondary" | "btn-dark" | "btn-light" | "btn-info";
  padding: string;
  color?: string;
};

export default function Modal({
  title,
  icon,
  children,
  target,
  buttonType,
  padding,
  color,
}: ModalProps) {
  return (
    <>
      <ButtonComponent
        buttonType={buttonType} //"btn-secondary"
        data-bs-toggle="modal"
        type="button"
        data-bs-target={`#${target}`} //"#baseModal"
        padding={padding}
        color={color}
      >
        {icon}
        {title}
      </ButtonComponent>

      <div
        className="modal fade"
        id={target}
        aria-labelledby={`${target}Label`} //"baseModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id={`${target}Label`} //"baseModalLabel"
              >
                {icon}
                {title}
              </h5>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
