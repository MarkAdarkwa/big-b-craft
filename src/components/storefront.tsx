import { useState, useEffect, useRef, createContext, useContext } from "react";
import { useNavigate } from "@tanstack/react-router";
import { fetchProductRows, logOrder, type ProductRow } from "@/lib/shop";
import logoImg from "@/assets/logo.jpg";
import product01Img from "@/assets/products/product-01.jpg";
import product02Img from "@/assets/products/product-02.jpg";
import product03Img from "@/assets/products/product-03.jpg";
import product04Img from "@/assets/products/product-04.jpg";
import product05Img from "@/assets/products/product-05.jpg";
import product06Img from "@/assets/products/product-06.jpg";
import product07Img from "@/assets/products/product-07.jpg";
import product08Img from "@/assets/products/product-08.jpg";
import product09Img from "@/assets/products/product-09.jpg";
import product10Img from "@/assets/products/product-10.jpg";
import product11Img from "@/assets/products/product-11.jpg";
import product12Img from "@/assets/products/product-12.jpg";
import product13Img from "@/assets/products/product-13.jpg";
import product14Img from "@/assets/products/product-14.jpg";
import product15Img from "@/assets/products/product-15.jpg";
import product16Img from "@/assets/products/product-16.jpg";
import product17Img from "@/assets/products/product-17.jpg";
import product18Img from "@/assets/products/product-18.jpg";
import product19Img from "@/assets/products/product-19.jpg";
import product20Img from "@/assets/products/product-20.jpg";
import product21Img from "@/assets/products/product-21.jpg";
import product22Img from "@/assets/products/product-22.jpg";
import product23Img from "@/assets/products/product-23.jpg";
import product24Img from "@/assets/products/product-24.jpg";
import product25Img from "@/assets/products/product-25.jpg";
import product26Img from "@/assets/products/product-26.jpg";
import product27Img from "@/assets/products/product-27.jpg";
import product28Img from "@/assets/products/product-28.jpg";
import product29Img from "@/assets/products/product-29.jpg";
import product30Img from "@/assets/products/product-30.jpg";
import product31Img from "@/assets/products/product-31.jpg";
import product32Img from "@/assets/products/product-32.jpg";
import product33Img from "@/assets/products/product-33.jpg";
import product34Img from "@/assets/products/product-34.jpg";
import product35Img from "@/assets/products/product-35.jpg";
import product36Img from "@/assets/products/product-36.jpg";
import product37Img from "@/assets/products/product-37.jpg";
import product38Img from "@/assets/products/product-38.jpg";
import product39Img from "@/assets/products/product-39.jpg";
import product40Img from "@/assets/products/product-40.jpg";
import product41Img from "@/assets/products/product-41.jpg";
import product42Img from "@/assets/products/product-42.jpg";
import product43Img from "@/assets/products/product-43.jpg";
import product44Img from "@/assets/products/product-44.jpg";
import product45Img from "@/assets/products/product-45.jpg";
import product46Img from "@/assets/products/product-46.jpg";
import product47Img from "@/assets/products/product-47.jpg";

// ---- Types ----
type Page = "home" | "shop" | "product" | "cart" | "checkout" | "contact";

interface ProductColor {
  name: string;
  swatch: string;
  image: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: "Men" | "Women" | "Custom";
  tag: "bestseller" | "new" | "popular";
  image: string;
  gallery: string[];
  description: string;
  sizes: number[];
  colors: ProductColor[];
  rating: number;
  reviewCount: number;
}

interface CartItem {
  product: Product;
  size: number;
  quantity: number;
}

// ---- Slideshow data ----
const slides = [
  {
    image: product01Img,
    eyebrow: "Handcrafted in Ghana — Est. 2012",
    headline: "Tradition.\nCrafted.\nWorn.",
    sub: "Every slipper carries centuries of Ghanaian heritage — hand-woven, hand-stitched, made to last.",
    cta: "Shop the Collection",
  },
  {
    image: product02Img,
    eyebrow: "Best Sellers 2026",
    headline: "Worn by\nRoyalty.\nMade for All.",
    sub: "Our most-loved styles, crafted by Accra's finest artisans using authentic kente weaves.",
    cta: "See Best Sellers",
  },
  {
    image: product03Img,
    eyebrow: "Bespoke Custom Designs",
    headline: "Your Name.\nYour Pattern.\nYour Heritage.",
    sub: "Commission a fully bespoke pair with your chosen kente, your name embossed, your legacy worn.",
    cta: "Order Custom",
  },
];

// ---- Product data ----
// ---- Product data now lives in Supabase (see src/lib/supabase.ts) ----
// Maps the image "slug" stored in the database to the actual bundled photo.
const productImageMap: Record<string, string> = {
  "product-01": product01Img,
  "product-02": product02Img,
  "product-03": product03Img,
  "product-04": product04Img,
  "product-05": product05Img,
  "product-06": product06Img,
  "product-07": product07Img,
  "product-08": product08Img,
  "product-09": product09Img,
  "product-10": product10Img,
  "product-11": product11Img,
  "product-12": product12Img,
  "product-13": product13Img,
  "product-14": product14Img,
  "product-15": product15Img,
  "product-16": product16Img,
  "product-17": product17Img,
  "product-18": product18Img,
  "product-19": product19Img,
  "product-20": product20Img,
  "product-21": product21Img,
  "product-22": product22Img,
  "product-23": product23Img,
  "product-24": product24Img,
  "product-25": product25Img,
  "product-26": product26Img,
  "product-27": product27Img,
  "product-28": product28Img,
  "product-29": product29Img,
  "product-30": product30Img,
  "product-31": product31Img,
  "product-32": product32Img,
  "product-33": product33Img,
  "product-34": product34Img,
  "product-35": product35Img,
  "product-36": product36Img,
  "product-37": product37Img,
  "product-38": product38Img,
  "product-39": product39Img,
  "product-40": product40Img,
  "product-41": product41Img,
  "product-42": product42Img,
  "product-43": product43Img,
  "product-44": product44Img,
  "product-45": product45Img,
  "product-46": product46Img,
  "product-47": product47Img,
};

function resolveImg(slug: string): string {
  return productImageMap[slug] ?? slug;
}

