# Only used by docker compose on your machine. run.zero builds ./web with a Paketo buildpack instead.
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
CMD ["npm", "start"]
