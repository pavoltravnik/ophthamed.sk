FROM node:12.22-alpine
# Set the working directory to /app inside the container
WORKDIR /app

COPY package*.json ./
RUN npm install -g yarn
RUN yarn
# Copy app files
COPY . .
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
CMD [ "yarn", "build" ]