import ReactDOM from "react-dom";
import "@shared/components/Modal/styles.css";
import Logo from "@shared/components/Logo/Logo";

type ConfirmationModalParams = {
  title: string;
  text: string;
  logo: any;
  onClose: () => void;
  onConfirm: () => Promise<void>;
};

export const ConfirmationModal = ({ title, text, logo, onClose, onConfirm }: ConfirmationModalParams) => {
  const handleCloseClick = (event: any) => {
    event.preventDefault();
    onClose();
  };

  const handleConfirmClick = async (event: any) => {
    event.preventDefault();
    await onConfirm();
  };

  const modalContent = (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-header">
            <a href="#" onClick={handleCloseClick}>
              x
            </a>
          </div>
          <div className="modal-body">
            <div className="modal-logo">{logo}</div>
            <h1 className="modal-title">{title}</h1>
            <p className="modal-text">{text}</p>
          </div>
          <div className="modal-buttons">
            <button className="modal-cancel-button" onClick={handleCloseClick}>No</button>
            <button className="modal-confirmation-button" onClick={handleConfirmClick}>Yes</button>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")!,
  );
};
