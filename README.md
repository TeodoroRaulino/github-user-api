# GitHub User API


## Sobre a Aplicação
Este projeto é uma aplicação simples que utiliza a [API do GitHub Users](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28) para exibir informações de usuários do GitHub. A aplicação permite que o usuário insira o nome de um usuário válido do GitHub e, em seguida, exibe um card com algumas informações sobre esse usuário. Além disso, a aplicação possui uma página adicional que mostra os repositórios do usuário ordenados por data de atualização.

## Funcionalidades
- Pesquisa de usuários: Insira o nome de um usuário do GitHub para exibir suas informações.
- Listagem de repositórios: Após encontrar um usuário, é possível acessar uma página com cards dos repositórios do usuário, ordenados por data de atualização.
- Local Storage: Uma vez que um usuário válido é encontrado, suas informações são salvas no Local Storage, permitindo que sejam exibidas novamente quando retornar à aplicação.
- Toast de usuário não encontrado: Se o usuário inserido não for encontrado, um toast será exibido com a mensagem de "Usuário não encontrado".
- Dark Mode: A aplicação possui suporte para modo escuro.
  
## Tecnologias Utilizadas
- [React](https://react.dev/) - Biblioteca JavaScript para criação de interfaces de usuário.
- [Next.js](https://nextjs.org/) - Framework React com recursos adicionais para desenvolvimento de aplicações web.
- [Tailwind CSS](https://tailwindcss.com/) - Biblioteca de utilitários CSS para estilização rápida e responsiva.
- [Vercel](https://vercel.com/dashboard) - Plataforma de deploy e hospedagem para aplicações web.


## Como Executar o Projeto
1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório para o seu computador.
3. Na pasta do projeto, instale as dependências executando o seguinte comando no terminal:
```
npm install
```
1. Após a instalação das dependências, execute o seguinte comando para iniciar a aplicação:
```
npm run dev
```
1. A aplicação será executada localmente em http://localhost:3000.

## Deploy da Aplicação
A aplicação está hospedada na plataforma Vercel e pode ser acessada através do seguinte link: [GitHub User API - Vercel](github-user-api-sooty.vercel.app).
