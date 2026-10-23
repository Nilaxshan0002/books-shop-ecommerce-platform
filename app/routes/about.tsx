import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Leaf, Users } from "lucide-react";
import { Button } from "../components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Page & Ink" },
      { name: "description", content: "The story behind Page & Ink, an independent bookshop." },
      { property: "og:title", content: "About - Page & Ink" },
    ],
  }),
  component: About,
});

const values = [
  { icon: Heart, title: "Curated with care", text: "Every title is read and chosen by our small team." },
  { icon: Leaf, title: "Thoughtful packaging", text: "Recycled paper, no plastic, always." },
  { icon: Users, title: "Community first", text: "A share of every sale supports local libraries." },
];

function About() {
  return (
    <div>
      <section className="bg-gradient-hero py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="animate-fade-in text-3xl font-bold sm:text-4xl md:text-5xl">A small shop with big shelves</h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Page &amp; Ink began as a single table of second-hand paperbacks. Today we ship stories everywhere, with the same care.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-border/50 bg-card p-6">
              <v.icon className="h-8 w-8 text-accent" />
              <h2 className="mt-4 text-xl font-semibold">{v.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg"><Link to="/books">Start browsing</Link></Button>
        </div>
      </section>
    </div>
  );
}