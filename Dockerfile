# Use a imagem oficial do Node.js como base
FROM node:14-alpine

# Crie e defina a pasta da aplicação
WORKDIR /app

# Copie o arquivo package.json e package-lock.json e instale as dependências do Node.js
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Copie o restante da aplicação
COPY . .

# Faça o build da aplicação React
RUN npm run build

# Utilize a imagem oficial do Nginx para servir a aplicação
FROM nginx:1.21-alpine

# Copie a pasta de build para a pasta de conteúdo do Nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Exponha a porta 80
EXPOSE 80

# Inicie o Nginx
CMD ["nginx", "-g", "daemon off;"]
