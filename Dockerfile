FROM node:22.15 as builder

WORKDIR /app

COPY . .

RUN npm install && npm run build

FROM node:22.15-alpine

WORKDIR /app

COPY --from=builder /app .

RUN ulimit -n 65535

EXPOSE 3000

CMD ["node", "run", "start"]