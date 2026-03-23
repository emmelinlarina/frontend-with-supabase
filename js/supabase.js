import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const supabaseUrl = "https://hftoyufjcvzkzhudixul.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmdG95dWZqY3Z6a3podWRpeHVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3NTgxNTYsImV4cCI6MjA4OTMzNDE1Nn0.TG4kcDJGECZZ8Q24mSVq0CRpNYPScl9NCzXxmNsGm54";

export const supabase = createClient(supabaseUrl, supabaseKey);
