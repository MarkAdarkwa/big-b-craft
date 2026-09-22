CREATE TABLE public.products (
  id bigint PRIMARY KEY,
  name text NOT NULL,
  price numeric NOT NULL,
  category text NOT NULL,
  tag text,
  image text,
  gallery text[],
  description text,
  sizes int[],
  colors jsonb,
  rating numeric DEFAULT 4.5,
  review_count int DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE public.orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  phone text NOT NULL,
  address text,
  notes text,
  items jsonb NOT NULL,
  total numeric NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.products TO anon;
GRANT SELECT ON public.products TO authenticated;
GRANT ALL ON public.products TO service_role;

GRANT INSERT ON public.orders TO anon;
GRANT INSERT ON public.orders TO authenticated;
GRANT ALL ON public.orders TO service_role;

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read products" ON public.products FOR SELECT USING (true);
CREATE POLICY "Anyone can place an order" ON public.orders FOR INSERT WITH CHECK (true);

INSERT INTO public.products (id, name, price, category, tag, description, sizes, rating, review_count) VALUES
(1, 'Golden Cone', 400, 'Women', 'bestseller', 'A crisp white cross-strap thong finished with a hand-cast golden cone stud and a delicate gold emblem. Genuine leather sole, soft footbed, effortlessly elegant.', ARRAY[36,37,38,39,40,41,42], 4.7, 114),
(2, 'Royal Sankofa', 420, 'Men', 'bestseller', 'Deep brown leather thong with a woven strap and a hand-cast Sankofa bird charm — the Akan symbol for learning from the past. A statement of heritage and pride.', ARRAY[40,41,42,43,44,45,46], 4.2, 145),
(3, 'The Leopard King', 490, 'Men', 'bestseller', 'Bold leopard-print strap set against a matte black sole, crowned with a jeweled lion emblem. Unapologetically striking — made for those who lead the room.', ARRAY[40,41,42,43,44,45,46], 4.4, 207),
(4, 'Forest Cross', 420, 'Men', 'new', 'Emerald green crossed straps over a black textured sole, finished with a subtle engraved badge. A fresh, confident everyday sandal.', ARRAY[40,41,42,43,44,45,46], 4.4, 87),
(5, 'Playman', 550, 'Men', 'bestseller', 'Statement platform thong in royal blue suede with a hand-cast gold gecko charm — a symbol of adaptability and versatility. Bold, playful, unmistakably BIG B CRAFT.', ARRAY[40,41,42,43,44,45,46], 4.8, 82),
(6, 'Midnight Marble', 420, 'Men', 'new', 'Black suede strap with a hand-finished gold marbled pattern and a textured gold button. Understated luxury for the modern gentleman.', ARRAY[40,41,42,43,44,45,46], 4.7, 229),
(7, 'Emerald Bow', 400, 'Women', 'new', 'Soft emerald suede thong tied with a golden-yellow ribbon bow and a signature gold charm. Playful, feminine, and finished entirely by hand.', ARRAY[36,37,38,39,40,41,42], 4.9, 84),
(8, 'Cross Trail', 390, 'Men', 'popular', 'Minimalist black suede slide with crisp white cross-stitch detailing on a cushioned sole. Clean, versatile, built for everyday wear.', ARRAY[40,41,42,43,44,45,46], 4.3, 218),
(9, 'Royal Kolinski Flat', 390, 'Men', 'bestseller', 'Woven charcoal cross-strap slide set on a natural jute-textured sole. Inspired by Northern Ghana''s basket-weaving heritage — relaxed, textured, refined.', ARRAY[40,41,42,43,44,45,46], 4.5, 211),
(10, 'Abrantepa', 390, 'Men', 'popular', 'Clean crossed leather straps on an all-black platform sole. "Abrantepa" — the fine young man — built for easy, confident everyday wear.', ARRAY[40,41,42,43,44,45,46], 4.2, 170),
(11, 'Ohene ba', 400, 'Women', 'bestseller', 'Black velvet thong strap adorned with a striking gold royal emblem. "Ohene ba" — a chief''s child — for those who wear their heritage with pride.', ARRAY[36,37,38,39,40,41,42], 4.4, 57),
(12, 'Cedar Walk', 400, 'Men', 'new', 'Rich cognac suede thong with a hand-carved wooden bead accent and an engraved metal charm. Earthy, tactile, and full of character.', ARRAY[40,41,42,43,44,45,46], 4.6, 270),
(13, 'Obsidian Shine', 400, 'Women', 'popular', 'Black glitter strap studded with faceted stones and a soft velvet pom accent. A glamorous evening thong with a comfortable cushioned sole.', ARRAY[36,37,38,39,40,41,42], 4.2, 309),
(14, 'Major Etiki', 420, 'Women', 'popular', 'Woven bronze strap over a dusty rose sole, finished with a bold gold monogram emblem. A refined pair that blends texture and color with ease.', ARRAY[36,37,38,39,40,41,42], 4.4, 98),
(15, 'Amazing Chaw', 400, 'Women', 'bestseller', 'Vivid purple glitter strap embellished with faceted gemstones and a velvet button. Playful, glamorous, and made for standing out.', ARRAY[36,37,38,39,40,41,42], 4.7, 228),
(16, '3nso Nyame Y3', 420, 'Men', 'popular', 'Matte black thong with hand-cast gold eagle and anchor emblems. "3nso Nyame y3" — nothing is impossible with God — strength worn with meaning.', ARRAY[40,41,42,43,44,45,46], 4.6, 75),
(17, 'Golden Stool', 420, 'Men', 'bestseller', 'Intricately woven black leather strap crowned with a gold emblem inspired by the Golden Stool — the sacred symbol of Ashanti unity and royalty.', ARRAY[40,41,42,43,44,45,46], 4.4, 317),
(18, 'African Giant', 450, 'Women', 'new', 'Soft blush pink sole with a deep red velvet strap and a hand-cast gold elephant charm. A graceful nod to strength and gentle power.', ARRAY[36,37,38,39,40,41,42], 4.7, 185),
(19, 'Lion King', 450, 'Men', 'bestseller', 'Forest green suede thong finished with a bold gold lion-head emblem. A regal, commanding pair for those who lead.', ARRAY[40,41,42,43,44,45,46], 4.8, 220),
(20, 'Adepa', 420, 'Women', 'new', 'Vivid turquoise suede thong with a royal blue crossed strap and a hand-cast gold charm. "Adepa" — a good and beautiful thing — bright and joyful.', ARRAY[36,37,38,39,40,41,42], 4.2, 133),
(21, 'Gye Nyame', 400, 'Men', 'bestseller', 'Sleek black leather thong featuring the iconic Gye Nyame adinkra symbol — the supremacy of God — in hand-cast gold. Timeless and meaningful.', ARRAY[40,41,42,43,44,45,46], 4.8, 70),
(22, 'Signature', 400, 'Men', 'popular', 'Warm tan leather strap crossed with a woven bronze panel, finished with a textured gold ball. The house signature — refined, textured, unmistakable.', ARRAY[40,41,42,43,44,45,46], 4.8, 58),
(23, 'Daakye', 400, 'Women', 'bestseller', 'Black velvet thong with a hand-cast gold emblem of Ghana. "Daakye" — the future — a piece made to be worn for years to come.', ARRAY[36,37,38,39,40,41,42], 4.5, 151);

UPDATE public.products SET
  image = 'product-' || lpad(id::text, 2, '0'),
  gallery = ARRAY['product-' || lpad(id::text, 2, '0'), 'product-' || lpad(id::text, 2, '0')],
  colors = (
    SELECT jsonb_agg(jsonb_build_object('name', c.name, 'swatch', c.swatch, 'image', 'product-' || lpad(products.id::text, 2, '0')))
    FROM (VALUES ('Red', '#CC2200'), ('Blue', '#1B3A6B'), ('Green', '#2D5016'), ('White', '#F5F5F0'), ('Gold', '#C9A040')) AS c(name, swatch)
  );