# syntax=docker/dockerfile:1
FROM node:alpine

# Set the working directory
WORKDIR /usr/src/app

# Add the source code to app
COPY . .

# Install all the dependencies & Build the application
RUN yarn install --production

FROM nginx:alpine
COPY --from=node /app/dist/sample /usr/share/nginx/html