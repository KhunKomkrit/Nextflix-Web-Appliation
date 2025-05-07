# Stage 1: Prune dependencies
FROM node:22-alpine AS base

FROM base AS builder

WORKDIR /app

RUN corepack disable && npm install -g yarn@1.22.22

# Copy only necessary root files
COPY package.json yarn.lock turbo.json ./
COPY apps/web ./apps/web
COPY packages ./packages

# Prune to reduce size
RUN npx turbo@2.5.3 prune --scope=web --docker

# Stage 2: Build pruned project
FROM base AS build-web

WORKDIR /app

COPY --from=builder /app/out/json/ .
RUN yarn install

# Build the project
COPY --from=builder /app/out/full/ .

RUN yarn build

# Stage 3: Final image
FROM base AS runner

WORKDIR /app

COPY --from=build-web /app .

EXPOSE 3000

WORKDIR /app/apps/web/

CMD ["yarn", "start"]
