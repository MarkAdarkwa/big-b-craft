import { createFileRoute } from "@tanstack/react-router";
import { CartPage, useCart, usePageNavigate } from "@/components/storefront";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — BIG B CRAFT" },
      { name: "description", content: "Review the handmade slippers in your BIG B CRAFT cart before checkout." },
      { property: "og:title", content: "Your Cart — BIG B CRAFT" },
      { property: "og:description", content: "Review your BIG B CRAFT order before checkout." },
    ],
  }),
  component: CartRoute,
});

function CartRoute() {
  const { cartItems, updateQty, removeItem } = useCart();
  const navigatePage = usePageNavigate();
  return (
    <CartPage
      cartItems={cartItems}
      onUpdateQty={updateQty}
      onRemove={removeItem}
      onNavigate={navigatePage}
    />
  );
}
