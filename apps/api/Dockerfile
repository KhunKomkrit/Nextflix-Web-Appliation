FROM node:22-alpine
WORKDIR /app

COPY . .
RUN yarn install --frozen-lockfile
RUN yarn turbo run build --filter=api

EXPOSE 3001

WORKDIR /app/apps/api
CMD ["yarn", "start"]