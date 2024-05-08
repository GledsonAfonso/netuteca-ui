import { faTimesCircle } from "@fortawesome/free-solid-svg-icons/faTimesCircle";
import { useDeleteBook } from "@pages/books/hooks/useDeleteBooks";
import { ConfirmationModal } from "@shared/components/Modal/ConfirmationModal";
import "@shared/components/Modal/styles.css";
import ReactDOM from "react-dom";
import toast, { Toaster } from "react-hot-toast";

type DeleteBookModalParams = {
  bookId: string;
  onClose: () => void;
};

export const DeleteBookModal = ({
  bookId,
  onClose,
}: DeleteBookModalParams) => {
  const deleteBook = useDeleteBook();

  const onConfirm = async () => {
    deleteBook.mutate(
      { bookId },
      {
        onError: () => {
          toast.error("Deleting the book didn't work.");
        },
        onSuccess: () => {
          toast.success("Book deleted!");
          onClose();
        },
      },
    );
  };

  const modalContent = (
    <>
      <div><Toaster/></div>
      <ConfirmationModal
        title="Removing a book"
        text="You're about to delete a book. Are you sure?"
        logo={faTimesCircle}
        cancelButtonText="Cancel"
        confirmButtonText="Confirm"
        onClose={onClose}
        onConfirm={onConfirm}
      />
    </>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")!,
  );
};
