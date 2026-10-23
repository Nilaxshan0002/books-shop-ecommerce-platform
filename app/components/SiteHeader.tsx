import { Link } from "@tanstack/react-router";
import { BookOpen, ShoppingBag } from "lucide-react";
import { useCart } from "../hooks/use-cart";

export function SiteHeader() {
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-serif text-xl font-bold text-primary">
          <BookOpen className="w-5 h-5" />
          Page &amp; Ink
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium">
          <Link to="/" className="text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground" }} activeOptions={{ exact: true }}>
            Home
          </Link>
          <Link to="/books" className="text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground" }}>
            Shop
          </Link>
          <Link to="/cart" className="relative flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-primary-foreground hover:opacity-90">
            <ShoppingBag className="w-4 h-4" />
            Cart
            {count > 0 && (
              <span className="ml-1 rounded-full bg-accent px-1.5 text-xs text-accent-foreground">{count}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}