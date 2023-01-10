# syntax=docker/dockerfile:1

# Set the NODEJS version
FROM node:latest AS node
# Set the working directory -- on docker
WORKDIR /app

# Copy entire content, based on the position of Dockerfile created
COPY . .
# RUN yarn install --production
RUN npm install --force
RUN npm run build

FROM nginx:alpine
COPY --from=node /app/dist/sample /usr/share/nginx/html
# Don't need to create dist folder in the app, it will get it from dockerfolder based on build command
# docker run --rm -d -p 4900:80/tcp sample9:latest



# WORKDIR /app

# # Add the source code to app
# COPY . .

# # Install all the dependencies & Build the application
# # RUN yarn install --production

# RUN npm install
# RUN npm run build

# FROM nginx:alpine
# COPY --from=node /app/dist/sample /usr/share/nginx/html