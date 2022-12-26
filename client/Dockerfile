FROM node:latest
# set working directory
WORKDIR /client

# add `/client/node_modules/.bin` to $PATH
ENV PATH /client/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install -g npm@9.2.0
RUN npm install --legacy-peer-deps --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]