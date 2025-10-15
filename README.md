# Sporti Angular App

Aplicação frontend em **Angular 19.2**, servida via **Nginx** dentro de Docker.  
A aplicação gerencia supervisões e exibe dashboards com gráficos interativos.

![Angular](https://img.shields.io/badge/Angular-19.2-red?style=for-the-badge&logo=angular&logoColor=white)


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
│  │  ├─ components/
│  │  ├─ pages/
│  │  └─ services/
│  └─ styles.scss
├─ dist/
│  └─ sporti-angular/
│     └─ browser/
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

