// // components/Auth.tsx
// 'use client';
// import { useState } from 'react';
// import { supabase } from '../supabase/client';
// import { useRouter } from 'next/navigation';

// export default function Auth() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();

//   const handleSignIn = async () => {
//     setLoading(true);
//     const { error } = await supabase.auth.signInWithPassword({ email, password });
//     setLoading(false);
//     if (error) setError(error.message);
//     else router.push('/editor'); // Redirige vers le tableau de bord après connexion
//   };

//   const handleSignUp = async () => {
//     setLoading(true);
//     const { error } = await supabase.auth.signUp({ email, password });
//     setLoading(false);
//     if (error) setError(error.message);
//     else router.push('/CollaborativeEditor'); // Redirige vers le tableau de bord après inscription
//   };

//   return (
//     <div>
//       <h2>Sign In / Sign Up</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleSignIn} disabled={loading}>
//         {loading ? 'Loading...' : 'Sign In'}
//       </button>
//       <button onClick={handleSignUp} disabled={loading}>
//         {loading ? 'Loading...' : 'Sign Up'}
//       </button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// }
//////////////////////////////////





// 'use client';
// import { useState } from 'react';
// import { supabase } from '../supabase/client';
// import { useRouter } from 'next/navigation';
// import styles from './Auth.module.css'; // Import du fichier CSS

// export default function Auth() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();

//   const handleSignIn = async () => {
//     setLoading(true);
//     const { error } = await supabase.auth.signInWithPassword({ email, password });
//     setLoading(false);
//     if (error) setError(error.message);
//     else router.push('/editor');
//   };

//   const handleSignUp = async () => {
//     setLoading(true);
//     const { error } = await supabase.auth.signUp({ email, password });
//     setLoading(false);
//     if (error) setError(error.message);
//     else router.push('/CollaborativeEditor');
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.formWrapper}>
//         <h2 className={styles.title}>Sign In / Sign Up</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className={styles.input}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className={styles.input}
//         />
//         <div className={styles.buttonGroup}>
//           <button onClick={handleSignIn} disabled={loading} className={styles.button}>
//             {loading ? 'Loading...' : 'Sign In'}
//           </button>
//           <button onClick={handleSignUp} disabled={loading} className={styles.button}>
//             {loading ? 'Loading...' : 'Sign Up'}
//           </button>
//         </div>
//         {error && <p className={styles.error}>{error}</p>}
//       </div>
//     </div>
//   );
// }

'use client';
import { useState } from 'react';
import { supabase } from '../supabase/client';
import { useRouter } from 'next/navigation';
import styles from './Auth.module.css'; // Import du fichier CSS

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignIn = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) setError(error.message);
    else router.push('/editor'); // Redirige vers le tableau de bord après connexion
  };

  // Fonction pour gérer la connexion avec Google
  const handleGoogleSignIn = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    setLoading(false);
    if (error) setError(error.message);
    else router.push('/editor'); // Redirige après connexion réussie avec Google
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <div className={styles.buttonGroup}>
          <button onClick={handleSignIn} disabled={loading} className={styles.button}>
            {loading ? 'Loading...' : 'Sign In'}
          </button>
        </div>
        <div className={styles.socialLogin}>
          <button onClick={handleGoogleSignIn} className={styles.googleButton}>
            Sign In with Google
          </button>
        </div>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
}
