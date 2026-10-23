import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useCart } from "../hooks/use-cart";
import { toast } from "../hooks/use-toast";
import { getCartTotals } from "../lib/cart-totals";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout - Page & Ink" },
      { name: "description", content: "Complete your book order." },
    ],
  }),
  component: Checkout,
});

function Checkout() {
  const { items, clear } = useCart();
  const [orderId, setOrderId] = useState<string | null>(null);
  const { lines, subtotal, shipping, total } = getCartTotals(items);

  if (orderId) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-accent" />
        <h1 className="mt-4 text-3xl font-bold">Thank you for your order</h1>
        <p className="mt-2 text-muted-foreground">Order {orderId} is confirmed. A summary is on its way.</p>
        <Button asChild className="mt-6"><Link to="/books">Keep browsing</Link></Button>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold">Nothing to check out</h1>
        <Button asChild className="mt-6"><Link to="/books">Browse books</Link></Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold md:text-4xl">Checkout</h1>
      <div className="grid gap-10 md:grid-cols-[1fr_320px]">
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const id = `PI-${Math.floor(100000 + Math.random() * 900000)}`;
            console.log("Order placed", id);
            clear();
            setOrderId(id);
            toast({ title: "Order placed", description: id });
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2"><Label htmlFor="name">Full name</Label><Input id="name" required /></div>
            <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" required /></div>
          </div>
          <div className="space-y-2"><Label htmlFor="address">Address</Label><Input id="address" required /></div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2"><Label htmlFor="city">City</Label><Input id="city" required /></div>
            <div className="space-y-2"><Label htmlFor="zip">Postcode</Label><Input id="zip" required /></div>
          </div>
          <p className="text-sm text-muted-foreground">Payment is not connected yet. Orders are confirmed without charging a card.</p>
          <Button type="submit" size="lg" className="w-full">Place order</Button>
        </form>
        <aside className="h-fit rounded-xl border border-border/50 bg-card p-6">
          <h2 className="text-xl font-semibold">Summary</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {lines.map((l) => (
              <li key={l.book.id} className="flex justify-between gap-2">
                <span>{l.book.title} x {l.quantity}</span>
                <span>${(l.book.price * l.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-2 border-t border-border pt-4 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></div>
            <div className="flex justify-between text-base font-semibold"><span>Total</span><span>${total.toFixed(2)}</span></div>
          </div>
        </aside>
      </div>
    </div>
  );
}