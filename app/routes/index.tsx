import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Truck, ShieldCheck, Gift } from "lucide-react";
import { Button } from "../components/ui/button";
import { BookCard } from "../components/BookCard";
import { books, categories } from "../data/books";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Page & Ink - Independent Online Bookshop" },
      { name: "description", content: "Discover classics, fantasy, mystery and more at Page & Ink." },
      { property: "og:title", content: "Page & Ink - Independent Online Bookshop" },
      { property: "og:description", content: "Discover classics, fantasy, mystery and more." },
    ],
  }),
  component: Index,
});

const perks = [
  { icon: Truck, title: "Free shipping", text: "On all orders over $35." },
  { icon: ShieldCheck, title: "Secure checkout", text: "Safe and simple payments." },
  { icon: Gift, title: "Gift wrapping", text: "Beautifully wrapped on request." },
];

function Index() {
  const featured = books.filter((b) => b.featured);
  return (
    <div>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <p className="mb-3 text-sm uppercase tracking-widest text-primary-foreground/70">Independent bookshop</p>
          <h1 className="max-w-2xl text-3xl font-bold sm:text-4xl md:text-5xl">Find your next favourite story.</h1>
          <p className="mt-4 max-w-xl text-lg text-primary-foreground/80">
            Hand-picked classics and modern favourites, shipped to your door.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="secondary">
              <Link to="/books">Browse the shop <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {perks.map((p) => (
            <div key={p.title} className="flex items-start gap-3">
              <p.icon className="mt-1 w-5 h-5 text-accent" />
              <div>
                <p className="font-semibold">{p.title}</p>
                <p className="text-sm text-muted-foreground">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">Featured books</h2>
          <Link to="/books" className="text-sm font-medium text-accent hover:underline">View all</Link>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {featured.map((b) => <BookCard key={b.id} book={b} />)}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">Browse by genre</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <Link
              key={c}
              to="/books"
              search={{ category: c }}
              className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium hover:bg-secondary"
            >
              {c}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}