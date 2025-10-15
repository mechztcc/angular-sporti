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

# Remove página padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia build do Angular
COPY --from=builder /app/dist/sporti-angular/browser /usr/share/nginx/html

# Copia configuração customizada do Nginx (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe porta 80
EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]
