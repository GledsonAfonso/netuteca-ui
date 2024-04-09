import { useBooks } from "@/shared/hooks/books/useBooks";

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

  return (
    <div>
      {!isLoading && !isError && isSuccess && books ?
        <table>
          <tr>
            {Object.keys(books[0]).map(bookHeader => (
              <th>{bookHeader}</th>
            ))}
          </tr>

          {books.map(book => (
            <tr>
              {Object.values(book).map(value => (
                <td>{value}</td>
              ))}
            </tr>
          ))}
        </table>
        :
        <table></table>
      }
    </div>
  );
}
