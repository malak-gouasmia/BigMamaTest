// import { Room } from "@/app/Room";
// import { CollaborativeEditor } from "@/components/CollaborativeEditor";

// export default function Home() {
//   return (
//     <main>
//       <Room>
//         <CollaborativeEditor />
//       </Room>
//     </main>
//   );
// }

// app/page.tsx
// import Link from 'next/link';

// export default function Home() {
//   return (
//     <div>
      
//       <Link href="/login">Login</Link>
//     </div>
//   );
// }

// import Link from 'next/link';
// import styles from './page.module.css'; // Import a CSS module for styling

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <header className={styles.header}>
//         <h1>Welcome to CollabEditor</h1>
//         <p>Your go-to platform for real-time collaborative text editing. Work together seamlessly, anytime, anywhere. </p>
//       </header>
      
//       <main className={styles.main}>
//         <p>Start editing and collaborating by logging into your account:</p>
//         <Link href="/login">
//           <button className={styles.loginButton}>Login</button>
//         </Link>
//       </main>
      
//       <footer className={styles.footer}>
//         <p>Experience the power of collaborative editing. Invite your team and get started!</p>
//       </footer>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#333' }}>Welcome to the Collaborative Text Editor Platform</h1>
      <p style={{ margin: '20px 0', fontSize: '1.2rem', color: '#666' }}>
        Start editing and collaborate with others in real time.
      </p>
      <a href="/login" style={{ textDecoration: 'none', color: '#ffffff', backgroundColor: '#0070f3', padding: '10px 20px', borderRadius: '5px' }}>
        Start
      </a>
    </div>
  );
}
