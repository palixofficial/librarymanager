import LibraryContext, { useLibrary } from "./hooks/LibraryContext";

function App() {
  const library = useLibrary();

  return (
    <>
      <LibraryContext.Provider value={library}></LibraryContext.Provider>
    </>
  );
}

export default App;
