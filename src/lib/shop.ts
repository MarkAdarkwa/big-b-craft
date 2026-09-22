import { supabase } from "@/integrations/supabase/client";

// ---- Row shapes as they come back from the database (snake_case) ----
export interface ProductRow {
  id: number;
  name: string;
  price: number;
  category: "Men" | "Women" | "Custom";
  tag: "bestseller" | "new" | "popular";
  image: string;
  gallery: string[];
  description: string;
  sizes: number[];
  colors: { name: string; swatch: string; image: string }[];
  rating: number;
  review_count: number;
}

export interface OrderItemInput {
  productId: number;
  name: string;
  size: number;
  quantity: number;
  price: number;
}

export interface NewOrderInput {
  customerName: string;
  phone: string;
  address: string;
  notes?: string;
  items: OrderItemInput[];
  total: number;
}

export async function fetchProductRows(): Promise<{
  data: ProductRow[] | null;
  error: string | null;
}> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: true });
  if (error) return { data: null, error: error.message };
  return { data: (data ?? []) as unknown as ProductRow[], error: null };
}

export async function logOrder(order: NewOrderInput): Promise<{ error: string | null }> {
  const { error } = await supabase.from("orders").insert({
    customer_name: order.customerName,
    phone: order.phone,
    address: order.address,
    notes: order.notes || null,
    items: order.items as unknown as import("@/integrations/supabase/types").Json,
    total: order.total,
  });
  if (error) return { error: error.message };
  return { error: null };
}
