import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { BookCover } from "./BookCover";
import { getBook } from "../data/books";

const stack = [
  { id: "dune", cls: "left-0 top-10 w-32 md:w-40 [--rot:-8deg] [animation-delay:0s]" },
  { id: "hobbit", cls: "left-24 top-0 w-36 md:left-32 md:w-44 [--rot:4deg] [animation-delay:1.5s]" },
  { id: "pride-and-prejudice", cls: "left-44 top-16 w-32 md:left-60 md:w-40 [--rot:10deg] [animation-delay:3s]" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
        <div className="animate-fade-in">
          <p className="mb-3 text-sm uppercase tracking-widest text-primary-foreground/70">Independent bookshop</p>
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Find your next favourite story.</h1>
          <p className="mt-4 max-w-md text-lg text-primary-foreground/80">
            Hand-picked classics and modern favourites, shipped to your door.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="secondary">
              <Link to="/books">Browse the shop <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/about">Our story</Link>
            </Button>
          </div>
        </div>
        <div className="relative mx-auto hidden h-72 w-full max-w-sm md:block">
          {stack.map((s) => {
            const book = getBook(s.id);
            return book ? (
              <div key={s.id} className={`absolute animate-float ${s.cls}`}>
                <BookCover book={book} className="p-3 [&_h3]:text-sm" />
              </div>
            ) : null;
          })}
        </div>
      </div>
    </section>
  );
}