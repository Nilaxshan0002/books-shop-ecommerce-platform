import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

interface WishlistValue {
  ids: string[];
  count: number;
  has: (id: string) => boolean;
  toggle: (id: string) => boolean;
}

const WishlistContext = createContext<WishlistValue | null>(null);
const STORAGE_KEY = "bookshop-wishlist";

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setIds(JSON.parse(raw));
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  }, [ids, loaded]);

  const value = useMemo<WishlistValue>(
    () => ({
      ids,
      count: ids.length,
      has: (id) => ids.includes(id),
      toggle: (id) => {
        const adding = !ids.includes(id);
        setIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
        console.log("Wishlist toggled", id, adding);
        return adding;
      },
    }),
    [ids],
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}