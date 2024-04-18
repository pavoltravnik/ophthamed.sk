FROM node:12.22

# Set the working directory to /app inside the container
WORKDIR /app

# Copy app files
COPY . .
# RUN npm install -g yarn
RUN yarn

# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
CMD [ "yarn", "build" ]