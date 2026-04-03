import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://fbnnmhjmbnkaoaydblru.supabase.co";        
const SUPABASE_ANON_KEY = "sb_publishable_zP-j51sga24BZeD_bkP2Nw_IGf6Ktfy";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);