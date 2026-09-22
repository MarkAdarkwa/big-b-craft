-- New arrivals imported from the "bb.pdf" catalog upload.
-- Run this once in the Supabase SQL Editor for your project.
-- Images already live in src/assets/products/product-24.jpg .. product-47.jpg
-- and are wired into src/components/storefront.tsx's productImageMap.

INSERT INTO public.products (id, name, price, category, tag, description, sizes, rating, review_count) VALUES
                                                                                                           (24, 'The General', 420, 'Men', 'bestseller', 'Rich navy suede thong finished with a hand-cast gold flower emblem and signature ball charm. Commanding presence, quiet authority — built for the one who leads.', ARRAY[40,41,42,43,44,45,46], 4.6, 0),
                                                                                                           (25, 'Palace', 400, 'Men', 'new', 'Wine-red leather crossed straps crowned with a bold gold ceremonial crest. Fit for the palace, worn on the street.', ARRAY[40,41,42,43,44,45,46], 4.5, 0),
                                                                                                           (26, 'Golden Coast', 400, 'Men', 'bestseller', 'Green, gold and black crossed straps on a jet sole — a tribute to the Ghanaian flag, finished with a bold matte ball charm. Patriotic and unmistakable.', ARRAY[40,41,42,43,44,45,46], 4.7, 0),
                                                                                                           (27, 'Ahenfo', 400, 'Men', 'new', 'Vivid royal blue leather thong with a delicate gold emblem and signature ball charm. "Ahenfo" — the chiefs — clean, bold, regal.', ARRAY[40,41,42,43,44,45,46], 4.4, 0),
                                                                                                           (28, 'Global Stones', 400, 'Women', 'new', 'Crimson suede thong wrapped in hand-strung red and gold beadwork with a soft velvet pom. Intricate, tactile, entirely handmade.', ARRAY[36,37,38,39,40,41,42], 4.6, 0),
                                                                                                           (29, 'Lovely Royals', 420, 'Women', 'bestseller', 'Black velvet crossed straps on a sculpted platform sole, finished with hand-cast gold link emblems. Modern royalty with a heel.', ARRAY[36,37,38,39,40,41,42], 4.8, 0),
                                                                                                           (30, 'Harmattan', 450, 'Women', 'new', 'Plush white fur strap over a black sole, finished with a sleek onyx charm. Soft, dramatic, made for the Harmattan season chill.', ARRAY[36,37,38,39,40,41,42], 4.5, 0),
                                                                                                           (31, 'Akosua', 420, 'Women', 'bestseller', 'Black velvet crossed straps on a blush pink sole, finished with hand-cast gold flower emblems and a signature ball charm. Soft color, bold detail.', ARRAY[36,37,38,39,40,41,42], 4.7, 0),
                                                                                                           (32, 'Anansi', 420, 'Women', 'new', 'Dove-grey suede thong finished with a hand-cast silver Adinkra mask and beaded trim. A quiet nod to Ghanaian storytelling and craft.', ARRAY[36,37,38,39,40,41,42], 4.5, 0),
                                                                                                           (33, 'Asaase', 420, 'Women', 'new', 'Dusty mauve crochet-textured strap finished with hand-cast gold flower emblems and a bronze charm. Earthy and richly textured.', ARRAY[36,37,38,39,40,41,42], 4.4, 0),
                                                                                                           (34, 'Adom', 420, 'Women', 'new', 'Terracotta bouclé crossed straps finished with a matching pompom. Cozy texture meets bold color — "Adom", meaning grace.', ARRAY[36,37,38,39,40,41,42], 4.6, 0),
                                                                                                           (35, 'BB Classic', 400, 'Men', 'bestseller', 'Black suede slide with a crisp white leather overlay and the house "BB" emblem. Clean, branded, everyday.', ARRAY[40,41,42,43,44,45,46], 4.6, 0),
                                                                                                           (36, 'Anokye', 390, 'Men', 'popular', 'Woven beige and tan straps on a cushioned white sole. Easy, breathable, built for daily wear.', ARRAY[40,41,42,43,44,45,46], 4.3, 0),
                                                                                                           (37, 'Sika', 400, 'Women', 'bestseller', 'Hand-woven gold strap sandal on a matte black sole. "Sika" — gold — for a look that always shines.', ARRAY[36,37,38,39,40,41,42], 4.8, 0),
                                                                                                           (38, 'Adwoa', 400, 'Women', 'new', 'Burnt-orange suede sole with a denim-blue strap and a signature gold ball charm. A playful pop of color.', ARRAY[36,37,38,39,40,41,42], 4.4, 0),
                                                                                                           (39, 'Efua', 400, 'Women', 'new', 'Crisp white leather strap on a black sole, finished with a signature gold ball charm. Simple, clean, versatile.', ARRAY[36,37,38,39,40,41,42], 4.4, 0),
                                                                                                           (40, 'Akua', 400, 'Women', 'bestseller', 'Bold red suede sole with a black strap and signature gold ball charm. Rich contrast, everyday elegance.', ARRAY[36,37,38,39,40,41,42], 4.6, 0),
                                                                                                           (41, 'Kofi', 400, 'Men', 'new', 'Cobalt blue sole with a black velvet strap and a subtle gold emblem. Understated and sharp.', ARRAY[40,41,42,43,44,45,46], 4.3, 0),
                                                                                                           (42, 'Kwame', 400, 'Men', 'new', 'Cobalt blue sole with a black velvet strap finished with a bold gold crest badge. A statement of quiet confidence.', ARRAY[40,41,42,43,44,45,46], 4.4, 0),
                                                                                                           (43, 'Kwesi', 400, 'Men', 'popular', 'Black velvet strap with a hand-painted gold splatter finish over a black sole, topped with a signature ball charm. Artistic and one-of-a-kind.', ARRAY[40,41,42,43,44,45,46], 4.5, 0),
                                                                                                           (44, 'Heavy Duty', 400, 'Men', 'popular', 'Black suede slide with a fringed overlay and a polished gold buckle. Rugged texture, sharp finish.', ARRAY[40,41,42,43,44,45,46], 4.5, 0),
                                                                                                           (45, 'Adepa Flat', 400, 'Men', 'popular', 'Black leather strap with a leopard-print panel and a matte black ball charm. Bold print, easy wear.', ARRAY[40,41,42,43,44,45,46], 4.3, 0),
                                                                                                           (46, 'Gentleman', 390, 'Men', 'popular', 'Woven grey and black crossed straps on a cream sole. Textured, relaxed, effortlessly sharp.', ARRAY[40,41,42,43,44,45,46], 4.4, 0),
                                                                                                           (47, 'Gyata', 420, 'Men', 'bestseller', 'Forest green suede thong with a black leather overlay and a hand-cast gold lion head emblem. "Gyata" — lion — bold and commanding.', ARRAY[40,41,42,43,44,45,46], 4.7, 0);

-- Wire up each product's real photo (matches src/assets/products/product-NN.jpg)
-- and a single accurate color swatch (these are real photos, not multi-color
-- variants, so each product gets one color entry rather than the 5-swatch
-- placeholder pattern used for the original seed products).
UPDATE public.products SET
    image = 'product-' || public.products.id::text,
  gallery = ARRAY['product-' || public.products.id::text, 'product-' || public.products.id::text],
  colors = jsonb_build_array(jsonb_build_object('name', c.name, 'swatch', c.swatch, 'image', 'product-' || public.products.id::text))
FROM (VALUES
    (24, 'Navy', '#1B2A4A'), (25, 'Wine Red', '#7A1F2B'), (26, 'Flag Green', '#1C7A43'),
    (27, 'Royal Blue', '#1650C4'), (28, 'Crimson', '#C81E2C'), (29, 'Black', '#111111'),
    (30, 'White', '#F5F5F0'), (31, 'Blush Pink', '#E8B4B8'), (32, 'Dove Grey', '#A9A9A9'),
    (33, 'Mauve', '#8A6A6A'), (34, 'Terracotta', '#C1633D'), (35, 'Black/White', '#1A1A1A'),
    (36, 'Beige', '#D8C4A0'), (37, 'Gold', '#C9A227'), (38, 'Burnt Orange', '#C1541F'),
    (39, 'White', '#F2F2F2'), (40, 'Red', '#C21807'), (41, 'Cobalt Blue', '#1A4FA0'),
    (42, 'Cobalt Blue', '#1A4FA0'), (43, 'Black/Gold', '#141414'), (44, 'Black', '#161616'),
    (45, 'Leopard', '#6B4423'), (46, 'Grey/Black', '#3A3A3A'), (47, 'Forest Green', '#1E4D2B')
    ) AS c(id, name, swatch)
WHERE public.products.id = c.id;