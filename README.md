# Arara Delivery - Frontend

Este é o repositório do frontend do projeto Arara Delivery.

## Visão Geral

O Arara Delivery é uma plataforma de delivery online. Este projeto representa a interface do usuário, desenvolvida com React, Vite e TypeScript.

## Funcionalidades

-   **Autenticação de Usuário**: Cadastro e login de usuários.
-   **Navegação**:
    -   Página inicial (Home) com produtos em destaque.
    -   Página de produtos com listagem, cadastro, edição e exclusão de produtos.
    -   Página de categorias com listagem, cadastro, edição e exclusão de categorias.
    -   Página de perfil do usuário.
    -   Página "Sobre Nós".
-   **Notificações**: Exibição de alertas e mensagens para o usuário.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
/
|-- public/
|   |-- vite.svg
|-- src/
|   |-- assets/
|   |-- components/
|   |   |-- categoria/
|   |   |-- footer/
|   |   |-- navbar/
|   |   |-- produto/
|   |-- contexts/
|   |   |-- AuthContext.tsx
|   |-- models/
|   |   |-- Categoria.ts
|   |   |-- Produto.ts
|   |   |-- User.ts
|   |   |-- UserLogin.ts
|   |-- pages/
|   |   |-- cadastro/
|   |   |-- categoriapagina/
|   |   |-- home/
|   |   |-- login/
|   |   |-- perfil/
|   |   |-- produtopagina/
|   |   |-- sobrenos/
|   |-- services/
|   |   |-- Service.ts
|   |-- utils/
|   |   |-- ToastAlerta.ts
|   |-- App.tsx
|   |-- index.css
|   |-- main.tsx
|-- .gitignore
|-- index.html
|-- package.json
|-- README.md
|-- tsconfig.json
|-- vite.config.ts
```

-   **`src/components`**: Contém componentes React reutilizáveis.
-   **`src/contexts`**: Armazena os contextos da aplicação (ex: `AuthContext`).
-   **`src/models`**: Define os modelos de dados (interfaces TypeScript).
-   **`src/pages`**: Contém as páginas da aplicação.
-   **`src/services`**: Lida com a comunicação com a API.
-   **`src/utils`**: Contém funções utilitárias.

## Tecnologias Utilizadas

-   **React**
-   **Vite**
-   **TypeScript**
-   **React Router DOM**
-   **Axios**
-   **Tailwind CSS**
-   **React Toastify**
-   **Phosphor Icons**
-   **Lucide React**

## Como Executar o Projeto

1.  Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/araradelivery-frontend.git
    ```
2.  Instale as dependências:
    ```bash
    cd araradelivery-frontend
    npm install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

A aplicação estará disponível em `http://localhost:5173`.

## Scripts Disponíveis

-   `npm run dev`: Inicia o servidor de desenvolvimento.
-   `npm run build`: Compila o projeto para produção.
-   `npm run lint`: Executa o linter.
-   `npm run preview`: Inicia um servidor de pré-visualização do build de produção.

