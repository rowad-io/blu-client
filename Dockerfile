# Stage 1: Build the Angular app

# Use an official Node runtime as the parent image
FROM node:16-alpine as build

# Set the working directory in the docker image
WORKDIR /app

# Install system dependencies
RUN apk add --no-cache python3 make g++ && \
    echo "alias python='/usr/bin/python3'" >> ~/.bashrc

# Copy package.json and package-lock.json before other files
# Utilize Docker cache to save re-installing dependencies if unchanged
COPY package.json package-lock.json ./

# Install Angular CLI and app dependencies
RUN npm ci && npm install -g @angular/cli

# Copy the rest of the app source
COPY . .

# Build the Angular app named "blu"
RUN ng build blu --configuration=production

# Stage 2: Serve the app with nginx

# Use an official nginx image as the parent image
FROM nginx:alpine as serve

# Set the working directory in the docker image
WORKDIR /usr/share/nginx/html

# Remove default nginx assets
RUN rm -rf ./*

# Copy from build stage
COPY --from=build /app/dist/blu .

# Start nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
