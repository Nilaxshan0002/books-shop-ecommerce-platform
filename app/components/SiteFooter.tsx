import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-serif text-lg font-bold text-primary">Page &amp; Ink</p>
          <p className="text-sm text-muted-foreground">Independent bookshop. Good stories, delivered.</p>
        </div>
        <div className="flex gap-5 text-sm text-muted-foreground">
          <Link to="/books" className="hover:text-foreground">Shop</Link>
          <Link to="/cart" className="hover:text-foreground">Cart</Link>
        </div>
        <p className="text-xs text-muted-foreground">2026 Page &amp; Ink. All rights reserved.</p>
      </div>
    </footer>
  );
}