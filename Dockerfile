# syntax=docker/dockerfile:1

# Set the NODEJS version
FROM node:latest AS node
# Set the working directory -- on docker
WORKDIR /sampleTestYarn

# Copy entire content, based on the position of Dockerfile created
COPY . .
# RUN yarn install --production
RUN yarn install
RUN yarn build

# RUN npm install --force
# RUN npm run build

FROM nginx:alpine
COPY --from=node /sampleTestYarn/dist/sample /usr/share/nginx/html
# Don't need to create dist folder in the app, it will get it from dockerfolder based on build command
# docker run --rm -d -p 4900:80/tcp sample9:latest