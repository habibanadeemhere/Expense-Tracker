import { createClient } from "@supabase/supabase-js";

const VITE_SUPABASE_URL="https://fbnnmhjmbnkaoaydblru.supabase.co"
const VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY= "sb_publishable_zP-j51sga24BZeD_bkP2Nw_IGf6Ktfy"

export const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY);