import { Link, useParams } from "react-router-dom";
import { useLibrary } from "../hooks/LibraryContext";

export const BookDetail = () => {
  const { title } = useParams();
  const { books } = useLibrary();

  const book = books.find(
    (b) =>
      b.title.toLowerCase() === decodeURIComponent(title || "").toLowerCase(),
  );

  if (!book) {
    return (
      <div className="book-detail-container">
        <Link to="/">⬅️ Vissza a könyvekhez</Link>
        <div className="book-not-found">
          <h2>Könyv nem található</h2>
          <p>A keresett könyv ({title}) nem található.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="book-detail-container">
      <Link to="/">⬅️ Vissza a könyvekhez</Link>
      <div className="book-detail">
        <h2>{book.title}</h2>
        <div className="book-info">
          <p>
            <strong>Szerző:</strong> {book.author}
          </p>
          <p>
            <strong>Kiadás éve:</strong> {book.year}
          </p>
          <p>
            <strong>Műfaj:</strong> {book.genre}
          </p>
          <p>
            <strong>Oldalszám:</strong> {book.pages}
          </p>
          <p>
            <strong>Státusz:</strong> {book.read ? "Olvasott" : "Olvasatlan"}
          </p>
        </div>
      </div>
    </div>
  );
};
