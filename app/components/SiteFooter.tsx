import { Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { categories } from "../data/books";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <p className="flex items-center gap-2 font-serif text-xl font-bold">
            <BookOpen className="h-5 w-5" /> Page &amp; Ink
          </p>
          <p className="mt-3 max-w-sm text-sm text-primary-foreground/70">
            An independent bookshop. Hand-picked stories, wrapped with care and delivered to your door.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">Explore</p>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/books" className="hover:text-primary-foreground">Shop</Link></li>
            <li><Link to="/wishlist" className="hover:text-primary-foreground">Wishlist</Link></li>
            <li><Link to="/about" className="hover:text-primary-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold">Genres</p>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {categories.map((c) => (
              <li key={c}>
                <Link to="/books" search={{ category: c }} className="hover:text-primary-foreground">{c}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/60">
        2026 Page &amp; Ink. All rights reserved.
      </div>
    </footer>
  );
}