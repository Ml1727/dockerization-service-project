# dockerization-service-project

# Dockerization Service Project

## Project Overview

This project demonstrates how to containerize a Node.js application using Docker.

The application runs inside a Docker container and serves a simple web page.

---

## Technologies Used

* Node.js
* Express.js
* Docker
* Docker Compose
* GitHub Codespaces

---

## Project Structure

```text
dockerization-service-project
│
├── app.js
├── package.json
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## Run Application Without Docker

Install dependencies:

```bash
npm install
```

Start application:

```bash
node app.js
```

Open browser:

```text
http://localhost:3000
```

Expected Output:

```text
Dockerization Service Project Running 🚀
```

---

## Build Docker Image

Create Docker image:

```bash
docker build -t dockerization-service .
```

Verify image:

```bash
docker images
```

---

## Run Docker Container

Run container:

```bash
docker run -p 3000:3000 dockerization-service
```

Open browser:

```text
http://localhost:3000
```

Expected Output:

```text
Dockerization Service Project Running 🚀
```

---

## Run Using Docker Compose

Start container:

```bash
docker-compose up
```

Run in detached mode:

```bash
docker-compose up -d
```

Stop container:

```bash
docker-compose down
```

---

## Open Port in GitHub Codespaces

When the container starts:

1. Click the **Ports** tab in Codespaces.
2. Locate port **3000**.
3. Click **Open in Browser**.
4. The application will open in a new tab.

---

## Learning Outcomes

* Containerized a Node.js application.
* Built a Docker image.
* Ran containers using Docker.
* Used Docker Compose.
* Tested deployment inside GitHub Codespaces.

---

## Author

Betha Madhulatha

AWS Cloud & DevOps Portfolio Project
