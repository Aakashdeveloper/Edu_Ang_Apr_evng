FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8089
CMD ["npm","start"]