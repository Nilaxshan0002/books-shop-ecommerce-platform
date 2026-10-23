import { createFileRoute, Link } from "@tanstack/react-router";
import { Truck, ShieldCheck, Gift } from "lucide-react";
import { Hero } from "../components/Hero";
import { GenreMarquee } from "../components/GenreMarquee";
import { StatsStrip } from "../components/StatsStrip";
import { Testimonials } from "../components/Testimonials";
import { Newsletter } from "../components/Newsletter";
import { BookCard } from "../components/BookCard";
import { BookCover } from "../components/BookCover";
import { AddToCartButton } from "../components/AddToCartButton";
import { books, categories, getBook } from "../data/books";

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
  const topRated = [...books].sort((a, b) => b.rating - a.rating).slice(0, 4);
  const pick = getBook("fellowship");
  return (
    <div>
      <Hero />
      <GenreMarquee />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {perks.map((p) => (
            <div key={p.title} className="flex items-start gap-3">
              <p.icon className="mt-1 h-5 w-5 text-accent" />
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

      {pick && (
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 rounded-2xl bg-secondary p-8 md:grid-cols-[200px_1fr]">
            <div className="mx-auto w-40 md:w-full"><BookCover book={pick} /></div>
            <div>
              <p className="text-xs uppercase tracking-widest text-accent">Book of the month</p>
              <h2 className="mt-1 text-2xl font-bold md:text-3xl">{pick.title}</h2>
              <p className="text-muted-foreground">by {pick.author}</p>
              <p className="mt-3 max-w-xl leading-relaxed">{pick.description}</p>
              <div className="mt-5 flex items-center gap-4">
                <span className="text-xl font-semibold">${pick.price.toFixed(2)}</span>
                <AddToCartButton book={pick} />
              </div>
            </div>
          </div>
        </section>
      )}

      <StatsStrip />

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Top rated</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {topRated.map((b) => <BookCard key={b.id} book={b} />)}
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
              className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {c}
            </Link>
          ))}
        </div>
      </section>

      <Testimonials />
      <Newsletter />
    </div>
  );
}