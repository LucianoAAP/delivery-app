# O projeto

Esta é uma versão levemente modificada de um projeto full stack em grupo que desenvolvemos no curso de desenvolvimento web da Trybe. Se trata de um site de vendas, em que as pessoas clientes podem fazer compras e acompanhar o status de entrega de seus pedidos, que pode ser atualizado pelas pessoas vendedoras. O front-end da aplicação foi desenvolvido com "React", o back-end com "Node Express" e o banco de dados com MySQL e Sequelize.

# Participantes do grupo

Este projeto foi um trabalho em grupo desenvolvido por:

- Luciano Almeida: https://github.com/LucianoAAP
- Lucas Fernandes: https://github.com/lucasfernandes20
- Artur Álvaro: https://github.com/ArturAlvaro
- André Moreno: https://github.com/andremmoreno
- Wadson Almeida: https://github.com/Wadson92

# Funcionalidades

- Tela de login
- Tela do administrador
- Registrar novo usuário
- Remover usuário
- Tela de produtos
- Carrinho de compras
- Tela de checkout
- Criar novo pedido
- Tela de compras da pessoa cliente
- Tela de detalhes da compra da pessoa cliente
- Tela de vendas da pessoa vendedora
- Tela de detalhes da venda da pessoa vendedora
- Atualização do status de entrega dos pedidos
- Acompanhamento em tempo real dos pedidos via socket
- Testes de integração do back-end
- Testes do front-end

# Iniciando

## Pré-requisitos

Esta aplicação requer o pacote "NPM" e "MySQL"

## Instalação

1. Primeiro, clone o repositório:
- `git clone git@github.com:LucianoAAP/delivery-app.git`
2. Depois, entre no repositório:
- `cd delivery-app`
3. Entre na pasta do back-end:
- `cd back-end`
5. Instale as dependências do back-end:
- `npm install`
6. Volte para o repositório principal:
- `cd ..`
7. Entre na pasta do front-end:
- `cd front-end`
8. Instale as dependências do front-end:
- `npm install`

## Iniciando a aplicação

1. Inicie o MySQL:
- `sudo service mysql start`
2. Crie o banco de dados de desenvolvedor:
- `npm run db:reset`
3. Começando na pasta principal, entre na pasta do back-end:
- `cd back-end`
4. Inicie o back-end:
- `npm start`
5. Volte para o repositório principal:
- `cd ..`
6. Entre na pasta do front-end:
- `cd front-end`
7. Inicie o front-end:
- `npm start`

# Testando a aplicação 

## Testando o back-end

1. Começando na pasta principal, entre na pasta do back-end:
- `cd back-end`
2. Inicie os testes:
- `npm test`

Para ver a cobertura, rode o comando `npm run test:coverage`

## Testando o front-end

1. Começando na pasta principal, entre na pasta do back-end:
- `cd front-end`
2. Inicie os testes:
- `npm test`

Para ver a cobertura, rode o comando `npm run test:coverage`

# Próximos passos

- Acompanhamento em tempo real da tela do administrador via socket
- Tela para "página não encontrada"
- Menu para telas pequenas
- Deploy no Heroku

# Contato

## Luciano Almeida

- Linkedin: https://www.linkedin.com/in/lucianoaap/
- Github: https://www.linkedin.com/in/lucianoaap/
- Email: lucianoalmeidaap@gmail.com