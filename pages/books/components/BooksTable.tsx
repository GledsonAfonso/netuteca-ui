import { faRemove, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@pages/books/components/styles.css";
import { ConfirmationModal } from "@shared/components/Modal/ConfirmationModal";
import { useBooks } from "@shared/hooks/books/useBooks";
import { Book } from "@shared/types/books";
import { useState } from "react";

export default function BooksTable() {
  const {
    data: books,
    error,
    isError,
    isLoading,
    isSuccess,
  } = useBooks();
  const [pageIndex, setPageIndex] = useState(0);
  const [openRemoveConfirmationModal, setOpenRemoveConfirmationModal] = useState(false);
  const [bookId, setBookId] = useState("");

  const handlesEditButtonClick = (book: Book) => {
    console.log("edit button");
    console.log(book);
  };

  const handlesRemoveButtonClick = (bookId: string) => {
    setOpenRemoveConfirmationModal(true);
    setBookId(bookId);
  };

  const handlesRemoveBook = async () => {
    setOpenRemoveConfirmationModal(false);
    setBookId("");
  };
  
  const handlesPreviousPageButtonClick = () => {
    setPageIndex(pageIndex - 1);
  };

  const handlesNextPageButtonClick = () => {
    setPageIndex(pageIndex + 1);
  };

  if(isError) {
    console.log(error);
  }

  if(isLoading) {
    console.log("Still loading...");
  }

  let headers: string[] = [];
  if (isSuccess && books) {
    headers = Object.keys(books.get(0)![0]);
  }

  return (
    <>
      <div className="table-window">
        <div className="lateral-box"></div>
        <div className="table-container">
          {isSuccess && books ?
            <table>
              <thead>
                <tr className="ignore-hover-behavior">
                  {headers.map(bookHeader => (
                    <th key={bookHeader}>{bookHeader}</th>
                  ))}
                  <th key={"options"}></th>
                </tr>
              </thead>

              <tbody>
                {books.get(pageIndex)?.map(book => (
                  <tr key={book.id}>
                    {Object.values(book).map((value, index) => (
                      <td key={`${book.id}-${headers[index]}-${value}`}>{value}</td>
                    ))}
                    <td key={`${book.id}-options`}>
                      <div className="options-container">
                        <FontAwesomeIcon
                          icon={faEdit}
                          onClick={() => handlesEditButtonClick(book)}
                          className="edit-button"
                        />
                        <FontAwesomeIcon
                          icon={faRemove}
                          onClick={() => handlesRemoveButtonClick(book.id)}
                          className="remove-button"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            :
            <></>
          }
          <div className="page-index-container">
            <button onClick={handlesPreviousPageButtonClick} className="page-index-button-left" disabled={pageIndex === 0}>{`<`}</button>
            <div>{pageIndex + 1}</div>
            <button onClick={handlesNextPageButtonClick} className="page-index-button-right" disabled={books ? (pageIndex === (books.size - 1)) : true}>{`>`}</button>
          </div>
        </div>
        <div className="lateral-box"></div>
      </div>
      {openRemoveConfirmationModal &&
        <ConfirmationModal
          title="Removing a book"
          text="You're about to delete a book. Are you sure?"
          logo={faTimesCircle}
          cancelButtonText="Cancel"
          confirmButtonText="Confirm"
          onClose={() => setOpenRemoveConfirmationModal(false)}
          onConfirm={handlesRemoveBook}
        />}
    </>
  );
}
