import { useBooks } from "@shared/hooks/books/useBooks";
import "@pages/books/components/styles.css"

export default function BooksTable() {
  const {
    data: books,
    error,
    isError,
    isLoading,
    isSuccess,
  } = useBooks();

  if(isError) {
    console.log(error);
  }

  if(isLoading) {
    console.log("Still loading...");
  }

  let headers: string[] = [];
  if (isSuccess && books) {
    headers = Object.keys(books[0]);
  }

  return (
    <div className="center">
      {isSuccess && books ?
        <table className="books-table">
          <thead>
            <tr className="ignore-hover-behavior">
              {headers.map(bookHeader => (
                <th key={bookHeader}>{bookHeader}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {books.map(book => (
              <tr key={book.id}>
                {Object.values(book).map((value, index) => (
                  <td key={`${book.id}-${headers[index]}-${value}`}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        :
        <></>
      }
    </div>
  );
}
