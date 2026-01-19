import { useLibrary } from "../hooks/LibraryContext";

export const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useLibrary();

  return (
    <section className="searchbar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Keresés cím vagy szerző alapján"
      />
    </section>
  );
};
