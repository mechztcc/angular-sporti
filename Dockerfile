# Etapa 1: build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build da aplicação Angular
RUN npm run build --prod

# Etapa 2: servidor Nginx
FROM nginx:alpine

# Copia os arquivos buildados para o Nginx
COPY --from=builder /app/dist/sporti-angular /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
