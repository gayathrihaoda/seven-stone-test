# Use Node.js as the build image
FROM node:20 AS build

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

# Use Apache for serving the built app
FROM httpd:alpine

# Copy built files from the previous stage
COPY --from=build /app/dist/ /usr/local/apache2/htdocs/

# Expose the default Apache port
EXPOSE 80

# Start Apache
CMD ["httpd", "-D", "FOREGROUND"]

