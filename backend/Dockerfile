# Build Stage
FROM node:20-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./src ./src
COPY tsconfig.json ./
RUN npx tsc

# Production Stage
# docker build --target production -t my-backend:prod .
FROM node:20-slim
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/index.js"]

# Development Stage
# docker build --target development -t my-backend:dev .
FROM node:20-slim AS development
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npx", "nodemon", "--watch", "src", "--exec", "ts-node", "src/index.ts"]