function mapRowToProduct(row: ProductRow): Product {
  return {
    id: row.id,
    name: row.name,
    price: row.price,
    category: row.category,
    tag: row.tag,
    image: resolveImg(row.image),
    gallery: row.gallery.map(resolveImg),
    description: row.description,
    sizes: row.sizes,
    colors: row.colors.map((c) => ({ ...c, image: resolveImg(c.image) })),
    rating: row.rating,
    reviewCount: row.review_count,
  };
}

const ProductsContext = createContext<{
  products: Product[];
  loading: boolean;
  error: string | null;
}>({
  products: [],
  loading: true,
  error: null,
});

function useProducts() {
  return useContext(ProductsContext);
}

// ---- Hooks ----
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`fade-up ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ---- Star Rating ----
function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => {
          const fill = Math.min(1, Math.max(0, rating - (i - 1)));
          return (
            <div key={i} className="relative w-3 h-3 flex-shrink-0">
              {/* Empty star */}
              <svg className="absolute inset-0" viewBox="0 0 24 24" fill="none">
                <polygon
                  points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                  stroke="#D1D5DB"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
              {/* Filled star — clipped by percentage */}
              <svg
                className="absolute inset-0"
                viewBox="0 0 24 24"
                fill="#111"
                style={{ clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)` }}
              >
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
            </div>
          );
        })}
      </div>
      <span className="text-[10px] text-gray-400 leading-none">
        {rating.toFixed(1)} <span className="text-gray-300">({count})</span>
      </span>
    </div>
  );
}

// ---- WAIcon ----
function WAIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ---- SMSIcon ----
function SMSIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

// ---- Business contact number & SMS link helper ----
// Same shop number used for WhatsApp — update in one place if it ever changes.
export const BUSINESS_PHONE_INTL = "+233206967386"; // used for tel: and sms: links
export const BUSINESS_PHONE_WA = "233206967386"; // used for wa.me links (no leading +)

function buildSmsHref(body: string) {
  // "?body=" is understood by modern iOS (8+) and Android messaging apps alike.
  return `sms:${BUSINESS_PHONE_INTL}?body=${body}`;
}

// ---- Label ----
function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-[9px] tracking-[0.35em] text-gray-400 uppercase mb-2">{children}</p>;
}

