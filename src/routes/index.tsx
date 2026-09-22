import { createFileRoute } from "@tanstack/react-router";
import { HomePage, useCart, usePageNavigate, useViewProduct } from "@/components/storefront";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BIG B CRAFT — Handmade Ghanaian Slippers" },
      {
        name: "description",
        content:
          "Handcrafted Ghanaian traditional slippers, hand-woven and hand-stitched in Accra. Shop best sellers, new arrivals and bespoke custom pairs.",
      },
      { property: "og:title", content: "BIG B CRAFT — Handmade Ghanaian Slippers" },
      {
        property: "og:description",
        content: "Handcrafted Ghanaian traditional slippers, made in Accra and delivered to your door.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { addToCart } = useCart();
  const navigatePage = usePageNavigate();
  const viewProduct = useViewProduct();
  return <HomePage onAddToCart={(p) => addToCart(p)} onNavigate={navigatePage} onViewProduct={viewProduct} />;
}
