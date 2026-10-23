import { categories } from "../data/books";

export function GenreMarquee() {
  const items = [...categories, ...categories, ...categories, ...categories];
  return (
    <div className="overflow-hidden border-y border-border bg-secondary/60 py-4">
      <div className="flex w-max animate-marquee gap-10 font-serif text-xl text-primary">
        {items.map((c, i) => (
          <span key={i} className="flex items-center gap-10">
            {c}
            <span className="text-accent">&#9733;</span>
          </span>
        ))}
      </div>
    </div>
  );
}