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

  let headers: string[] = [];
  if (isSuccess && books) {
    headers = Object.keys(books[0]);
  }

  return (
    <div>
      {isLoading ? <h2>Loading...</h2> : <></>}

      {isError ? <h2>Error!</h2> : <></>}

      {isSuccess && books ?
        <table className="books-table">
          <thead>
            {headers.map(bookHeader => (
              <th key={bookHeader}>{bookHeader}</th>
            ))}
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
