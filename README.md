# Sporti Angular App

Aplicação frontend em **Angular 19.2**, servida via **Nginx** dentro de Docker.  
A aplicação gerencia supervisões e exibe dashboards com gráficos interativos.

![Angular](https://img.shields.io/badge/Angular-19.2-red?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.14-blue?style=for-the-badge&logo=tailwind-css&logoColor=white)
![ApexCharts](https://img.shields.io/badge/ApexCharts-5.3.3-orange?style=for-the-badge&logo=apexcharts&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-24-blue?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-1.26-green?style=for-the-badge&logo=nginx&logoColor=white)







---

## Tecnologias

- Angular 19.2  
- TypeScript  
- Tailwind CSS  
- ApexCharts  
- Nginx  
- Docker / Docker Compose

---

## Pré-requisitos

- Node.js 20 ou superior  
- npm 9 ou superior  
- Docker & Docker Compose  
- Git (opcional para clonar o repositório)

---

## Setup Local (Desenvolvimento)

1. Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
cd sporti-angular
```

2. Instale as dependências:

```bash
npm install
```

3. Rodar o servidor de desenvolvimento Angular:

```bash
npm start
```

> A aplicação estará disponível em [http://localhost:4200](http://localhost:4200)

---

## Build de Produção

Para gerar os arquivos de produção:

```bash
npm run build --prod
```

O build será gerado em:

```
dist/sporti-angular/browser
```

---

## Docker (Produção)

### Build da imagem

```bash
docker-compose build
```

### Subir o container

```bash
docker-compose up -d
```

### Parar o container

```bash
docker-compose down
```

A aplicação estará disponível em [http://localhost:4200](http://localhost:4200)

---

## Estrutura do Projeto

```
sporti-angular/
├─ src/
│  ├─ app/
│  │  ├─ shared/
│  │  │  └─ components/   
│  │  │  └─ services/   
│  │  │  └─ stores/   
│  │  │  └─ mocks/   
│  │  ├─ modules/
│  │  │  └─ home/                  # Módulo Home
│  │  │     ├─ components/          # Componentes específicos do módulo
│  │  │     ├─ pages/               # Páginas específicas do módulo
│  │  │     └─ shared/              # Shared dentro do módulo (interfaces, services, stores)
|  │  │  │     ├─ interfaces/               
|  │  │  │     ├─ services/              
|  │  │  │     ├─ stores/               
│  └─ styles.scss
├─ dist/
│  └─ sporti-angular/
│     └─ browser/                   # Build de produção
├─ Dockerfile
├─ docker-compose.yml
├─ package.json
└─ README.md

```

---

## Observações

- O build moderno do Angular 19.2 coloca os arquivos finais dentro de `dist/sporti-angular/browser`.  
- O Dockerfile usa **multi-stage build** para compilar a aplicação e servir com Nginx.  
- Para desenvolvimento com live reload, use `npm start` sem Docker.  

---

## Autor

**Alberto Paiva**

