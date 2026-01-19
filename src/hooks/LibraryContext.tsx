import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { Book, Books } from "../types/Books";

export type sortByType = "title" | "author" | "year" | "genre";

const LibraryContext = createContext<{
  books: Book[];
  setBooks: Dispatch<SetStateAction<Book[]>>;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  sortBy: sortByType;
  setSortBy: Dispatch<SetStateAction<sortByType>>;
  addBook: (newBook: Book) => void;
  deleteBook: (title: string) => void;
  toggleRead: (title: string) => void;
  filteredBooks: Book[];
} | null>(null);

export function LibraryProvider({ children }: { children: React.ReactNode }) {
  const [books, setBooks] = useState<Book[]>(Books);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<sortByType>("title");

  const filteredBooks = useMemo(() => {
    let filteredBooks = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    filteredBooks.sort((current, next) => {
      if (sortBy === "title") {
        return current.title.localeCompare(next.title);
      } else if (sortBy === "author") {
        return current.author.localeCompare(next.author);
      } else if (sortBy === "genre") {
        return current.genre.localeCompare(next.genre);
      } else {
        return current.year - next.year;
      }
    });
    return filteredBooks;
  }, [books, searchTerm, sortBy]);

  const contextValue = {
    books,
    setBooks,
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    addBook,
    deleteBook,
    toggleRead,
    filteredBooks,
  };

  function addBook(newBook: Book) {
    setBooks((books) => [...books, newBook]);
  }

  function deleteBook(title: string) {
    setBooks((books) => books.filter((book) => book.title !== title));
  }

  function toggleRead(title: string) {
    setBooks((books) =>
      books.map((book) =>
        book.title === title ? { ...book, read: !book.read } : book,
      ),
    );
  }

  return (
    <LibraryContext.Provider value={contextValue}>
      {children}
    </LibraryContext.Provider>
  );
}

export function useLibrary() {
  const context = useContext(LibraryContext);
  if (!context) {
    throw new Error("useLibrarynek LibraryProvider-en belül kell lennie");
  }
  return context;
}

export default LibraryContext;
