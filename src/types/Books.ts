export type Book = {
  title: string;
  author: string;
  year: number;
  genre: string;
  pages: number;
  read: boolean;
};

export const Books: Book[] = [
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Disztópia",
    pages: 328,
    read: true,
  },
  {
    title: "A Gyűrűk Ura",
    author: "J.R.R. Tolkien",
    year: 1954,
    genre: "Fantasy",
    pages: 1178,
    read: false,
  },
  {
    title: "Harry Potter és a bölcsek köve",
    author: "J.K. Rowling",
    year: 1997,
    genre: "Fantasy",
    pages: 223,
    read: true,
  },
  {
    title: "A Kőszívű Ember Fiai",
    author: "Jókai Mór",
    year: 1869,
    genre: "Történelmi",
    pages: 592,
    read: false,
  },
  {
    title: "Egri Csillagok",
    author: "Gárdonyi Géza",
    year: 1901,
    genre: "Történelmi",
    pages: 458,
    read: true,
  },
  {
    title: "Az Arany Ember",
    author: "Jókai Mór",
    year: 1873,
    genre: "Kaland",
    pages: 384,
    read: false,
  },
  {
    title: "Pál utcai fiúk",
    author: "Molnár Ferenc",
    year: 1906,
    genre: "Ifjúsági",
    pages: 232,
    read: true,
  },
  {
    title: "Lúdas Matyi",
    author: "Fazekas Mihály",
    year: 1817,
    genre: "Verses regény",
    pages: 124,
    read: false,
  },
  {
    title: "A Tanú",
    author: "Bacsó Péter",
    year: 1969,
    genre: "Szatíra",
    pages: 156,
    read: true,
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    year: 1953,
    genre: "Sci-fi",
    pages: 194,
    read: false,
  },
];
