import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { toast } from "../hooks/use-toast";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Page & Ink" },
      { name: "description", content: "Get in touch with the Page & Ink team." },
    ],
  }),
  component: Contact,
});

const info = [
  { icon: Mail, text: "hello@pageandink.example" },
  { icon: MapPin, text: "12 Folio Lane, Booktown" },
  { icon: Clock, text: "Mon-Sat, 9am to 6pm" },
];

function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold md:text-4xl">Contact us</h1>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <ul className="space-y-4">
          {info.map((i) => (
            <li key={i.text} className="flex items-center gap-3">
              <i.icon className="h-5 w-5 text-accent" />
              {i.text}
            </li>
          ))}
        </ul>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: send the message by email once Resend is connected in Settings > Integrations.
            toast({ title: "Email is not connected yet", description: "Connect Resend in Settings to deliver messages." });
          }}
        >
          <div className="space-y-2"><Label htmlFor="c-name">Name</Label><Input id="c-name" required /></div>
          <div className="space-y-2"><Label htmlFor="c-email">Email</Label><Input id="c-email" type="email" required /></div>
          <div className="space-y-2"><Label htmlFor="c-msg">Message</Label><Textarea id="c-msg" rows={5} required /></div>
          <Button type="submit">Send message</Button>
        </form>
      </div>
    </div>
  );
}