import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BookList } from "./components/BookList";
import { SearchBar } from "./components/SearchBar";
import { SortControls } from "./components/SortControls";
import { LibraryProvider } from "./hooks/LibraryContext";
import { NotFound } from "./components/NotFound";
import { BookDetail } from "./components/BookDetail";
import { AddBookForm } from "./components/AddBookForm";
import { Statistics } from "./components/Statistics";

function App() {
  return (
    <LibraryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:title" element={<BookDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LibraryProvider>
  );
}

function HomePage() {
  return (
    <main>
      <Statistics />
      <AddBookForm />
      <SearchBar />
      <SortControls />
      <BookList />
    </main>
  );
}

export default App;
