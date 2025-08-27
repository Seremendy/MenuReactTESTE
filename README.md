# Menu React Teste

Bem-vindo ao Menu React Teste! Esta é uma Single Page Application (SPA) construída com React que utiliza a API do GitHub para buscar, listar e exibir perfis de usuários. O projeto foi desenvolvido com uma arquitetura moderna, focando em componentização, gerenciamento de estado global e performance.

É um exemplo prático de como estruturar uma aplicação React escalável, utilizando ferramentas como Context API para estado, React Router para navegação e Styled Components para estilização.

---

## Funcionalidades Principais

- **- Autenticação Simulada:** Uma tela de login que utiliza variáveis de ambiente para simular um acesso seguro.
- **- Rotas Protegidas:** Apenas usuários autenticados podem acessar as páginas principais da aplicação.
- **- Listagem de Usuários:** Busca dinâmica de usuários do GitHub com funcionalidade de **pesquisa** e **paginação**.
- **- Página de Perfil Detalhada:** Ao clicar em um usuário, uma página dedicada exibe suas estatísticas, como número de repositórios, seguidores e quem ele segue.
- **- Menu Lateral Animado:** Um menu (`Side Menu`) expansível com animações fluidas, construído do zero com CSS e Styled Components.
- **- Gerenciamento de Estado Global:** Utilização da **Context API** para gerenciar o estado de autenticação e a visibilidade do menu lateral em toda a aplicação.
- **- Otimização de Performance:** Uso de hooks como `useCallback` e `useMemo` para memoizar funções e componentes, evitando re-renderizações desnecessárias.

---

## Tecnologias e Arquitetura

Este projeto foi construído utilizando as seguintes tecnologias e conceitos:

- **[React](https://reactjs.org/) (v18+):** Biblioteca para construção da UI.
- **[React Router DOM](https://reactrouter.com/):** Para gerenciamento de rotas e navegação.
- **[Styled Components](https://styled-components.com/):** Para estilização componentizada e CSS-in-JS.
- **[Axios](https://axios-http.com/):** Cliente HTTP para realizar as requisições à API do GitHub de forma centralizada.
- **Hooks:**
  - `useState` e `useEffect` para estado e ciclo de vida dos componentes.
  - `useContext` para consumir estados globais (autenticação e menu).
  - `useCallback` e `useMemo` para otimizações de performance.
  - `useParams` para extrair parâmetros dinâmicos da URL.
- **Context API:** Para criar um sistema de gerenciamento de estado sem a necessidade de bibliotecas externas como Redux.
- **ESLint:** Para garantir a qualidade e padronização do código.

### Estrutura de Pastas
O projeto segue uma estrutura organizada para separar responsabilidades:
```
src/
|-- components/  # Componentes reutilizáveis (Header, SideMenu)
|-- context/     # Provedores de contexto (AuthContext, MenuContext)
|-- pages/       # Componentes de página (Login, UserList, UserProfile)
|-- services/    # Configuração centralizada do Axios (api.js)
|-- styles/      # Estilos globais
|-- App.js       # Componente principal com as rotas
```

---

## Como Executar o Projeto

Para executar este projeto em sua máquina, siga os passos abaixo.

### **Pré-requisitos**

- [Node.js](https://nodejs.org/en/) (v16 ou superior)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### **Passo a Passo**

1. **Clone o repositório:**
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Configure as variáveis de ambiente:**
    - Um arquivo chamado `.env` na raiz do projeto tem a senha eo login.
  
     ```env
     REACT_APP_LOGIN=admin
     REACT_APP_PASSWORD=admin123
     ```
4. **Inicie a aplicação:**
   ```bash
   npm start
   ```
   
---
A aplicação estará disponível em `http://localhost:3000`.

---
