import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iubxgcqegutxmhzrkxwl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1YnhnY3FlZ3V0eG1oenJreHdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY1MDQ2MDAsImV4cCI6MjAyMjA4MDYwMH0.Wj1QhPYAHktX9h_tXisZb_ewO0ncYc5R2akeWBRZCxQ";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
