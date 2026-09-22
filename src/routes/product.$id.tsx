import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ProductDetailPage,
  useCart,
  usePageNavigate,
  useProducts,
} from "@/components/storefront";

export const Route = createFileRoute("/product/$id")({
  head: () => ({
    meta: [
      { title: "Slipper Details — BIG B CRAFT" },
      {
        name: "description",
        content:
          "See colours, sizes and craft details for this handmade BIG B CRAFT slipper, then order on WhatsApp or add it to your cart.",
      },
      { property: "og:title", content: "Slipper Details — BIG B CRAFT" },
      { property: "og:description", content: "Colours, sizes and craft details for this handmade pair." },
    ],
  }),
  component: ProductRoute,
});

function ProductRoute() {
  const { id } = Route.useParams();
  const { products, loading } = useProducts();
  const { addToCart } = useCart();
  const navigatePage = usePageNavigate();

  const product = products.find((p) => String(p.id) === id);

  if (loading) return null;

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-2xl font-bold text-black mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          This style isn&#39;t available
        </h1>
        <p className="text-sm text-gray-400 mb-6">It may have been renamed or removed.</p>
        <Link
          to="/shop"
          className="bg-black text-white px-8 py-3 text-[10px] tracking-[0.25em] uppercase font-bold rounded-xl hover:bg-gray-800 transition-colors"
        >
          Browse Collection
        </Link>
      </div>
    );
  }

  return (
    <ProductDetailPage
      product={product}
      onAddToCart={(p, size) => addToCart(p, size)}
      onNavigate={navigatePage}
    />
  );
}
