import { cn } from "../lib/utils";
import type { Book } from "../data/books";

export function BookCover({ book, className }: { book: Book; className?: string }) {
  return (
    <div
      className={cn(
        "relative aspect-[2/3] w-full overflow-hidden rounded-md bg-gradient-to-br p-5 text-white shadow-lg flex flex-col justify-between",
        book.cover,
        className,
      )}
    >
      <svg className="absolute inset-0 h-full w-full opacity-15" aria-hidden="true">
        <defs>
          <pattern id={`dots-${book.id}`} width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#dots-${book.id})`} />
      </svg>
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full border-[14px] border-white/10" />
      <div className="absolute inset-y-0 left-0 w-2 bg-black/25" />
      <div className="relative pl-2">
        <div className="mb-3 h-px w-8 bg-white/60" />
        <h3 className="font-serif text-lg font-semibold leading-tight md:text-xl">{book.title}</h3>
      </div>
      <p className="relative pl-2 text-xs uppercase tracking-widest text-white/80">{book.author}</p>
    </div>
  );
}