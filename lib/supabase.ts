import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "placeholder-anon-key";

// Cliente inicializado para coherencia de stack T3.
// En este MVP no se realizan lecturas ni escrituras en runtime — todos los
// datos provienen de mocks estáticos. Limitación declarada en ENVIRONMENTS.md.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
