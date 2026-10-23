import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { BookCover } from "../components/BookCover";
import { useCart } from "../hooks/use-cart";
import { toast } from "../hooks/use-toast";
import { getBook } from "../data/books";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart - Page & Ink" },
      { name: "description", content: "Review the books in your cart." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, setQuantity, remove, clear } = useCart();
  const lines = items.flatMap((i) => {
    const book = getBook(i.id);
    return book ? [{ book, quantity: i.quantity }] : [];
  });
  const subtotal = lines.reduce((s, l) => s + l.book.price * l.quantity, 0);
  const shipping = subtotal === 0 || subtotal >= 35 ? 0 : 4.99;

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">Find something good to read.</p>
        <Button asChild className="mt-6"><Link to="/books">Browse books</Link></Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold md:text-4xl">Your cart</h1>
      <div className="grid gap-10 md:grid-cols-[1fr_320px]">
        <ul className="divide-y divide-border">
          {lines.map(({ book, quantity }) => (
            <li key={book.id} className="flex gap-4 py-5">
              <div className="w-20 shrink-0"><BookCover book={book} className="p-2 [&_h3]:text-[9px] [&_p]:hidden" /></div>
              <div className="flex-1">
                <Link to="/books/$bookId" params={{ bookId: book.id }} className="font-serif text-lg font-semibold hover:underline">{book.title}</Link>
                <p className="text-sm text-muted-foreground">{book.author}</p>
                <div className="mt-3 flex items-center gap-2">
                  <Button size="icon" variant="outline" className="h-8 w-8" onClick={() => setQuantity(book.id, quantity - 1)}><Minus className="w-3 h-3" /></Button>
                  <span className="w-6 text-center text-sm">{quantity}</span>
                  <Button size="icon" variant="outline" className="h-8 w-8" onClick={() => setQuantity(book.id, quantity + 1)}><Plus className="w-3 h-3" /></Button>
                  <Button size="icon" variant="ghost" className="ml-2 h-8 w-8" onClick={() => remove(book.id)}><Trash2 className="w-4 h-4" /></Button>
                </div>
              </div>
              <p className="font-semibold">${(book.price * quantity).toFixed(2)}</p>
            </li>
          ))}
        </ul>
        <aside className="h-fit rounded-xl border border-border/50 bg-card p-6">
          <h2 className="text-xl font-semibold">Order summary</h2>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></div>
            <div className="flex justify-between border-t border-border pt-3 text-base font-semibold"><span>Total</span><span>${(subtotal + shipping).toFixed(2)}</span></div>
          </div>
          <Button
            className="mt-6 w-full"
            size="lg"
            onClick={() => {
              console.log("Order placed", lines.length);
              clear();
              toast({ title: "Order placed", description: "Thank you for shopping with Page & Ink." });
            }}
          >
            Place order
          </Button>
        </aside>
      </div>
    </div>
  );
}