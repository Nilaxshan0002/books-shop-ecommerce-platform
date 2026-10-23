import { Heart } from "lucide-react";
import { cn } from "../lib/utils";
import { useWishlist } from "../hooks/use-wishlist";
import { toast } from "../hooks/use-toast";
import type { Book } from "../data/books";

export function WishlistButton({ book, className }: { book: Book; className?: string }) {
  const { has, toggle } = useWishlist();
  const active = has(book.id);
  return (
    <button
      type="button"
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full bg-background/90 shadow transition-colors hover:bg-background",
        className,
      )}
      onClick={() => {
        const added = toggle(book.id);
        toast({ title: added ? "Saved to wishlist" : "Removed from wishlist", description: book.title });
      }}
    >
      <Heart className={cn("h-4 w-4", active ? "fill-accent text-accent" : "text-foreground")} />
    </button>
  );
}