import { getBook } from "../data/books";
import type { CartItem } from "../hooks/use-cart";

export function getCartTotals(items: CartItem[]) {
  const lines = items.flatMap((i) => {
    const book = getBook(i.id);
    return book ? [{ book, quantity: i.quantity }] : [];
  });
  const subtotal = lines.reduce((s, l) => s + l.book.price * l.quantity, 0);
  const shipping = subtotal === 0 || subtotal >= 35 ? 0 : 4.99;
  return { lines, subtotal, shipping, total: subtotal + shipping };
}