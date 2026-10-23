const stats = [
  { value: "12k+", label: "Books shipped" },
  { value: "4.8", label: "Average rating" },
  { value: "48h", label: "Fast delivery" },
  { value: "100%", label: "Independent" },
];

export function StatsStrip() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border/50 bg-card p-6 text-center">
            <p className="font-serif text-3xl font-bold text-primary">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}