export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  category: string;
  rating: number;
  pages: number;
  year: number;
  description: string;
  cover: string;
  featured?: boolean;
}

export const categories = ["Classics", "Fantasy", "Mystery", "Science Fiction", "Romance"];

export const books: Book[] = [
  { id: "pride-and-prejudice", title: "Pride and Prejudice", author: "Jane Austen", price: 12.99, category: "Romance", rating: 4.8, pages: 432, year: 1813, cover: "from-rose-700 to-rose-950", featured: true, description: "Elizabeth Bennet navigates manners, morality and misjudgment in Regency England. A sharp, witty romance that still feels fresh." },
  { id: "great-gatsby", title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 10.5, category: "Classics", rating: 4.5, pages: 180, year: 1925, cover: "from-amber-600 to-yellow-900", featured: true, description: "Jay Gatsby's pursuit of a lost love in the glittering Jazz Age, told through the eyes of Nick Carraway." },
  { id: "dune", title: "Dune", author: "Frank Herbert", price: 16.99, category: "Science Fiction", rating: 4.7, pages: 612, year: 1965, cover: "from-orange-600 to-orange-950", featured: true, description: "On the desert planet Arrakis, young Paul Atreides is drawn into a struggle over the universe's most precious resource." },
  { id: "hobbit", title: "The Hobbit", author: "J.R.R. Tolkien", price: 13.75, category: "Fantasy", rating: 4.9, pages: 310, year: 1937, cover: "from-emerald-700 to-emerald-950", featured: true, description: "Bilbo Baggins leaves his quiet hole in the ground for an unexpected adventure with thirteen dwarves and a dragon." },
  { id: "1984", title: "1984", author: "George Orwell", price: 11.25, category: "Science Fiction", rating: 4.7, pages: 328, year: 1949, cover: "from-slate-600 to-slate-900", description: "A chilling vision of totalitarian surveillance, where Big Brother is always watching and truth is rewritten." },
  { id: "jane-eyre", title: "Jane Eyre", author: "Charlotte Bronte", price: 11.99, category: "Romance", rating: 4.6, pages: 500, year: 1847, cover: "from-purple-700 to-purple-950", description: "An orphaned governess finds love and mystery at Thornfield Hall, and refuses to give up her independence." },
  { id: "murder-orient-express", title: "Murder on the Orient Express", author: "Agatha Christie", price: 12.5, category: "Mystery", rating: 4.6, pages: 274, year: 1934, cover: "from-red-700 to-red-950", description: "Hercule Poirot investigates a murder aboard a snowbound train where every passenger has a secret." },
  { id: "hound-baskervilles", title: "The Hound of the Baskervilles", author: "Arthur Conan Doyle", price: 9.99, category: "Mystery", rating: 4.5, pages: 256, year: 1902, cover: "from-stone-600 to-stone-900", description: "Sherlock Holmes confronts a spectral hound haunting the moors of Devon and the cursed Baskerville family." },
  { id: "moby-dick", title: "Moby-Dick", author: "Herman Melville", price: 14.25, category: "Classics", rating: 4.1, pages: 635, year: 1851, cover: "from-sky-700 to-sky-950", description: "Captain Ahab's obsessive hunt for the white whale becomes an epic meditation on fate, nature and madness." },
  { id: "fellowship", title: "The Fellowship of the Ring", author: "J.R.R. Tolkien", price: 15.5, category: "Fantasy", rating: 4.9, pages: 423, year: 1954, cover: "from-teal-700 to-teal-950", description: "Frodo inherits a ring of terrible power and sets out with eight companions to destroy it in the fires of Mount Doom." },
  { id: "foundation", title: "Foundation", author: "Isaac Asimov", price: 13.25, category: "Science Fiction", rating: 4.4, pages: 255, year: 1951, cover: "from-indigo-700 to-indigo-950", description: "As a galactic empire crumbles, a mathematician devises a plan to shorten the coming dark age." },
  { id: "emma", title: "Emma", author: "Jane Austen", price: 10.75, category: "Classics", rating: 4.3, pages: 474, year: 1815, cover: "from-pink-600 to-fuchsia-900", description: "Clever, rich and meddling, Emma Woodhouse learns hard lessons about matchmaking and her own heart." },
];

export function getBook(id: string) {
  return books.find((b) => b.id === id);
}