import { cn } from "../lib/utils";
import type { Book } from "../data/books";

export function BookCover({ book, className }: { book: Book; className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[2/3] w-full overflow-hidden rounded-md bg-gradient-to-br p-5 text-white shadow-md flex flex-col justify-between",
        book.cover,
        className,
      )}
    >
      <div className="absolute inset-y-0 left-0 w-2 bg-black/20" />
      <div className="pl-2">
        <div className="h-px w-8 bg-white/60 mb-3" />
        <h3 className="font-serif text-lg md:text-xl font-semibold leading-tight">{book.title}</h3>
      </div>
      <p className="pl-2 text-xs uppercase tracking-widest text-white/80">{book.author}</p>
    </div>
  );
}