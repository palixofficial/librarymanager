import { useLibrary } from "../hooks/LibraryContext";

export const Statistics = () => {
  const { books } = useLibrary();

  const totalBooks = books.length;
  const readBooks = books.filter((book) => book.read).length;
  const avgPages =
    totalBooks > 0
      ? Math.round(
          books.reduce((sum, book) => sum + book.pages, 0) / totalBooks,
        )
      : 0;

  return (
    <div className="statistics">
      <div className="stat">
        <span className="stat-value">{totalBooks}</span>
        <span className="stat-label">Összes könyv</span>
      </div>
      <div className="stat">
        <span className="stat-value">{readBooks}</span>
        <span className="stat-label">Olvasott</span>
      </div>
      <div className="stat">
        <span className="stat-value">{avgPages}</span>
        <span className="stat-label">Átlag oldalszám</span>
      </div>
    </div>
  );
};
