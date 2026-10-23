import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "../hooks/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-accent px-6 py-12 text-center text-accent-foreground md:px-12">
        <h2 className="text-2xl font-bold md:text-3xl">Join the reading club</h2>
        <p className="mx-auto mt-2 max-w-md text-accent-foreground/80">New arrivals and staff picks, once a month.</p>
        <form
          className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Newsletter signup", email);
            toast({ title: "You are on the list", description: email });
            setEmail("");
          }}
        >
          <Input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="bg-background text-foreground"
          />
          <Button type="submit" variant="secondary">Subscribe</Button>
        </form>
      </div>
    </section>
  );
}