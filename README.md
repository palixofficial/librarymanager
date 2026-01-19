// Feladatleírás:
// A feladatod egy Context API-n alapuló egyszerű könyvtár kezelő alkalmazás létrehozása egyetlen React komponens fájlban. A fő cél, hogy a könyvadatokat és műveleteket kiszervezd egy Provider komponensbe, és a kezelési állapotokat (adatok, szűrés, rendezés) Custom Hook-on keresztül oszd meg a gyermek komponensekkel.

// A kódot egyetlen fájlban/komponensben írd meg! Csak funkcionális komponenseket és Hook-okat használj!

// 1. Lépés: Context és Provider Váz Létrehozása (4 pont)

// A Context és a Provider alapszerkezetének beállítása.

// A) Context Deklaráció: Hozz létre egy LibraryContext nevű Context objektumot a React importok után. (1 pont)
// B) Provider Deklaráció: Hozd létre a LibraryProvider funkcionális komponenst, amely paraméterként fogadja a children prop-ot. (1 pont)
// C) Context Provider Váz: A LibraryProvider térítsen vissza egy LibraryContext.Provider tag-et, amely beágyazza a children prop-ot. (1 pont)
// D) Custom Hook Alapja: Írj egy useLibrary nevű Custom Hook-ot, amely meghívja a useContext(LibraryContext) hívást. Ez a Hook feleljen a hiba dobásáért, ha nem a Provider hatókörén belül használják. (1 pont)

// 2. Lépés: Provider Állapot és Context Érték (4 pont)

// A Provider komponensbe helyezzük az alkalmazás globális állapotait.

// A) books Állapot: Hozz létre egy állapotot a LibraryProvider-ben books néven, amely a könyvek tömbjét tárolja. Kezdőérték legyen egy előre definiált tömb legalább 10 könyvvel (cím, szerző, év, műfaj, oldalszám, olvasott boolean). (1 pont)

// B) searchTerm Állapot: Hozz létre egy string állapotot searchTerm néven a keresési kifejezés tárolására (kezdőérték: üres string ""). (1 pont)
// C) sortBy Állapot: Hozz létre egy állapotot sortBy néven, amely tárolja a rendezési szempontot (kezdőérték: "title"). Lehetséges értékek: "title", "author", "year". (1 pont)
// D) Context Érték: Hozd létre a contextValue objektumot, amely tartalmazza a books, searchTerm és sortBy állapotokat, valamint a frissítő függvényeiket (setBooks, setSearchTerm, setSortBy). (1 pont)

// 3. Lépés: Könyv Műveletek Logikája (6 pont)

// Implementáljuk a könyvkezelési műveleteket a Provider-ben.

// A) addBook Függvény: Írj egy addBook függvényt, amely paraméterként fogad egy új könyv objektumot és hozzáadja a books tömbhöz. (1 pont)
// B) deleteBook Függvény: Írj egy deleteBook függvényt, amely paraméterként fogad egy könyv címet (title) és eltávolítja azt a books tömbből. (1 pont)
// C) toggleRead Függvény: Írj egy toggleRead függvényt, amely paraméterként fogad egy könyv címet és átváltja az adott könyv "olvasott" státuszát (true ↔ false). (1 pont)
// D) Szűrt Lista: Készíts egy useMemo Hook-ot, amely a searchTerm alapján szűri a books tömböt (cím vagy szerző alapján). (1 pont)
// E) Rendezett Lista: Bővítsd a useMemo-t, hogy a szűrés után rendezze is az eredményt a sortBy állapot szerint. (1 pont)
// F) Context Kibővítése: Add hozzá az addBook, deleteBook, toggleRead függvényeket és a szűrt-rendezett listát (filteredBooks) a contextValue objektumhoz. (1 pont)

// 4. Lépés: Adatfogyasztó Komponensek (5 pont)

// Hozd létre a gyermek komponenseket, amelyek a Context-ből szerzik be az adatokat és műveleteket.

// A) Főalkalmazás (App): Hozd létre az App komponenst, amely a teljes alkalmazás vázát adja. Ezen belül vedd körül a további komponenseket a LibraryProvider-rel. (1 pont)
// B) Kereső Komponens: Hozz létre egy SearchBar komponenst. Ennek kizárólag a useLibrary Hook-ot kell használnia a searchTerm és setSearchTerm eléréséhez. Jelenítsen meg egy input mezőt a kereséshez. (1 pont)
// C) Rendezés Komponens: Hozz létre egy SortControls komponenst, amely radio button-okat vagy select mezőt tartalmaz a sortBy értékének beállítására. (1 pont)
// D) Könyvlista Komponens: Hozz létre egy BookList komponenst, amely a useLibrary Hook-kal éri el a filteredBooks tömböt és megjeleníti a könyveket. (1 pont)
// E) Könyv Elem Komponens: Készíts egy BookItem komponenst, amely egyetlen könyvet jelenít meg. Tartalmazzon gombot a törléshez és az olvasott státusz váltásához. (1 pont)

