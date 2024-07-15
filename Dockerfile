FROM node:20-alpine
WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .
RUN npm install -g nodemon

# # Copy the wait-for-db.sh script
# COPY wait-for-db.sh ./

# # Copy the wait-for-db.sh script
# COPY wait-for-db.sh ./

# # Change line endings to Unix style (optional, if you are using Windows)
# RUN sed -i 's/\r$//' ./wait-for-db.sh

EXPOSE 3000
# Command to run the application
CMD ["npm", "run", "dev"]