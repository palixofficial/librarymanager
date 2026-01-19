import { useLibrary } from "../hooks/LibraryContext";

export const SortControls = () => {
  const { sortBy, setSortBy } = useLibrary();
  return (
    <section className="sortby">
      <div>
        <input
          type="radio"
          id="sortByTitle"
          name="sortBy"
          value="title"
          checked={sortBy === "title"}
          onChange={() => setSortBy("title")}
        />
        <label htmlFor="sortByTitle">Cím szerint</label>
      </div>

      <div>
        <input
          type="radio"
          id="sortByGenre"
          name="sortBy"
          value="genre"
          checked={sortBy === "genre"}
          onChange={() => setSortBy("genre")}
        />
        <label htmlFor="sortByGenre">Műfaj szerint</label>
      </div>
      <div>
        <input
          type="radio"
          id="sortByAuthor"
          name="sortBy"
          value="author"
          checked={sortBy === "author"}
          onChange={() => setSortBy("author")}
        />
        <label htmlFor="sortByAuthor">Szerző szerint</label>
      </div>

      <div>
        <input
          type="radio"
          id="sortByYear"
          name="sortBy"
          value="year"
          checked={sortBy === "year"}
          onChange={() => setSortBy("year")}
        />
        <label htmlFor="sortByYear">Év szerint</label>
      </div>
    </section>
  );
};
