# Delliv Fullstack - Guia de Configuração com Docker

Este guia fornece instruções passo a passo para configurar e executar o projeto Delliv Fullstack usando Docker.

## Pré-requisitos

Certifique-se de ter o Docker e o Docker Compose instalados em seu sistema.

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Configuração do Ambiente

1. **Clone este repositório:**

   ```bash
   git clone https://github.com/iannak/challenge-fullstack.git
   cd challenge-fullstack

2. **Configuração backend:**
- **Crie um arquivo .env com as configurações do banco de dados:**
```bash
   POSTGRES_DB=postgres
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=352291
```

3. **Docker compose:**
- **volte a raíz do projeto se não estiver**
```bash
  cd ..
```
- **Execute o seguinte comando para construir e iniciar os contêineres Docker:**
```bash
  docker-compose up --build
```

- **Isso iniciará os contêineres do frontend, backend e banco de dados PostgreSQL.**

- **Para parar a execução dos contêineres:**
- **Pressione Ctrl+C no terminal e execute:**
```bash
  docker-compose down
```

## Executando Migrações

Para aplicar as migrações ao banco de dados, siga os passos abaixo:

1. Abra um terminal no diretório do projeto:

    ```bash
    cd path/do/seu/projeto
    ```

2. Execute o seguinte comando para acessar o terminal dentro do contêiner:

    ```bash
    docker exec -it nome-do-container /bin/bash
    ```

    Certifique-se de substituir "nome-do-container" pelo nome real ou ID do seu contêiner.

3. Dentro do contêiner, execute o seguinte comando para rodar as migrações:

    ```bash
    npx migrate dev
    ```

    Isso aplicará as migrações necessárias ao banco de dados.

4. Saia do terminal do contêiner:

    ```bash
    exit
    ```

Lembre-se de que você só precisa rodar as migrações uma vez ou sempre que houver alterações no esquema do banco de dados.


- **Isso encerrará os contêineres, liberando os recursos.**

## Notas Adicionais

- **Certifique-se de ter as portas 3000 e 4000 disponíveis em seu sistema para evitar conflitos.**
- **Se necessário, ajuste as configurações do banco de dados e outras variáveis de ambiente de acordo com suas necessidades.**
```bash
  docker-compose down
```

