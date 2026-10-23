import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { BookCover } from "./BookCover";
import { AddToCartButton } from "./AddToCartButton";
import type { Book } from "../data/books";

export function BookCard({ book }: { book: Book }) {
  return (
    <div className="group flex flex-col">
      <Link to="/books/$bookId" params={{ bookId: book.id }} className="block transition-opacity hover:opacity-90">
        <BookCover book={book} />
      </Link>
      <div className="mt-4 flex-1">
        <p className="text-xs uppercase tracking-wider text-accent">{book.category}</p>
        <Link to="/books/$bookId" params={{ bookId: book.id }} className="font-serif text-lg font-semibold leading-snug hover:underline">
          {book.title}
        </Link>
        <p className="text-sm text-muted-foreground">{book.author}</p>
        <div className="mt-1 flex items-center gap-1 text-sm">
          <Star className="w-4 h-4 fill-accent text-accent" />
          {book.rating}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="font-semibold">${book.price.toFixed(2)}</span>
        <AddToCartButton book={book} size="sm" />
      </div>
    </div>
  );
}