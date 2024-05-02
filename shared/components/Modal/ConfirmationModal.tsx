import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@shared/components/Modal/styles.css";
import ReactDOM from "react-dom";

type ConfirmationModalParams = {
  title: string;
  text: string;
  logo: IconDefinition;
  cancelButtonText: string;
  confirmButtonText: string;
  onClose: () => void;
  onConfirm: () => Promise<void>;
};

export const ConfirmationModal = ({
  title,
  text,
  logo,
  cancelButtonText,
  confirmButtonText,
  onClose,
  onConfirm
}: ConfirmationModalParams) => {
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
            <FontAwesomeIcon
              icon={faX}
              onClick={handleCloseClick}
              className="modal-close-icon"
            />
          </div>
          <div className="modal-body">
            <FontAwesomeIcon
              icon={logo}
              className="modal-icon"
            />
            <h1 className="modal-title">{title}</h1>
            <p className="modal-text">{text}</p>
          </div>
          <div className="modal-buttons">
            <button className="modal-cancel-button" onClick={handleCloseClick}>{cancelButtonText}</button>
            <button className="modal-confirmation-button" onClick={handleConfirmClick}>{confirmButtonText}</button>
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
