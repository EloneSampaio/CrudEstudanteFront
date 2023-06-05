# Essa aplicação tem como objeto demonstrar o uso do docker e docker-composer.
# Sistema de Gerenciamento de Alunos

Este projeto é uma aplicação web para gerenciar alunos, fornecendo funcionalidades para adicionar, atualizar, visualizar detalhes e remover alunos. A aplicação foi construída utilizando React e se conecta a uma API para realizar as operações CRUD.

## Requisitos
Node.js 14.x ou superior
Yarn ou npm (Gerenciador de pacotes)
API que suporte as rotas e endpoints utilizados pelo projeto
Instalação
Clone o repositório para a sua máquina local:
git clone https://github.com/seu_usuario/seu_repositorio.git
cd seu_repositorio

### Instale as dependências do projeto:

Se você estiver usando Yarn:
yarn install

Se você estiver usando npm:

npm install

### Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente necessárias, como o URL da API:

REACT_APP_API_URL=http://127.0.0.1:8000/api

### Inicie o servidor de desenvolvimento:

yarn start   ou npm start

O servidor de desenvolvimento será iniciado e a aplicação estará disponível em http://localhost:3000.

# Uso

#### A aplicação possui uma interface simples para gerenciar alunos:

Para adicionar um novo aluno, clique no botão "Adicionar Aluno" e preencha o formulário com as informações do aluno. Clique em "Salvar" para adicionar o aluno ou em "Cancelar" para fechar o formulário.

Para editar as informações de um aluno, clique no ícone de lápis na tabela de alunos. O formulário será preenchido com os dados do aluno. Faça as alterações necessárias e clique em "Salvar" para atualizar as informações ou em "Cancelar" para fechar o formulário.

Para visualizar os detalhes de um aluno, clique no ícone de olho na tabela de alunos. Uma janela com os detalhes do aluno será exibida. Clique no botão "X" no canto superior direito para fechar a janela.

Para remover um aluno, clique no ícone de lixeira na tabela de alunos. Uma confirmação será solicitada antes de prosseguir com a exclusão.

