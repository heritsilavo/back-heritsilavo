# Étape 1 : Construisez l'application
FROM node:latest as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g npm@10.5.2
RUN npm install
COPY . .
RUN npm run build

# Étape 2 : Configuration de l'environnement de production
FROM node:alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/main"]
