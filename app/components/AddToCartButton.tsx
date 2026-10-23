import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "../hooks/use-cart";
import { toast } from "../hooks/use-toast";
import type { Book } from "../data/books";

export function AddToCartButton({ book, size = "default" }: { book: Book; size?: "default" | "sm" | "lg" }) {
  const { add } = useCart();
  return (
    <Button
      size={size}
      onClick={() => {
        add(book.id);
        console.log("Added to cart", book.id);
        toast({ title: "Added to cart", description: book.title });
      }}
    >
      <ShoppingBag className="w-4 h-4 mr-2" />
      Add to cart
    </Button>
  );
}