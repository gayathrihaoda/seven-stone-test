# Use Node.js as the build image
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json ./
# Avoid package-lock.json issues by running npm install directly

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Use Nginx for serving the built app
FROM nginx:alpine

# Copy built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

