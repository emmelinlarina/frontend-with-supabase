import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const supabaseUrl = "https://hftoyufjcvzkzhudixul.supabase.co";
const supabaseKey = "sb_publishable_oyhGiHXnq9P0_1SNEADBPw_wpMdJ8Q5";

export const supabase = createClient(supabaseUrl, supabaseKey);
