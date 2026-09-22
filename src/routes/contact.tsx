import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/storefront";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BIG B CRAFT — Accra, Ghana" },
      {
        name: "description",
        content:
          "Reach BIG B CRAFT on WhatsApp or by phone for orders, delivery updates and bespoke custom slipper requests in Accra, Ghana.",
      },
      { property: "og:title", content: "Contact BIG B CRAFT — Accra, Ghana" },
      { property: "og:description", content: "Talk to our team about orders, deliveries and custom designs." },
    ],
  }),
  component: ContactPage,
});
