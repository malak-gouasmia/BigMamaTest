
# Projet de Plateforme de Collaboration Documentaire en Temps Réel

## Présentation du Projet

Ce projet est une plateforme de collaboration en temps réel qui permet aux utilisateurs de modifier des documents de manière simultanée. Il utilise une pile technologique moderne, y compris **Liveblocks**, **Next.js**, **Supabase**, **Zustand**, et **Shadcn** pour créer une interface utilisateur réactive et une expérience fluide.

## Technologies Utilisées

- **Liveblocks** : Synchronisation en temps réel des documents avec plusieurs utilisateurs.
- **Next.js (v13+)** : Framework frontend pour la génération de pages SSR et statiques.
- **Supabase** : Gestion de la base de données et de l'authentification des utilisateurs.
- **Zustand** : Gestion de l'état global de l'application.
- **Shadcn** : Composants d'interface utilisateur modernes et flexibles.

---

## Fonctionnalités Principales

- **Édition collaborative de documents** : Utilisation de Liveblocks pour permettre la modification simultanée des documents par plusieurs utilisateurs.
- **Indicateurs de présence des utilisateurs** : Visualisation en temps réel de la présence des autres utilisateurs lors de l'édition.
- **Authentification et sécurité** : Intégration de Supabase pour la gestion des utilisateurs et la sécurité.
- **Interface réactive** : Conception adaptée aux appareils mobiles pour une utilisation fluide sur différentes tailles d'écran.

---

## Installation

Pour installer et lancer le projet, suivez les étapes ci-dessous :

### Étape 1 : Cloner le projet

```bash
git clone https://github.com/votre-repository-url
cd votre-repository
```

### Étape 2 : Créer une application Next.js

```bash
npx create-next-app@latest
```

### Étape 3 : Installer les dépendances

Installez les packages nécessaires à l'application :

```bash
npm install @supabase/supabase-js
npm install @liveblocks/react 
npm install react@18 react-dom@18
npm install @blocknote/core @blocknote/mantine
npm install @liveblocks/yjs 
npm install @liveblocks/node     
```

---

## Configuration

### Étape 4 : Configuration de Supabase

1. Créez un projet Supabase sur [supabase.com](https://supabase.com).
2. Rendez-vous dans l'onglet **API** du tableau de bord Supabase pour obtenir :
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   
### Étape 5 : Créer le fichier `.env.local`

À la racine de votre projet, créez un fichier `.env.local` et ajoutez vos clés Supabase et Liveblocks :

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your-liveblocks-public-key
```

Ces variables seront utilisées pour connecter votre application à Supabase et Liveblocks.

---

## Lancer le projet

Une fois les étapes ci-dessus complétées, démarrez le serveur de développement :

```bash
npm run dev
```

L'application sera disponible sur [http://localhost:3000](http://localhost:3000).

---



