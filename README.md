# Todo List App

A simple todo list application with Express backend and Docker deployment support.

## Features

- Add, complete, and delete tasks
- Data persists in JSON file (not lost on restart)
- Docker deployment with persistent volume
- Modern UI with gradient background

## Quick Start (Docker)

```bash
docker-compose up --build
```

Then open http://localhost:4040

## Quick Start (Local)

```bash
npm install
npm start
```

Open http://localhost:4040

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all todos |
| POST | `/api/todos` | Create todo |
| PUT | `/api/todos/:index` | Update todo |
| DELETE | `/api/todos/:index` | Delete todo |

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Database: JSON file (localStorage)
- Container: Docker, Docker Compose