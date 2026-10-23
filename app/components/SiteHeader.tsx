import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { BookOpen, Heart, Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "../hooks/use-cart";
import { useWishlist } from "../hooks/use-wishlist";

const links = [
  { to: "/", label: "Home" },
  { to: "/books", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const { count } = useCart();
  const wishlist = useWishlist();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 font-serif text-xl font-bold text-primary">
          <BookOpen className="h-5 w-5" />
          Page &amp; Ink
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-muted-foreground hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/wishlist" aria-label="Wishlist" className="relative rounded-full p-2 hover:bg-secondary">
            <Heart className="h-5 w-5" />
            {wishlist.count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 rounded-full bg-accent px-1.5 text-[10px] text-accent-foreground">
                {wishlist.count}
              </span>
            )}
          </Link>
          <Link to="/cart" className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
            <ShoppingBag className="h-4 w-4" />
            Cart
            {count > 0 && <span className="ml-1 rounded-full bg-accent px-1.5 text-xs text-accent-foreground">{count}</span>}
          </Link>
          <button type="button" aria-label="Menu" className="rounded-full p-2 hover:bg-secondary md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-4 py-3 md:hidden">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}