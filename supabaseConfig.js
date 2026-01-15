import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Replace these with your NEW Supabase project details
export const supabaseUrl = 'https://rqijdmyrtolwzuranpvu.supabase.co';
export const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxaWpkbXlydG9sd3p1cmFucHZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0ODk4NjcsImV4cCI6MjA4NDA2NTg2N30.yyBJZ_AKaq_LfIy8-H9zxg1PC6yswHfxq9xGrMXwnNk';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Make it globally accessible for older scripts if needed
window.supabase = supabase;
