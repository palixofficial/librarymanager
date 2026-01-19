import { useLibrary } from "../hooks/LibraryContext";

export const AddBookForm = () => {
  const { addBook } = useLibrary();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const title = formData.get("title") as string;
    const author = formData.get("author") as string;
    const year = formData.get("year") as string;
    const genre = formData.get("genre") as string;
    const pages = formData.get("pages") as string;

    if (!title || !author || !year || !genre || !pages) {
      alert("Minden mező kitöltése kötelező!");
      return;
    }

    const yearNum = parseInt(year);
    const pagesNum = parseInt(pages);

    if (isNaN(yearNum) || yearNum < 0 || yearNum > new Date().getFullYear()) {
      alert("Érvénytelen év formátum!");
      return;
    }

    if (isNaN(pagesNum) || pagesNum <= 0) {
      alert("Érvénytelen oldalszám!");
      return;
    }

    addBook({
      title,
      author,
      year: yearNum,
      genre,
      pages: pagesNum,
      read: false,
    });

    form.reset();
  };

  return (
    <form className="addbookform" onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Cím" />
      <input type="text" name="author" placeholder="Szerző" />
      <input type="number" name="year" placeholder="Év" />
      <input type="text" name="genre" placeholder="Műfaj" />
      <input type="number" name="pages" placeholder="Oldalszám" />
      <button type="submit">Könyv hozzáadása</button>
    </form>
  );
};
