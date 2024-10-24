// // src/app/login.tsx
// import { useState } from 'react';
// import { supabase } from '../supabaseClient';
// import { useRouter } from 'next/router';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const { error } = await supabase.auth.signInWithPassword({ email, password });
//     if (error) {
//       alert(error.message);
//     } else {
//       router.push('/editor'); // Redirect to editor page after login
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <label>Email:</label>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       <label>Password:</label>
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// src/app/login.tsx
import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useRouter } from 'next/router';
import styles from "./Login.module.css"; // Importer le fichier CSS

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert(error.message);
    } else {
      router.push('/editor'); 
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleLogin}>
        <label className={styles.label}>Email:</label>
        <input
          className={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className={styles.label}>Password:</label>
        <input
          className={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className={styles.button} type="submit">Login</button>
      </form>
    </div>
  );
}
