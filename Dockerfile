FROM node:22.15

WORKDIR /app

COPY . .

RUN npm install && npm run build

RUN ulimit -n 65535

EXPOSE 3000

CMD ["npm", "run", "start"]