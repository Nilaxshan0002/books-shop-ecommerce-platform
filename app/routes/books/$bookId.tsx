import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Star } from "lucide-react";
import { BookCover } from "../../components/BookCover";
import { BookCard } from "../../components/BookCard";
import { AddToCartButton } from "../../components/AddToCartButton";
import { books, getBook } from "../../data/books";

export const Route = createFileRoute("/books/$bookId")({
  loader: ({ params }) => {
    const book = getBook(params.bookId);
    if (!book) throw notFound();
    return book;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Book"} - Page & Ink` },
      { name: "description", content: loaderData?.description ?? "" },
      { property: "og:title", content: loaderData?.title ?? "Book" },
      { property: "og:description", content: loaderData?.description ?? "" },
    ],
  }),
  component: BookPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold">Book not found</h1>
      <Link to="/books" className="mt-4 inline-block text-accent hover:underline">Back to the shop</Link>
    </div>
  ),
});

function BookPage() {
  const book = Route.useLoaderData();
  const related = books.filter((b) => b.category === book.category && b.id !== book.id).slice(0, 4);
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Link to="/books" className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="w-4 h-4" /> Back to shop
      </Link>
      <div className="grid gap-10 md:grid-cols-[280px_1fr]">
        <BookCover book={book} />
        <div>
          <p className="text-xs uppercase tracking-wider text-accent">{book.category}</p>
          <h1 className="mt-1 text-3xl font-bold md:text-4xl">{book.title}</h1>
          <p className="mt-1 text-lg text-muted-foreground">by {book.author}</p>
          <div className="mt-3 flex items-center gap-1">
            <Star className="w-4 h-4 fill-accent text-accent" /> {book.rating}
          </div>
          <p className="mt-6 max-w-xl leading-relaxed">{book.description}</p>
          <dl className="mt-6 flex gap-8 text-sm">
            <div><dt className="text-muted-foreground">Pages</dt><dd className="font-medium">{book.pages}</dd></div>
            <div><dt className="text-muted-foreground">Published</dt><dd className="font-medium">{book.year}</dd></div>
          </dl>
          <p className="mt-8 text-3xl font-semibold">${book.price.toFixed(2)}</p>
          <div className="mt-4"><AddToCartButton book={book} size="lg" /></div>
        </div>
      </div>
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-6 text-2xl font-bold">More in {book.category}</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {related.map((b) => <BookCard key={b.id} book={b} />)}
          </div>
        </section>
      )}
    </div>
  );
}