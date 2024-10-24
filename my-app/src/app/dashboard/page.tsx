// app/dashboard/page.tsx
'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../supabase/client';

import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const { data: session } = await supabase.auth.getSession();
      if (!session) {
        router.push('/login');
      } else {
        setSession(session);
      }
    };

    checkSession();
  }, [router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/editor');
  };

  return session ? (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
