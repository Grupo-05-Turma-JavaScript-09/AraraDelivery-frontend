# 🦜 Arara Delivery - Frontend

Este é o repositório do frontend do projeto **Arara Delivery** - uma plataforma inovadora de delivery que conecta lugares através da tecnologia.

## 🚀 Visão Geral

O **Arara Delivery** é mais do que uma plataforma de delivery online. É uma solução que nasceu da vontade de reduzir distâncias e garantir acesso a produtos e serviços essenciais onde ninguém mais chega. Este projeto apresenta a interface do usuário, desenvolvida com React, Vite e TypeScript.

## ✨ Funcionalidades

- **Autenticação de Usuário**: Cadastro e login de usuários
- **Navegação Completa**:
  - Página inicial (Home) com produtos em destaque
  - Página de produtos com listagem, cadastro, edição e exclusão
  - Página de categorias com gestão completa
  - Página de perfil do usuário
  - Página "Sobre Nós" com nossa história e equipe
- **Notificações**: Sistema de alertas e mensagens para o usuário

## 🏗️ Estrutura do Projeto

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

## 🛠️ Tecnologias Utilizadas

- **React**
- **Vite**
- **TypeScript**
- **React Router DOM**
- **Axios**
- **Tailwind CSS**
- **React Toastify**
- **Phosphor Icons**
- **Lucide React**

## 🎯 Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Grupo-05-Turma-JavaScript-09/AraraDelivery-frontend.git
   ```

2. **Instale as dependências**:
   ```bash
   cd AraraDelivery-frontend
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

A aplicação estará disponível em `http://localhost:5173`.

## 📜 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Compila o projeto para produção
- `npm run lint`: Executa o linter
- `npm run preview`: Inicia um servidor de pré-visualização do build de produção

## 👥 Nossa Equipe de Desenvolvimento

Este projeto foi desenvolvido com 💙 por:

### **Ayron Sant'Anna**
- **GitHub**: [Ayron0](https://github.com/Ayron0)
- **LinkedIn**: [ayronsantanna](https://www.linkedin.com/in/ayronsantanna/)

### **Emily Mangas**
- **GitHub**: [Emy2mangas](https://github.com/Emy2mangas)
- **LinkedIn**: [emily-mangas](https://www.linkedin.com/in/emily-mangas/)

### **Eric Silva**
- **GitHub**: [kame-yu](https://github.com/kame-yu)
- **LinkedIn**: [eric-silva-is-a-dev](https://www.linkedin.com/in/eric-silva-is-a-dev/)

### **Flavio Correia**
- **GitHub**: [sonyflavio](https://github.com/sonyflavio)
- **LinkedIn**: [flavio-serra](https://www.linkedin.com/in/flavio-serra/)

### **Paula Melo**
- **GitHub**: [paulamelo2404](https://github.com/paulamelo2404)
- **LinkedIn**: [paula-melo2404](https://www.linkedin.com/in/paula-melo2404/)

### **Sthefany Mattos**
- **GitHub**: [sthefanyom](https://github.com/sthefanyom)
- **LinkedIn**: [sthefanyom](https://www.linkedin.com/in/sthefanyom/)

## 🙏 Agradecimentos Especiais

Um agradecimento especial à **Generation Brasil** 🌟, onde em 2025 nossos caminhos se cruzaram e aprendemos desenvolvimento Fullstack. Foi durante essa jornada de códigos, projetos desafiadores e sprints intensas que percebemos que poderíamos unir tecnologia com propósito social - e assim nasceu a **Arara Delivery**.

Obrigado por nos mostrar que tecnologia também é sobre construir pontes e conectar pessoas!

## 🌟 Nossa Missão

Acreditamos que **ninguém deve ser deixado para trás por causa da distância**. Com tecnologia, estratégia e muita determinação, estamos construindo um Brasil mais conectado e acessível para todos.

---

**Arara Delivery** - Onde a distância tenta impedir, nós encontramos um jeito! 🦜🚚
