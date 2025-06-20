import React, { createContext, useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

export const SupabaseContext = createContext({
  supabase: null,
  integrationCompleted: false,
});

export const SupabaseProvider = ({ children }) => {
  const [supabase, setSupabase] = useState(null);
  const [integrationCompleted, setIntegrationCompleted] = useState(false);

  useEffect(() => {
    const initializeSupabase = () => {
      const supabaseUrl = "https://blmmrqwsihziglutzgen.supabase.co";
      const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsbW1ycXdzaWh6aWdsdXR6Z2VuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwOTA5NTUsImV4cCI6MjA2NTY2Njk1NX0.80bCPJUaraO2920LSSwJ73n95WESjAoE0vMvoGfmZnI";

      if (supabaseUrl && supabaseAnonKey) {
        try {
          const client = createClient(supabaseUrl, supabaseAnonKey);
          setSupabase(client);
          setIntegrationCompleted(true);
        } catch (error) {
          console.error("Error creating Supabase client:", error);
          setIntegrationCompleted(false);
        }
      } else {
        console.warn("Supabase URL or Anon Key is missing. Supabase integration disabled.");
        setIntegrationCompleted(false);
      }
    };

    initializeSupabase();
    
    const handleHostingerDataUpdate = (event) => {
      if (event.detail?.type === 'supabaseIntegrationUpdate') {
        const supabaseData = window.hostinger?.aiAssistant?.supabase;
        if (supabaseData?.projectConnected) {
          initializeSupabase(); 
        } else {
          setSupabase(null);
          setIntegrationCompleted(false);
        }
      }
    };
    
    window.addEventListener('hostingerDataUpdate', handleHostingerDataUpdate);

    return () => {
      window.removeEventListener('hostingerDataUpdate', handleHostingerDataUpdate);
    };
  }, []);

  return (
    <SupabaseContext.Provider value={{ supabase, integrationCompleted }}>
      {children}
    </SupabaseContext.Provider>
  );
};