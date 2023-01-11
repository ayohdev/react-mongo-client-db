FROM node:alpine

WORKDIR "/app"

COPY ./package.json ./

RUN npm install

COPY . .

EXPOSE 9000

# Run the app when the container launches
CMD ["npm", "start"]