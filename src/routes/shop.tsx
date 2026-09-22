import { createFileRoute } from "@tanstack/react-router";
import { ShopAllPage, useCart, useViewProduct } from "@/components/storefront";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop All Slippers — BIG B CRAFT" },
      {
        name: "description",
        content:
          "Browse every BIG B CRAFT style for men, women and custom orders — handmade leather and kente slippers with free delivery on orders above GH₵ 200.",
      },
      { property: "og:title", content: "Shop All Slippers — BIG B CRAFT" },
      {
        property: "og:description",
        content: "Every handmade BIG B CRAFT style for men, women and custom orders.",
      },
    ],
  }),
  component: ShopRoute,
});

function ShopRoute() {
  const { addToCart } = useCart();
  const viewProduct = useViewProduct();
  return <ShopAllPage onAddToCart={(p) => addToCart(p)} onViewProduct={viewProduct} />;
}
