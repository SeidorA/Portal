import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bddshydwlmeszaaqncrt.supabase.co'; // Reemplaza con tu URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkZHNoeWR3bG1lc3phYXFuY3J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4NTQ2MzQsImV4cCI6MjA2ODQzMDYzNH0.SjPTorvgsuleFX0LiQN2cIExaOsDjGGUwsvTQWOSjRQ';

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