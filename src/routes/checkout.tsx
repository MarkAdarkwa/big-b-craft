import { createFileRoute } from "@tanstack/react-router";
import { CheckoutPage, useCart, usePageNavigate } from "@/components/storefront";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — BIG B CRAFT" },
      {
        name: "description",
        content: "Enter your delivery details and confirm your BIG B CRAFT order on WhatsApp.",
      },
      { property: "og:title", content: "Checkout — BIG B CRAFT" },
      { property: "og:description", content: "Confirm your handmade slipper order with BIG B CRAFT." },
    ],
  }),
  component: CheckoutRoute,
});

function CheckoutRoute() {
  const { cartItems } = useCart();
  const navigatePage = usePageNavigate();
  return <CheckoutPage cartItems={cartItems} onNavigate={navigatePage} />;
}
