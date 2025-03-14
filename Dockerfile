FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .

RUN if [ ! -f .env ]; then \
      echo "NEXT_PUBLIC_API_URL=https://rickandmortyapi.com/api" > .env; \
      echo "API_URL=https://rickandmortyapi.com/api" >> .env; \
    fi

RUN npm run build

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

EXPOSE 3000

CMD ["npm", "start"]