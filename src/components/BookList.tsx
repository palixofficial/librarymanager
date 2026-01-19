import { Link } from "react-router-dom";
import { useLibrary } from "../hooks/LibraryContext";
import { Book } from "../types/Books";

export const BookList = () => {
  const { filteredBooks, toggleRead, deleteBook } = useLibrary();
  return (
    <div className="books">
      {filteredBooks.length === 0 && (
        <div className="book-line">Nincs találat</div>
      )}
      {filteredBooks.map((book) => BookItem({ book, toggleRead, deleteBook }))}
    </div>
  );
};

const BookItem = ({
  book,
  toggleRead,
  deleteBook,
}: {
  book: Book;
  toggleRead: (title: string) => void;
  deleteBook: (title: string) => void;
}) => {
  return (
    <div key={book.title} className="book-line">
      <Link to={`/book/${book.title}`} key={book.title}>
        <p>{book.title}</p>
      </Link>
      <p>{book.author}</p>
      <p>{book.year}</p>
      <p>{book.genre}</p>
      <p>{book.pages}</p>
      <span className="toggleRead" onClick={() => toggleRead(book.title)}>
        {book.read ? "👀" : "🕶️"}
      </span>
      <button className="delete" onClick={() => deleteBook(book.title)}>
        Törlés
      </button>
    </div>
  );
};
