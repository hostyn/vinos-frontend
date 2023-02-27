FROM node:18 as builder

WORKDIR /tmp
COPY . .
RUN yarn install
RUN yarn build

FROM nginx as production
COPY --from=builder /tmp/dist /usr/share/nginx/html

