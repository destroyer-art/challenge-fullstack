# Use uma imagem Node para o backend
FROM node:16-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos necessários para o contêiner
COPY package*.json ./

# copie environments
COPY .env .env

# Copie o restante dos arquivos para o contêiner
COPY . .

# Instale as dependências usando npm
RUN npm install --quiet --no-optional --no-fund --loglevel=error

# build
RUN npm run build

# Expõe a porta 4000 usada pelo servidor NestJS
EXPOSE 4000

# Comando para iniciar o servidor NestJS em modo de desenvolvimento
CMD [ "npm", "run", "start:dev" ]