// 5. Lépés: Struktúra és Interakciók (5 pont)

// A) Telepítsd fel a következő csomagot: npm install react-router-dom (1 pont)
// B) Állítsd be az <App /> komponensben a route-okat és foglald az összes komponenst egy <BrowserRouter>-be. (1 pont)
// C) Állítsd be, hogy a <Route path="/" /> töltse be az alkalmazás főoldalát (SearchBar, SortControls, BookList). (1 pont)
// D) Állítsd be egy új <Route path="/book/:title" />-t, amely egy könyv részletes nézetét jeleníti meg. (1 pont)
// E) Amikor rákattintok a BookList egyik elemére, akkor irányítson át az alkalmazás az előbb megírt path-re (/book/:title), a könyv címével. A BookItem komponensben használj Link-et vagy navigate-et. (1 pont)

// 6. Lépés: Részletes Nézet és Új Könyv Hozzáadása (5 pont)

// A) BookDetail Komponens: Készíts egy BookDetail komponenst, amely a useParams()-ot használva lekéri az URL-ből a könyv címét, majd megkeresi a books tömbben és megjeleníti az összes adatát (cím, szerző, év, műfaj, oldalszám, olvasott státusz). (1 pont)
// B) Visszanavigálás: Add hozzá a BookDetail komponenshez egy "Vissza" gombot, amely visszairányít a főoldalra. (1 pont)
// C) AddBookForm Komponens: Készíts egy AddBookForm komponenst, amely egy űrlapot tartalmaz új könyv hozzáadásához (input mezők: cím, szerző, év, műfaj, oldalszám). (1 pont)
// D) Űrlap Kezelés: Implementáld az űrlap kezelést useState Hook-okkal és a submit eseménynél hívd meg az addBook függvényt a Context-ből. (1 pont)
// E) Validáció: Add hozzá az alapvető validációt (kötelező mezők, év számformátum), és sikeres hozzáadás után ürítsd ki az űrlapot. (1 pont)

// 7. Lépés: Formázás és Extra Funkciók (BÓNUSZ)

// Formázd meg az alkalmazást CSS-el vagy inline style-okkal!
// - Készíts reszponzív elrendezést
// - Különböztess meg vizuálisan az olvasott és olvasatlan könyveket
// - Add hozzá a különböző műfajokhoz különböző színeket
// - Készíts szép kártyákat a könyvekhez
// - Implementálj egy statisztika komponenst (összes könyv, olvasott könyvek száma, átlagos oldalszám)
// - Add hozzá a lehetőséget könyvek szerkesztésére (EditBookForm)
// - Készíts szűrést műfaj alapján is

// Példa könyvek kezdőértékhez:
/_
[
{ title: "1984", author: "George Orwell", year: 1949, genre: "Disztópia", pages: 328, read: true },
{ title: "A Gyűrűk Ura", author: "J.R.R. Tolkien", year: 1954, genre: "Fantasy", pages: 1178, read: false },
{ title: "Harry Potter és a bölcsek köve", author: "J.K. Rowling", year: 1997, genre: "Fantasy", pages: 223, read: true },
{ title: "A Kőszívű Ember Fiai", author: "Jókai Mór", year: 1869, genre: "Történelmi", pages: 592, read: false },
{ title: "Egri Csillagok", author: "Gárdonyi Géza", year: 1901, genre: "Történelmi", pages: 458, read: true },
{ title: "Az Arany Ember", author: "Jókai Mór", year: 1873, genre: "Kaland", pages: 384, read: false },
{ title: "Pál utcai fiúk", author: "Molnár Ferenc", year: 1906, genre: "Ifjúsági", pages: 232, read: true },
{ title: "Lúdas Matyi", author: "Fazekas Mihály", year: 1817, genre: "Verses regény", pages: 124, read: false },
{ title: "A Tanú", author: "Bacsó Péter", year: 1969, genre: "Szatíra", pages: 156, read: true },
{ title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953, genre: "Sci-fi", pages: 194, read: false }
]
_/
