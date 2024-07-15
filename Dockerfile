FROM node:20-alpine
WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .
RUN npm install -g nodemon



EXPOSE 3000
# Command to run the application
CMD ["npm", "run", "dev"]