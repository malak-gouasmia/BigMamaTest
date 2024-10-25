# Utiliser l'image de base Node.js
FROM --platform=linux/amd64 node:18.18.2


# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de package
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application dans le conteneur
COPY . .

# Construire l'application pour la production
RUN npm run build

# Exposer le port sur lequel votre application écoute
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "run", "dev"]

