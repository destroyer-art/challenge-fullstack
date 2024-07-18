# Fullstack - Configuration Guide with Docker

This guide provides step-by-step instructions for setting up and running the Delliv Fullstack project using Docker.

## Prerequisites

Make sure you have Docker and Docker Compose installed on your system.

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Environment Setting

1. **Clone this repository:**

 ```bash
 git clone https://github.com/destroyer-art/challenge-fullstack.git
 cd challenge-fullstack

2. **Backend configuration:**
- **Create a .env file with the .env.example settings:**

3. **Docker compose:**
- **go back to the root of the project if it is not there**
```bash
 CD ..
```
- **Run the following command to build and start Docker containers:**
```bash
 docker-compose up --build
```

- **This will launch the frontend, backend, and PostgreSQL database containers.**

- **To stop running containers:**
- **Press Ctrl+C in the terminal and execute:**
```bash
 docker-compose down
```

## Running Migrations

To apply migrations to the database, follow the steps below:

1. Open a terminal in the project directory:

 ```bash
 cd path/do/your/project
 ```

2. Run the following command to access the terminal inside the container:

 ```bash
 docker exec -it container-name /bin/bash
 ```

 Make sure to replace "container-name" with the actual name or ID of your container.

3. Inside the container, run the following command to run the migrations:

 ```bash
 npx prism migrate dev
 ```

 This will apply the necessary migrations to the database.

4. Exit the container terminal:

 ```bash
 exit
 ```

Remember that you only need to run migrations once or whenever there are changes to the database schema.


- **This will terminate the containers, freeing up the resources.**

## Additional Notes

- **Make sure you have ports 3000 and 4000 available on your system to avoid conflicts.**
- **If necessary, adjust database settings and other environment variables according to your needs.**
```bash
 docker-compose down
```

### In the README.md of the backend folder it explains how to create a user to log in
