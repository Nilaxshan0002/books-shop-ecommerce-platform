import { Quote } from "lucide-react";

const reviews = [
  { name: "Maya R.", text: "My copy of Dune arrived wrapped in kraft paper with a handwritten note. Lovely touch." },
  { name: "Tom H.", text: "Great selection and quick delivery. The shop feels like a real neighbourhood bookstore." },
  { name: "Elena S.", text: "I found a gorgeous Austen set here and the prices were fair. Will order again." },
];

export function Testimonials() {
  return (
    <section className="bg-secondary/50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Loved by readers</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-xl border border-border/50 bg-card p-6 transition-colors hover:border-accent/50">
              <Quote className="h-6 w-6 text-accent" />
              <blockquote className="mt-3 text-sm leading-relaxed">{r.text}</blockquote>
              <figcaption className="mt-4 text-sm font-semibold">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}