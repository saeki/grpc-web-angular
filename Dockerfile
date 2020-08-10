FROM node:12.18-alpine AS build
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build --configuration=production --subresource-integrity

FROM nginx:1.19-alpine
COPY --from=build /usr/src/app/dist/*/* /usr/share/nginx/html/
