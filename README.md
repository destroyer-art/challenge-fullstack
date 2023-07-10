# Delliv Fullstack Pleno Coding Challenge

## Objetivo do desafio:
Construir um aplicativo de rastreamento de entregas que permita aos usuários autenticados visualizar uma lista de pedidos, atualizar o status de cada pedido e fornecer recursos de autenticação e segurança.

## Requisitos técnicos:

- Entregue o desafio em um repositório (monorepo) no GitHub, com instruções claras para executar a aplicação localmente.
- Use React com Redux para o desenvolvimento do frontend.
- Use TypeScript para tipagem estática.
- Configure a execução do aplicativo em um contêiner Docker.
- O backend deve ser desenvolvido usando NestJS com Prisma.
- O backend deve fornecer uma API RESTful para listar e atualizar os pedidos, incluindo autenticação de usuário e autorização de rotas.
- Utilize um banco de dados PostgreSQL para persistir os dados dos pedidos e informações dos usuários.
- Siga os princípios SOLID no desenvolvimento do aplicativo.
- Aplique o conceito de Atomic Design na estruturação dos componentes do frontend.
- Desenvolva testes unitários para as principais funcionalidades do aplicativo, tanto no frontend quanto no backend.

## Tarefas:

**1. Configure o ambiente de desenvolvimento:**
- Configure um projeto React com Redux e TypeScript.
- Configure o NestJS com Prisma para o backend.
- Configure o Docker para executar o aplicativo.

**2. Crie o modelo de dados:**

- Defina um modelo de dados para representar um pedido com as seguintes informações: ID, nome do cliente, endereço de entrega, status do pedido. 
- Use o Prisma para criar a migração e gerar a tabela correspondente no banco de dados PostgreSQL.
- Defina um modelo de dados para representar um usuário, incluindo informações como ID, nome, e-mail e senha criptografada.

**3. Implemente o backend:**

- Crie um controlador em NestJS para manipular as requisições relacionadas aos pedidos.
- Implemente os endpoints para obter a lista de pedidos e atualizar o status de um pedido.
- Implemente as rotas para autenticação de usuário, incluindo login.
- Use o Prisma para realizar as operações de leitura e escrita no banco de dados.
- Implemente a funcionalidade de autenticação de usuário, gerando tokens de acesso seguro.
- Desenvolva os middlewares necessários para autorização de rotas protegidas.

**4.Implemente o frontend:**

- Crie uma estrutura de componentes baseada no conceito de Atomic Design, dividindo a interface em átomos, moléculas, organismos e templates.
- Desenvolva uma página de login que permita aos usuários autenticarem-se fornecendo suas credenciais.
- Implemente as rotas protegidas, que só podem ser acessadas por usuários autenticados.
- Desenvolva uma página inicial que exiba a lista de pedidos, mostrando o nome do cliente, endereço de entrega e status do pedido.
- Implemente um componente de atualização de status para cada pedido na lista. O componente deve permitir a seleção de um novo status e a atualização do pedido quando o usuário confirmar a alteração.
- Use Redux para gerenciar o estado do aplicativo e fazer as chamadas de API para autenticação de usuário, obtenção e atualização dos pedidos.

**5. Crie testes unitários:**

- Desenvolva testes unitários para as principais funcionalidades do aplicativo, tanto no frontend quanto no backend.
- Utilize ferramentas como Jest para testes no React e NestJS.
- Certifique-se de testar as funcionalidades principais, como autenticação do usuário, obtenção e atualização dos pedidos, entre outras.
- Busque obter uma cobertura de testes adequada, testando diversos cenários.

**6. Crie um arquivo Dockerfile:**

- Crie um arquivo Dockerfile para empacotar o aplicativo React.
- Configure o Dockerfile para copiar os arquivos de build do aplicativo React para o contêiner e iniciar o servidor da aplicação.

**7. Crie um arquivo docker-compose.yml:**

- Crie um arquivo docker-compose.yml para definir e executar os serviços necessários, como o aplicativo React, o servidor NestJS e o banco de dados PostgreSQL.

## Recomendações:
- Siga as melhores práticas de organização de código, modularização e separação de responsabilidades.
- Forneça instruções claras sobre como executar o projeto localmente usando o Docker.
- Certifique-se de que os testes unitários sejam abrangentes e verifiquem o comportamento esperado das funcionalidades principais.
- Ao avaliar os candidatos, levaremos em consideração a qualidade do código, a cobertura de testes e o cumprimento dos requisitos técnicos.

Este desafio avaliará as habilidades dos candidatos em desenvolvimento frontend com React, Redux e TypeScript, bem como o conhecimento de configuração e uso do NestJS com Prisma, Docker, princípios SOLID e Atomic Design. Além disso, testará a capacidade de implementar autenticação de usuário, autorização de rotas e escrever testes unitários eficazes.
