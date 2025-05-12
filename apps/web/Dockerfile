FROM node:22-alpine
WORKDIR /app

COPY . .
RUN yarn install --frozen-lockfile
RUN yarn turbo run build --filter=web

EXPOSE 3000

WORKDIR /app/apps/web
CMD ["yarn", "start"]