FROM node:22-alpine AS base

FROM base AS builder

WORKDIR /app

RUN corepack disable && npm install -g yarn@1.22.22

COPY package.json yarn.lock turbo.json ./
COPY apps/api ./apps/api
COPY packages ./packages

RUN npx turbo@2.5.3 prune --scope=api --docker

FROM base AS build-api

WORKDIR /app

COPY --from=builder /app/out/json/ .
RUN yarn install

# Build the project
COPY --from=builder /app/out/full/ .

RUN yarn build

FROM base AS runner

WORKDIR /app

COPY --from=build-api /app .

EXPOSE 3001

WORKDIR /app/apps/api/

CMD ["yarn", "start"]