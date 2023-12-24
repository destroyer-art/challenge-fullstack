# Use uma imagem oficial do Node como imagem base
FROM node:16-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos necessários para o contêiner
COPY package.json package-lock.json ./

# Instale as dependências usando npm
RUN npm install

# Copie o restante dos arquivos para o contêiner
COPY . .

# Construa o aplicativo React
RUN npm run build

# Expõe a porta 3000 usada pelo aplicativo React
EXPOSE 3000

# Comando para iniciar o aplicativo React
CMD ["npm", "start"]
