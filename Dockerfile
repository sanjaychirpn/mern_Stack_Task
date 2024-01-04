# Use an official Node.js runtime as a parent image
FROM node:alpine

# Set the working directory to /app
RUN mkdir /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json /app/

# Copy the rest of the application code to the working directory
COPY . /app/

# Install app dependencies
RUN npm install

# Expose the port the app will run on
EXPOSE 8383

# Start the app
CMD ["npm","run","start"]