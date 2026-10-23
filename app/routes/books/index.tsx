import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { BookCard } from "../../components/BookCard";
import { books, categories } from "../../data/books";

export const Route = createFileRoute("/books/")({
  validateSearch: (search: Record<string, unknown>): { category?: string } => ({
    category: typeof search.category === "string" ? search.category : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Shop Books - Page & Ink" },
      { name: "description", content: "Browse our full catalogue of books." },
      { property: "og:title", content: "Shop Books - Page & Ink" },
    ],
  }),
  component: Shop,
});

type Sort = "featured" | "price-asc" | "price-desc" | "rating";

function Shop() {
  const { category: initial } = Route.useSearch();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>(initial ?? "All");
  const [sort, setSort] = useState<Sort>("featured");

  const q = query.trim().toLowerCase();
  const results = books
    .filter((b) => category === "All" || b.category === category)
    .filter((b) => !q || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q))
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold md:text-4xl">The Shop</h1>
      <p className="mt-2 text-muted-foreground">{results.length} books</p>

      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative md:w-80">
          <Search className="absolute left-3 top-1/2 w-4 h-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search title or author" className="pl-9" />
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as Sort)}
          className="h-10 rounded-md border border-input bg-background px-3 text-sm"
        >
          <option value="featured">Sort: Featured</option>
          <option value="price-asc">Price: Low to high</option>
          <option value="price-desc">Price: High to low</option>
          <option value="rating">Top rated</option>
        </select>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {["All", ...categories].map((c) => (
          <Button key={c} size="sm" variant={category === c ? "default" : "outline"} onClick={() => setCategory(c)}>
            {c}
          </Button>
        ))}
      </div>

      {results.length === 0 ? (
        <p className="py-20 text-center text-muted-foreground">No books match your search.</p>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {results.map((b) => <BookCard key={b.id} book={b} />)}
        </div>
      )}
    </div>
  );
}