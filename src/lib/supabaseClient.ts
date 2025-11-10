
import { createClient } from '@supabase/supabase-js';

// Read from environment variables at build/dev time.
// Docusaurus (webpack) will inline `process.env.*` values at build time if they
// are present in the process when running `docusaurus start` or `docusaurus build`.
// We keep the previous hard-coded values as a fallback (useful for quick local dev),
// but you should set the env vars for production and avoid committing secrets.
const supabaseUrl = process.env.SUPABASE_URL || 'https://bddshydwlmeszaaqncrt.supabase.co'; // fallback
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkZHNoeWR3bG1lc3phYXFuY3J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4NTQ2MzQsImV4cCI6MjA2ODQzMDYzNH0.SjPTorvgsuleFX0LiQN2cIExaOsDjGGUwsvTQWOSjRQ'; // fallback

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  // Informative warning during dev; in production you probably won't want this log.
  // This helps debugging when the front-end appears blank because the envs weren't set.
  // eslint-disable-next-line no-console
  console.warn(
    '[supabaseClient] SUPABASE_URL or SUPABASE_ANON_KEY not found in process.env — using fallback values.'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


// Helper function to get active records from any table
export const getActiveRecords = async (tableName: string) => {
  const { data, error } = await supabase
    .from(tableName)
    .select('*')
    .eq('Active', true)
    .order('id', { ascending: true });
    
  return { data, error };
};

// Specific function for planes for backwards compatibility
export const getActivePlanes = async () => {
  return getActiveRecords('Planes');
};