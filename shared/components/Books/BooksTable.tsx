import { useBooks } from "@/shared/hooks/books/useBooks";

export default function BooksTable() {
  const books = useBooks();

  return (
    <div>
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
    </div>
  );
}