// ---- Product Card ----
function ProductCard({
  product,
  onAddToCart,
  onViewProduct,
}: {
  product: Product;
  onAddToCart: (p: Product) => void;
  onViewProduct: (p: Product) => void;
}) {
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [added, setAdded] = useState(false);
  const activeColor = product.colors[selectedColorIdx];
  const displayImage = activeColor?.image ?? product.image;

  function handleAdd(e: React.MouseEvent) {
    e.stopPropagation();
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div
      className="group bg-white w-full rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:shadow-black/5 transition-shadow duration-300 cursor-pointer"
      onClick={() => onViewProduct(product)}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-50 aspect-square rounded-t-2xl">
        <img
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.tag === "new" && (
          <span className="absolute top-3 left-3 bg-black text-white text-[8px] tracking-[0.2em] px-2.5 py-1 uppercase font-semibold rounded-full">
            New
          </span>
        )}
        {product.tag === "bestseller" && (
          <span className="absolute top-3 left-3 bg-white text-black text-[8px] tracking-[0.2em] px-2.5 py-1 uppercase font-semibold border border-black/15 rounded-full">
            Best Seller
          </span>
        )}
      </div>

      {/* Info */}
      <div className="px-3 pt-3 pb-4" onClick={(e) => e.stopPropagation()}>
        <p className="text-[9px] tracking-widest text-gray-400 uppercase mb-0.5">
          {product.category}
        </p>
        <h3
          className="text-sm font-semibold text-black leading-snug mb-1.5 cursor-pointer"
          onClick={() => onViewProduct(product)}
        >
          {product.name}
        </h3>
        {/* Star rating */}
        <div className="mb-2.5">
          <StarRating rating={product.rating} count={product.reviewCount} />
        </div>

        {/* Color swatches */}
        <div className="flex items-center gap-1.5 mb-3">
          {product.colors.map((color, i) => (
            <button
              key={color.name}
              title={color.name}
              onClick={() => setSelectedColorIdx(i)}
              className={`w-4 h-4 rounded-full border-2 transition-all hover:scale-110 ${
                i === selectedColorIdx
                  ? "border-black scale-110"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              style={{ backgroundColor: color.swatch }}
            />
          ))}
          <span className="text-[9px] text-gray-400 ml-0.5">{activeColor?.name}</span>
        </div>

        {/* Price + Add to cart */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-black">GH&#8373; {product.price}</span>
          <button
            onClick={handleAdd}
            className={`text-[9px] tracking-[0.15em] uppercase border px-3 py-1.5 font-semibold rounded-lg transition-all ${
              added
                ? "bg-black text-white border-black"
                : "border-black text-black hover:bg-black hover:text-white"
            }`}
          >
            {added ? "Added!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// HERO SLIDESHOW
// ============================================================

function HeroSlideshow({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function resetTimer() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((a) => (a + 1) % slides.length);
    }, 5500);
  }

  useEffect(() => {
    resetTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  function goTo(i: number) {
    setActive(i);
    resetTimer();
  }

  function prev() {
    goTo((active - 1 + slides.length) % slides.length);
  }
  function next() {
    goTo((active + 1) % slides.length);
  }

  return (
    <section className="relative bg-black overflow-hidden" style={{ minHeight: "90vh" }}>
      {/* Slides stack (crossfade) */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 1 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.headline.replace(/\n/g, " ")}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Slide content */}
          <div
            className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-8"
            style={{ paddingBottom: "5rem" }}
          >
            <div className="max-w-2xl">
              <p
                className="text-[9px] tracking-[0.45em] text-gray-400 uppercase mb-5"
                style={{ opacity: i === active ? 1 : 0, transition: "opacity 0.8s ease 0.3s" }}
              >
                {slide.eyebrow}
              </p>
              <h1
                className="font-black text-white leading-[0.88] mb-6 whitespace-pre-line"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(3rem, 9vw, 6.5rem)",
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? "translateY(0)" : "translateY(16px)",
                  transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
                }}
              >
                {slide.headline}
              </h1>
              <p
                className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-md"
                style={{
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? "translateY(0)" : "translateY(12px)",
                  transition: "opacity 0.8s ease 0.35s, transform 0.8s ease 0.35s",
                }}
              >
                {slide.sub}
              </p>
              <div
                className="flex flex-wrap gap-4 items-center"
                style={{
                  opacity: i === active ? 1 : 0,
                  transition: "opacity 0.8s ease 0.5s",
                }}
              >
                <button
                  onClick={() => onNavigate("shop")}
                  className="bg-white text-black px-8 py-4 text-[10px] tracking-[0.25em] uppercase font-bold hover:bg-gray-100 transition-colors rounded-xl"
                >
                  {slide.cta}
                </button>
                <a
                  href="https://wa.me/233206967386?text=Hello"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-white/30 text-white px-6 py-4 text-[10px] tracking-[0.2em] uppercase font-medium hover:border-white transition-colors rounded-xl"
                >
                  <WAIcon /> Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Stats strip */}
      <div className="absolute bottom-0 right-0 z-10 hidden md:flex">
        {[
          { n: "12+", l: "Years Crafting" },
          { n: "4K+", l: "Happy Customers" },
          { n: "100%", l: "Handmade" },
        ].map((s) => (
          <div
            key={s.l}
            className="bg-white/8 backdrop-blur-md border-t border-white/15 px-8 py-5 text-white text-center"
          >
            <div className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              {s.n}
            </div>
            <div className="text-[9px] tracking-[0.2em] text-white/50 mt-1 uppercase">{s.l}</div>
          </div>
        ))}
      </div>

      {/* Arrow controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors rounded-full border border-white/20"
        aria-label="Previous slide"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors rounded-full border border-white/20"
        aria-label="Next slide"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "bg-white w-8" : "bg-white/40 w-1.5"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

// ============================================================
// HEADER
// ============================================================

export function Header({
  cartCount,
  onNavigate,
}: {
  cartCount: number;
  onNavigate: (p: Page) => void;
}) {
  const [mobileSearch, setMobileSearch] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={() => onNavigate("home")}
            className="flex-shrink-0 text-left flex items-center gap-2.5"
          >
            <img
              src={logoImg}
              alt="BIG B CRAFT logo"
              className="w-9 h-9 md:w-10 md:h-10 object-contain rounded-full"
            />
            <div>
              <div
                className="text-lg md:text-xl font-black tracking-[0.15em] text-black uppercase"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                BIG B CRAFT
              </div>
              <div className="text-[8px] tracking-[0.25em] text-gray-400 uppercase hidden sm:block">
                Ghanaian Traditional Slippers
              </div>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-1.5 text-xs text-gray-500 flex-shrink-0 border-l border-gray-200 pl-5">
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>
              Delivering to: <strong className="text-black font-semibold">Accra, Ghana</strong>
            </span>
          </div>

          <div className="flex-1 max-w-lg mx-auto hidden md:block">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search styles, patterns..."
                className="w-full pl-9 pr-4 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="ml-auto flex items-center gap-2 md:gap-3 flex-shrink-0">
            <button
              className="md:hidden p-2 hover:opacity-70"
              onClick={() => setMobileSearch((v) => !v)}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <a
              href="https://wa.me/233206967386?text=Hello"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 bg-black text-white px-3 py-2 text-[10px] font-semibold tracking-widest uppercase hover:bg-gray-800 transition-colors rounded-xl"
            >
              <WAIcon />
              <span className="hidden md:inline">Order via WhatsApp</span>
            </a>
            <button
              onClick={() => onNavigate("cart")}
              className="relative p-2 hover:opacity-70 transition-opacity"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-0.5 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
        {mobileSearch && (
          <div className="mt-3 md:hidden">
            <input
              type="text"
              placeholder="Search styles, patterns..."
              autoFocus
              className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-black"
            />
          </div>
        )}
      </div>
    </header>
  );
}

// ---- NavBar ----
export function NavBar({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const links: { label: string; page: Page }[] = [
    { label: "Home", page: "home" },
    { label: "Shop All", page: "shop" },
    { label: "Men", page: "shop" },
    { label: "Women", page: "shop" },
    { label: "Custom Designs", page: "shop" },
    { label: "About", page: "home" },
    { label: "Contact", page: "contact" },
  ];
  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex overflow-x-auto scrollbar-hide">
          {links.map((link) => (
            <li key={link.label} className="flex-shrink-0">
              <button
                onClick={() => onNavigate(link.page)}
                className="px-4 py-3 text-[10px] tracking-[0.15em] uppercase font-medium hover:bg-white hover:text-black transition-colors whitespace-nowrap"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// ============================================================
// HOME PAGE SECTIONS
// ============================================================

function BestSellersCarousel({
  onAddToCart,
  onViewProduct,
}: {
  onAddToCart: (p: Product) => void;
  onViewProduct: (p: Product) => void;
}) {
  const { products } = useProducts();
  const scrollRef = useRef<HTMLDivElement>(null);
  const bestSellers = products.filter((p) => p.tag === "bestseller");
  function scroll(dir: "left" | "right") {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" });
  }
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeUp>
          <div className="flex items-end justify-between mb-8">
            <div>
              <Label>Curated Selection</Label>
              <h2
                className="text-3xl md:text-4xl font-bold text-black"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Best Sellers
              </h2>
            </div>
            <div className="flex gap-1.5">
              {(["left", "right"] as const).map((dir) => (
                <button
                  key={dir}
                  onClick={() => scroll(dir)}
                  className="w-9 h-9 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  aria-label={`Scroll ${dir}`}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points={dir === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </FadeUp>
        <div ref={scrollRef} className="flex gap-5 overflow-x-auto scrollbar-hide pb-2">
          {bestSellers.map((product) => (
            <div key={product.id} className="w-64 flex-shrink-0">
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
                onViewProduct={onViewProduct}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewArrivalsSection({
  onAddToCart,
  onViewProduct,
}: {
  onAddToCart: (p: Product) => void;
  onViewProduct: (p: Product) => void;
}) {
  const { products } = useProducts();
  const newArrivals = products.filter((p) => p.tag === "new").slice(0, 4);
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeUp>
          <div className="text-center mb-12">
            <Label>Just Dropped</Label>
            <h2
              className="text-3xl md:text-4xl font-bold text-black"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              New Arrivals
            </h2>
          </div>
        </FadeUp>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {newArrivals.map((product, i) => (
            <FadeUp key={product.id} delay={i * 90}>
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
                onViewProduct={onViewProduct}
              />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShopByCategorySection({ onNavigate }: { onNavigate: (p: Page) => void }) {
  const cats = [
    { name: "Men", desc: "Bold lines, artisan craft", image: product21Img },
    { name: "Women", desc: "Elegantly hand-woven", image: product14Img },
  ];
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeUp>
          <div className="text-center mb-12">
            <Label>Collections</Label>
            <h2
              className="text-3xl md:text-4xl font-bold text-black"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Shop by Category
            </h2>
          </div>
        </FadeUp>
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          {cats.map((cat, i) => (
            <FadeUp key={cat.name} delay={i * 100}>
              <button onClick={() => onNavigate("shop")} className="group w-full text-left block">
                <div
                  className="relative overflow-hidden bg-gray-200 rounded-2xl"
                  style={{ aspectRatio: "3/4" }}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-2xl" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-2xl" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span
                      className="text-white text-base font-bold tracking-wide block"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {cat.name}
                    </span>
                    <span className="text-white/70 text-[10px] mt-0.5 block">{cat.desc}</span>
                  </div>
                </div>
              </button>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function CraftStorySection({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <FadeUp>
          <div>
            <Label>Our Story</Label>
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Rooted in Ghanaian Craft
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4 text-sm md:text-base">
              BIG B CRAFT was born from a deep respect for Ghana&#39;s rich textile traditions. Each
              pair is hand-stitched by skilled artisans in Accra, using authentic kente weaves and
              natural leather.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8 text-sm">
              We carry centuries of culture in every step &mdash; from the loom to your doorstep.
            </p>
            <button
              onClick={() => onNavigate("shop")}
              className="border border-white text-white px-8 py-3 text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-white hover:text-black transition-colors rounded-xl"
            >
              Explore Collection
            </button>
          </div>
        </FadeUp>
        <FadeUp delay={150}>
          <div className="overflow-hidden bg-gray-900 rounded-2xl" style={{ aspectRatio: "4/3" }}>
            <img
              src={product13Img}
              alt="Ghanaian artisans in traditional dress"
              className="w-full h-full object-cover opacity-75 hover:opacity-90 transition-opacity duration-500"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
export function HomePage({
  onAddToCart,
  onNavigate,
  onViewProduct,
}: {
  onAddToCart: (p: Product) => void;
  onNavigate: (p: Page) => void;
  onViewProduct: (p: Product) => void;
}) {
  return (
    <>
      <HeroSlideshow onNavigate={onNavigate} />
      <BestSellersCarousel onAddToCart={onAddToCart} onViewProduct={onViewProduct} />
      <NewArrivalsSection onAddToCart={onAddToCart} onViewProduct={onViewProduct} />
      <ShopByCategorySection onNavigate={onNavigate} />
      <CraftStorySection onNavigate={onNavigate} />
    </>
  );
}

// ============================================================
// SHOP ALL PAGE
// ============================================================

type SortOption = "popular" | "price-asc" | "price-desc" | "newest";

export function ShopAllPage({
  onAddToCart,
  onViewProduct,
}: {
  onAddToCart: (p: Product) => void;
  onViewProduct: (p: Product) => void;
}) {
  const { products } = useProducts();
  const [activeCategory, setActiveCategory] = useState("All");
  const [sort, setSort] = useState<SortOption>("popular");
  const categories = ["All", "Men", "Women", "Custom"];
  const filtered = [...products]
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "newest") return b.id - a.id;
      return 0;
    });
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Label>Explore</Label>
          <h1
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Shop All
          </h1>
          <p className="text-gray-500 mt-3 text-sm">{filtered.length} styles available</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-100">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[9px] tracking-[0.2em] uppercase font-semibold rounded-xl transition-colors ${activeCategory === cat ? "bg-black text-white" : "border border-gray-200 text-gray-500 hover:border-black hover:text-black"}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[9px] text-gray-400 uppercase tracking-wider">Sort</span>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="text-xs border border-gray-200 pl-3 pr-8 py-2 rounded-xl bg-white focus:outline-none focus:border-black cursor-pointer appearance-none"
              >
                <option value="popular">Popularity</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
              <svg
                className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {filtered.map((product, i) => (
            <FadeUp key={product.id} delay={(i % 4) * 70}>
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
                onViewProduct={onViewProduct}
              />
            </FadeUp>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-28 text-gray-300">
            <p className="text-sm tracking-widest uppercase">No products in this category</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================
// PRODUCT DETAIL PAGE
// ============================================================

export function ProductDetailPage({
  product,
  onAddToCart,
  onNavigate,
}: {
  product: Product;
  onAddToCart: (p: Product, size: number) => void;
  onNavigate: (p: Page) => void;
}) {
  const { products } = useProducts();
  const [activeImg, setActiveImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [added, setAdded] = useState(false);
  const [sizeError, setSizeError] = useState(false);
  const touchStartX = useRef(0);
  const viewProduct = useViewProduct();

  const displayGallery = [...product.gallery];
  if (product.colors[selectedColorIdx]?.image) {
    displayGallery[0] = product.colors[selectedColorIdx].image.replace(
      "w=480&h=480",
      "w=800&h=800",
    );
  }

  function handleAddToCart() {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    onAddToCart(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }
  function buildWAText() {
    const size = selectedSize ? `Size ${selectedSize}` : "Size TBC";
    const colorName = product.colors[selectedColorIdx]?.name ?? "";
    return encodeURIComponent(
      `Hello BIG B CRAFT! I would like to order:\n\n*${product.name}* (${colorName}, ${size})\nPrice: GH₵ ${product.price}\n\nPlease confirm availability and delivery.`,
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center gap-2 text-[10px] text-gray-400 tracking-wider uppercase">
          <button onClick={() => onNavigate("home")} className="hover:text-black transition-colors">
            Home
          </button>
          <span>/</span>
          <button onClick={() => onNavigate("shop")} className="hover:text-black transition-colors">
            Shop All
          </button>
          <span>/</span>
          <span className="text-black">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div>
            <div
              className="relative overflow-hidden bg-gray-100 aspect-square mb-3 select-none rounded-2xl"
              onTouchStart={(e) => {
                touchStartX.current = e.touches[0]?.clientX ?? 0;
              }}
              onTouchEnd={(e) => {
                const diff = touchStartX.current - (e.changedTouches[0]?.clientX ?? 0);
                if (diff > 50) setActiveImg((i) => (i + 1) % displayGallery.length);
                if (diff < -50)
                  setActiveImg((i) => (i - 1 + displayGallery.length) % displayGallery.length);
              }}
            >
              <img
                key={`${activeImg}-${selectedColorIdx}`}
                src={displayGallery[activeImg]}
                alt={`${product.name} view ${activeImg + 1}`}
                className="w-full h-full object-cover"
                style={{ animation: "heroIn 0.3s ease" }}
              />
              <button
                onClick={() =>
                  setActiveImg((i) => (i - 1 + displayGallery.length) % displayGallery.length)
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 flex items-center justify-center hover:bg-black hover:text-white transition-colors rounded-full shadow-sm"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={() => setActiveImg((i) => (i + 1) % displayGallery.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 flex items-center justify-center hover:bg-black hover:text-white transition-colors rounded-full shadow-sm"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {displayGallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`h-1.5 rounded-full transition-all ${i === activeImg ? "bg-black w-4" : "bg-black/25 w-1.5"}`}
                  />
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              {displayGallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-1 aspect-square overflow-hidden bg-gray-100 rounded-xl border-2 transition-colors ${i === activeImg ? "border-black" : "border-transparent hover:border-gray-300"}`}
                >
                  <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="mb-1">
              <p className="text-[9px] tracking-[0.3em] text-gray-400 uppercase">
                {product.category}
              </p>
              {product.tag === "bestseller" && (
                <span className="inline-block mt-2 border border-black text-[8px] tracking-[0.2em] px-2.5 py-1 uppercase font-semibold rounded-full">
                  Best Seller
                </span>
              )}
              {product.tag === "new" && (
                <span className="inline-block mt-2 bg-black text-white text-[8px] tracking-[0.2em] px-2.5 py-1 uppercase font-semibold rounded-full">
                  New Arrival
                </span>
              )}
            </div>
            <h1
              className="text-3xl md:text-4xl font-bold text-black mt-3 mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {product.name}
            </h1>

            <div className="mb-4">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            <p className="text-2xl font-black text-black mb-5 tracking-wide">
              GH&#8373; {product.price}
            </p>
            <div className="w-12 h-px bg-gray-200 mb-5" />
            <p className="text-sm text-gray-600 leading-relaxed mb-6">{product.description}</p>

            {/* Color selector */}
            <div className="mb-6">
              <p className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-3">
                Colour:{" "}
                <span className="font-normal text-gray-500">
                  {product.colors[selectedColorIdx]?.name}
                </span>
              </p>
              <div className="flex gap-2.5">
                {product.colors.map((color, i) => (
                  <button
                    key={color.name}
                    title={color.name}
                    onClick={() => {
                      setSelectedColorIdx(i);
                      setActiveImg(0);
                    }}
                    className={`w-8 h-8 rounded-full border-4 transition-all hover:scale-110 ${i === selectedColorIdx ? "border-black scale-110" : "border-gray-200 hover:border-gray-400"}`}
                    style={{ backgroundColor: color.swatch }}
                  />
                ))}
              </div>
            </div>

            {/* Size selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] tracking-[0.2em] uppercase font-semibold">
                  Select Size (EU)
                </p>
                <button className="text-[10px] text-gray-400 underline tracking-wider">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                      setSizeError(false);
                    }}
                    className={`w-12 h-11 text-xs font-medium border rounded-xl transition-all ${selectedSize === size ? "bg-black text-white border-black" : "border-gray-200 text-gray-700 hover:border-black"}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {sizeError && (
                <p className="text-red-500 text-[10px] mt-2 tracking-wide">
                  Please select a size before adding to cart.
                </p>
              )}
            </div>
            <div className="flex flex-col gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className={`w-full py-4 text-[10px] tracking-[0.25em] uppercase font-bold rounded-xl transition-all ${added ? "bg-gray-700 text-white" : "bg-black text-white hover:bg-gray-800"}`}
              >
                {added ? "Added to Cart!" : "Add to Cart"}
              </button>
              <a
                href={`https://wa.me/233206967386?text=${buildWAText()}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  logOrder({
                    customerName: "(via product page)",
                    phone: "",
                    address: "",
                    items: [
                      {
                        productId: product.id,
                        name: product.name,
                        size: selectedSize ?? product.sizes[0] ?? 0,
                        quantity: 1,
                        price: product.price,
                      },
                    ],
                    total: product.price,
                  }).then(({ error }) => {
                    if (error) console.error("Order logging failed:", error);
                  });
                }}
                className="w-full py-4 border-2 border-black text-black text-[10px] tracking-[0.25em] uppercase font-bold hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 rounded-xl"
              >
                <WAIcon /> Order via WhatsApp
              </a>
            </div>

            <div className="border-t border-gray-100 pt-6 grid grid-cols-3 gap-4">
              {[
                { icon: "✦", label: "100% Handmade" },
                { icon: "◎", label: "Free Returns" },
                { icon: "◈", label: "Delivered to Door" },
              ].map((b) => (
                <div key={b.label} className="text-center bg-gray-50 rounded-xl py-3">
                  <div className="text-base mb-1 text-gray-400">{b.icon}</div>
                  <div className="text-[9px] tracking-wider text-gray-500 uppercase">{b.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-100">
            <FadeUp>
              <div className="mb-8">
                <Label>You May Also Like</Label>
                <h2
                  className="text-2xl font-bold text-black"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Related Products
                </h2>
              </div>
            </FadeUp>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {related.map((p, i) => (
                <FadeUp key={p.id} delay={i * 80}>
                  <ProductCard
                    product={p}
                    onAddToCart={(pr) => onAddToCart(pr, pr.sizes[0] ?? 0)}
                    onViewProduct={(pr) => viewProduct(pr)}
                  />
                </FadeUp>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================
// CART PAGE
// ============================================================
export function CartPage({
  cartItems,
  onUpdateQty,
  onRemove,
  onNavigate,
}: {
  cartItems: CartItem[];
  onUpdateQty: (pid: number, size: number, qty: number) => void;
  onRemove: (pid: number, size: number) => void;
  onNavigate: (p: Page) => void;
}) {
  const subtotal = cartItems.reduce((s, i) => s + i.product.price * i.quantity, 0);
  const total = subtotal;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
        <svg
          className="text-gray-200 mb-6"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        <h2
          className="text-2xl font-bold text-black mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Your cart is empty
        </h2>
        <p className="text-sm text-gray-400 mb-8">Looks like you haven&#39;t added anything yet.</p>
        <button
          onClick={() => onNavigate("shop")}
          className="bg-black text-white px-8 py-3 text-[10px] tracking-[0.25em] uppercase font-bold hover:bg-gray-800 transition-colors rounded-xl"
        >
          Browse Collection
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Label>Review</Label>
          <h1
            className="text-4xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your Cart
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-0 divide-y divide-gray-100">
            {cartItems.map((item) => (
              <div key={`${item.product.id}-${item.size}`} className="flex gap-5 py-6">
                <div className="flex-shrink-0 w-24 h-24 bg-gray-100 overflow-hidden rounded-2xl">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[9px] tracking-widest text-gray-400 uppercase mb-0.5">
                        {item.product.category}
                      </p>
                      <h3 className="text-sm font-semibold text-black">{item.product.name}</h3>
                      <p className="text-[10px] text-gray-400 mt-1">Size: EU {item.size}</p>
                    </div>
                    <button
                      onClick={() => onRemove(item.product.id, item.size)}
                      className="text-gray-300 hover:text-black transition-colors flex-shrink-0"
                      aria-label="Remove item"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => onUpdateQty(item.product.id, item.size, item.quantity - 1)}
                        className="w-9 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-black transition-colors text-lg leading-none"
                      >
                        &minus;
                      </button>
                      <span className="w-10 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQty(item.product.id, item.size, item.quantity + 1)}
                        className="w-9 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-black transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-sm font-bold text-black">
                      GH&#8373; {item.product.price * item.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="border border-gray-100 rounded-2xl p-6 sticky top-24">
              <h2
                className="text-base font-bold text-black mb-6 tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Order Summary
              </h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>GH&#8373; {subtotal}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span className="text-gray-500">Discuss after order</span>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-4 mb-6">
                <div className="flex justify-between text-base font-bold text-black">
                  <span>Total</span>
                  <span>GH&#8373; {total}</span>
                </div>
              </div>
              <button
                onClick={() => onNavigate("checkout")}
                className="w-full bg-black text-white py-4 text-[10px] tracking-[0.25em] uppercase font-bold hover:bg-gray-800 transition-colors mb-3 rounded-xl"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={() => onNavigate("shop")}
                className="w-full border border-gray-200 text-gray-500 py-3 text-[10px] tracking-[0.2em] uppercase font-medium hover:border-black hover:text-black transition-colors rounded-xl"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// CHECKOUT PAGE
// ============================================================

export function CheckoutPage({
  cartItems,
  onNavigate,
}: {
  cartItems: CartItem[];
  onNavigate: (p: Page) => void;
}) {
  const [form, setForm] = useState({ name: "", phone: "", address: "", notes: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const subtotal = cartItems.reduce((s, i) => s + i.product.price * i.quantity, 0);
  const total = subtotal;

  function validate() {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.address.trim()) e.address = "Delivery address is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function buildMsg() {
    const lines = [
      "*NEW ORDER — BIG B CRAFT*",
      "",
      "*Customer Details*",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Address: ${form.address}`,
      form.notes ? `Notes: ${form.notes}` : "",
      "",
      "*Order Items*",
      ...cartItems.map(
        (i) =>
          `• ${i.product.name} (EU ${i.size}) x${i.quantity} — GH₵ ${i.product.price * i.quantity}`,
      ),
      "",
      `Subtotal: GH₵ ${subtotal}`,
      `Shipping: Discuss after order`,
      `*Total: GH₵ ${total}*`,
    ].filter(Boolean);
    return encodeURIComponent(lines.join("\n"));
  }

  // Plain-text version for SMS — no markdown, and trimmed so it stays
  // readable inside standard multi-part text messages.
  function buildSmsMsg() {
    const itemLines = cartItems
      .map((i) => `${i.product.name} (EU ${i.size}) x${i.quantity}`)
      .join(", ");
    const lines = [
      "NEW ORDER - BIG B CRAFT",
      `Name: ${form.name}`,
      `Address: ${form.address}`,
      form.notes ? `Notes: ${form.notes}` : "",
      `Items: ${itemLines}`,
      `Total: GH₵ ${total} (shipping: discuss after order)`,
    ].filter(Boolean);
    return encodeURIComponent(lines.join("\n"));
  }

  function submitOrder(channel: "whatsapp" | "sms") {
    if (!validate()) return;
    logOrder({
      customerName: form.name,
      phone: form.phone,
      address: form.address,
      notes: channel === "sms" ? `[via SMS] ${form.notes ?? ""}`.trim() : form.notes,
      items: cartItems.map((i) => ({
        productId: i.product.id,
        name: i.product.name,
        size: i.size,
        quantity: i.quantity,
        price: i.product.price,
      })),
      total,
    }).then(({ error }) => {
      if (error) console.error("Order logging failed:", error);
    });
    if (channel === "sms") {
      window.location.href = buildSmsHref(buildSmsMsg());
    } else {
      window.open(`https://wa.me/${BUSINESS_PHONE_WA}?text=${buildMsg()}`, "_blank");
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    submitOrder("whatsapp");
  }

  function handleSmsSubmit(e: React.MouseEvent) {
    e.preventDefault();
    submitOrder("sms");
  }

  const inputCls = (f: keyof typeof form) =>
    `w-full border px-4 py-3 text-sm focus:outline-none transition-colors bg-white rounded-xl ${errors[f] ? "border-red-300 focus:border-red-400" : "border-gray-200 focus:border-black"}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Label>Secure Checkout</Label>
          <h1
            className="text-4xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Complete Your Order
          </h1>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <div className="bg-white p-6 md:p-8 border border-gray-100 rounded-2xl">
              <h2 className="text-[11px] tracking-[0.2em] uppercase font-bold text-black mb-6">
                Delivery Information
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Kwame Mensah"
                    className={inputCls("name")}
                  />
                  {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-2">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+233 20 696 7386"
                    className={inputCls("phone")}
                  />
                  {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-2">
                    Delivery Address *
                  </label>
                  <textarea
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    placeholder="House number, street, area, city"
                    rows={3}
                    className={`${inputCls("address")} resize-none`}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-[10px] mt-1">{errors.address}</p>
                  )}
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-2">
                    Order Notes <span className="text-gray-300 normal-case">(optional)</span>
                  </label>
                  <textarea
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    placeholder="Special instructions, gift message..."
                    rows={3}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors bg-white resize-none rounded-xl"
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-4 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2.5 rounded-xl"
                  >
                    <WAIcon /> Submit Order via WhatsApp
                  </button>
                  <p className="text-[10px] text-gray-400 text-center mt-3 leading-relaxed">
                    Your order details open as a pre-filled WhatsApp message. We confirm within 2
                    hours.
                  </p>
                  <div className="flex items-center gap-3 my-4">
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-[9px] tracking-[0.2em] uppercase text-gray-400">Or</span>
                    <div className="flex-1 h-px bg-gray-200" />
                  </div>
                  <button
                    type="button"
                    onClick={handleSmsSubmit}
                    className="w-full border border-black text-black py-4 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2.5 rounded-xl"
                  >
                    <SMSIcon /> Submit Order via SMS
                  </button>
                  <p className="text-[10px] text-gray-400 text-center mt-3 leading-relaxed">
                    No WhatsApp? Send your order as a text message instead — same confirmation time.
                  </p>
                </div>
              </form>
            </div>
            <button
              onClick={() => onNavigate("cart")}
              className="mt-4 flex items-center gap-2 text-[10px] text-gray-400 hover:text-black transition-colors tracking-wider uppercase"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>{" "}
              Back to Cart
            </button>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 sticky top-24">
              <h2 className="text-[11px] tracking-[0.2em] uppercase font-bold text-black mb-5">
                Order Summary
              </h2>
              <div className="space-y-4 mb-5">
                {cartItems.map((item) => (
                  <div key={`${item.product.id}-${item.size}`} className="flex gap-3">
                    <div className="w-14 h-14 bg-gray-100 flex-shrink-0 overflow-hidden rounded-xl">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-black leading-tight truncate">
                        {item.product.name}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-0.5">
                        EU {item.size} &times; {item.quantity}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-black flex-shrink-0">
                      GH&#8373; {item.product.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 pt-4 space-y-2.5">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Subtotal</span>
                  <span>GH&#8373; {subtotal}</span>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Shipping</span>
                  <span>Discuss after order</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-black pt-2 border-t border-gray-100">
                  <span>Total</span>
                  <span>GH&#8373; {total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// CONTACT PAGE
// ============================================================

export function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `*Message from BIG B CRAFT Website*\n\nFrom: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );
    window.open(`https://wa.me/233206967386?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-black py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Label>Get in Touch</Label>
          <h1
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact Us
          </h1>
          <p className="text-gray-500 mt-3 text-sm">
            We typically respond within 2 hours during business hours.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-14">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-20">
          <FadeUp>
            <div className="space-y-8">
              <div>
                <p className="text-[9px] tracking-[0.3em] text-gray-400 uppercase mb-3">
                  Direct Order Line
                </p>
                <a
                  href="https://wa.me/233206967386?text=Hello%20BIG%20B%20CRAFT%2C%20I%20need%20help."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-black text-white px-5 py-4 hover:bg-gray-900 transition-colors rounded-xl sm:inline-flex"
                >
                  <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489
1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase font-bold">
                      WhatsApp Us
                    </div>
                    <div className="text-gray-400 text-xs mt-0.5">+233 20 696 7386</div>
                  </div>
                </a>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.3em] text-gray-400 uppercase mb-3">
                  Call for Delayed Orders
                </p>
                <a
                  href="tel:+233206967386"
                  className="flex items-center gap-3 border border-black text-black px-5 py-4 hover:bg-black hover:text-white transition-colors rounded-xl sm:inline-flex"
                >
                  <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.36 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l.99-.99a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase font-bold">Call Us</div>
                    <div className="text-[11px] mt-0.5 opacity-60">+233 20 696 7386</div>
                  </div>
                </a>
                <p className="text-[10px] text-gray-400 mt-2 leading-relaxed max-w-xs">
                  Call if your order has been pending more than 48 hours.
                </p>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.3em] text-gray-400 uppercase mb-3">
                  No WhatsApp? Text Us
                </p>
                <a
                  href={buildSmsHref(encodeURIComponent("Hello BIG B CRAFT, I need help."))}
                  className="flex items-center gap-3 border border-black text-black px-5 py-4 hover:bg-black hover:text-white transition-colors rounded-xl sm:inline-flex"
                >
                  <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center">
                    <SMSIcon />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase font-bold">
                      Text (SMS) Us
                    </div>
                    <div className="text-[11px] mt-0.5 opacity-60">+233 20 696 7386</div>
                  </div>
                </a>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.3em] text-gray-400 uppercase mb-4">
                  Business Hours
                </p>
                <div className="space-y-2.5">
                  {[
                    { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
                    { day: "Saturday", hours: "9:00 AM – 4:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((row) => (
                    <div
                      key={row.day}
                      className="flex justify-between items-center border-b border-gray-100 pb-2.5"
                    >
                      <span className="text-xs text-gray-600">{row.day}</span>
                      <span
                        className={`text-xs font-semibold ${row.hours === "Closed" ? "text-gray-300" : "text-black"}`}
                      >
                        {row.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.3em] text-gray-400 uppercase mb-2">Location</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  14 Craft Lane, East Legon
                  <br />
                  Accra, Ghana
                </p>
                <p className="text-[10px] text-gray-400 mt-1">
                  Walk-in visits by appointment only.
                </p>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={120}>
            <div className="bg-gray-50 p-6 md:p-8 border border-gray-100 rounded-2xl">
              <h2 className="text-[11px] tracking-[0.2em] uppercase font-bold text-black mb-6">
                Send a Message
              </h2>
              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-4xl mb-4">&#10003;</div>
                  <p className="text-sm font-semibold text-black mb-1">
                    Message sent via WhatsApp!
                  </p>
                  <p className="text-xs text-gray-400">We&#39;ll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ama Boateng"
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ama@email.com"
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your order, inquiry, or custom design request..."
                      rows={5}
                      className="w-full border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors resize-none rounded-xl"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-4 text-[10px] tracking-[0.25em] uppercase font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 rounded-xl"
                  >
                    <WAIcon /> Send via WhatsApp
                  </button>
                  <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                    Your message will open in WhatsApp for you to confirm and send.
                  </p>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// FOOTER
// ============================================================

export function Footer({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <img
            src={logoImg}
            alt="BIG B CRAFT logo"
            className="w-10 h-10 object-contain rounded-full mb-3"
          />
          <div
            className="text-lg font-black tracking-[0.15em] uppercase text-white mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            BIG B CRAFT
          </div>
          <p className="text-xs text-gray-600 leading-relaxed max-w-xs">
            Handmade Ghanaian traditional slippers. Crafted with authenticity, delivered worldwide.
          </p>
        </div>
        <div>
          <p className="text-[9px] tracking-[0.25em] text-gray-600 uppercase mb-4">Navigate</p>
          <ul className="space-y-2">
            {(["Home", "Shop All", "Contact"] as const).map((item) => (
              <li key={item}>
                <button
                  onClick={() =>
                    onNavigate(
                      item === "Shop All" ? "shop" : item === "Contact" ? "contact" : "home",
                    )
                  }
                  className="text-xs text-gray-500 hover:text-white transition-colors tracking-wider"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[9px] tracking-[0.25em] text-gray-600 uppercase mb-4">Order Direct</p>
          <a
            href="https://wa.me/233206967386"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 text-[10px] tracking-widest uppercase font-bold hover:bg-gray-100 transition-colors rounded-xl"
          >
            <WAIcon /> WhatsApp Order
          </a>
          <p className="text-[10px] text-gray-600 mt-4">+233 20 696 7386</p>
          <p className="text-[10px] text-gray-600">Accra, Ghana</p>
        </div>
      </div>
      <div className="border-t border-gray-900 py-5 text-center">
        <p className="text-[10px] text-gray-700 tracking-wider">
          &copy; 2026 BIG B CRAFT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ============================================================
// CART + PRODUCTS PROVIDERS AND SITE LAYOUT
// ============================================================

interface CartApi {
  cartItems: CartItem[];
  cartCount: number;
  addToCart: (product: Product, size?: number) => void;
  updateQty: (pid: number, size: number, qty: number) => void;
  removeItem: (pid: number, size: number) => void;
}

const CartContext = createContext<CartApi | null>(null);

export function useCart(): CartApi {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside SiteLayout");
  return ctx;
}

export { useProducts };
export type { Product, CartItem, Page };

export function usePageNavigate() {
  const navigate = useNavigate();
  return (p: Page) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (p === "shop" || p === "product") {
      navigate({ to: "/shop" });
      return;
    }
    if (p === "cart") {
      navigate({ to: "/cart" });
      return;
    }
    if (p === "checkout") {
      navigate({ to: "/checkout" });
      return;
    }
    if (p === "contact") {
      navigate({ to: "/contact" });
      return;
    }
    navigate({ to: "/" });
  };
}

export function useViewProduct() {
  const navigate = useNavigate();
  return (product: Product) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate({ to: "/product/$id", params: { id: String(product.id) } });
  };
}

const CART_KEY = "bigbcraft-cart";
interface StoredCartLine {
  id: number;
  size: number;
  quantity: number;
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [cartLines, setCartLines] = useState<StoredCartLine[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigatePage = usePageNavigate();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data, error: err } = await fetchProductRows();
      if (cancelled) return;
      if (err) setError(err);
      else if (data) setProducts(data.map(mapRowToProduct));
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CART_KEY);
      if (raw) setCartLines(JSON.parse(raw) as StoredCartLine[]);
    } catch {
      /* ignore unreadable cart */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cartLines));
    } catch {
      /* ignore */
    }
  }, [cartLines]);

  const cartItems: CartItem[] = cartLines.flatMap((line) => {
    const product = products.find((p) => p.id === line.id);
    return product ? [{ product, size: line.size, quantity: line.quantity }] : [];
  });
  const cartCount = cartItems.reduce((s, i) => s + i.quantity, 0);

  function addToCart(product: Product, size?: number) {
    const sz = size ?? product.sizes[Math.floor(product.sizes.length / 2)] ?? product.sizes[0] ?? 0;
    setCartLines((prev) => {
      const existing = prev.find((l) => l.id === product.id && l.size === sz);
      if (existing)
        return prev.map((l) =>
          l.id === product.id && l.size === sz ? { ...l, quantity: l.quantity + 1 } : l,
        );
      return [...prev, { id: product.id, size: sz, quantity: 1 }];
    });
  }

  function updateQty(pid: number, size: number, qty: number) {
    if (qty <= 0) {
      setCartLines((prev) => prev.filter((l) => !(l.id === pid && l.size === size)));
      return;
    }
    setCartLines((prev) =>
      prev.map((l) => (l.id === pid && l.size === size ? { ...l, quantity: qty } : l)),
    );
  }

  function removeItem(pid: number, size: number) {
    setCartLines((prev) => prev.filter((l) => !(l.id === pid && l.size === size)));
  }

  return (
    <ProductsContext.Provider value={{ products, loading, error }}>
      <CartContext.Provider value={{ cartItems, cartCount, addToCart, updateQty, removeItem }}>
        <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
          <Header cartCount={cartCount} onNavigate={navigatePage} />
          <NavBar onNavigate={navigatePage} />
          {error && (
            <div className="bg-amber-50 border-b border-amber-200 text-amber-800 text-xs md:text-sm text-center py-2 px-4">
              Couldn&#39;t load products right now. Please refresh in a moment.
            </div>
          )}
          {loading ? (
            <div className="text-center py-24 text-gray-400 text-xs tracking-widest uppercase">
              Loading products…
            </div>
          ) : (
            children
          )}
          <Footer onNavigate={navigatePage} />
        </div>
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
}
