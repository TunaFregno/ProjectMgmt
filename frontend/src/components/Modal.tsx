import ButtonComponent from "./ButtonComponent";

type ModalProps = {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

export default function Modal({ title, icon, children }: ModalProps) {
  return (
    <>
      <ButtonComponent
        buttonType="btn-secondary"
        data-bs-toggle="modal"
        type="button"
        data-bs-target="#baseModal"
      >
        {icon}
        {title}
      </ButtonComponent>

      <div
        className="modal fade"
        id="baseModal"
        aria-labelledby="baseModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="baseModalLabel">
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
