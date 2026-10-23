import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "../components/ui/button";
import { BookCard } from "../components/BookCard";
import { useWishlist } from "../hooks/use-wishlist";
import { books } from "../data/books";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "Wishlist - Page & Ink" },
      { name: "description", content: "Books you have saved for later." },
    ],
  }),
  component: Wishlist,
});

function Wishlist() {
  const { ids } = useWishlist();
  const saved = books.filter((b) => ids.includes(b.id));
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold md:text-4xl">Your wishlist</h1>
      {saved.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-muted-foreground">Tap the heart on any book to save it here.</p>
          <Button asChild className="mt-6"><Link to="/books">Browse books</Link></Button>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {saved.map((b) => <BookCard key={b.id} book={b} />)}
        </div>
      )}
    </div>
  );
}