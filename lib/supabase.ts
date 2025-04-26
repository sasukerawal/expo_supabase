import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://sjljjjqhjkpukginrksv.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqbGpqanFoamtwdWtnaW5ya3N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1MzY5MTksImV4cCI6MjA2MTExMjkxOX0.p_NxLGx2pjubCfpbQ9MoS5xWhWQszL4fLckE8cpfOC0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})