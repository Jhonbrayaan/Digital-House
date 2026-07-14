# 🚗 SystemCar

A Full Stack web application developed during the **Digital House** program, designed to manage users, vehicles and parking operations through a modern web interface and a RESTful API.

The project combines a **Node.js/Express backend** with an **Express + EJS frontend**, following a layered architecture and database integration using Sequelize.

---

# 📖 About

SystemCar was developed as a collaborative academic project with the goal of applying software engineering concepts in a real-world scenario.

The application allows users to register, authenticate, manage vehicles, register payment information and interact with the platform through a responsive web interface connected to a REST API.

This repository represents my personal copy of the project developed during the Digital House program.

---

# ✨ Features

- User registration
- User authentication
- Vehicle registration and management
- Payment card registration
- Scheduling page
- User profile
- Responsive web interface
- RESTful API
- Server-side rendering using EJS

---

# 🛠 Technologies

## Backend

- Node.js
- Express
- Sequelize
- PostgreSQL
- dotenv
- CORS

## Frontend

- Express
- EJS
- Bootstrap 5
- JavaScript
- HTML5
- CSS3
- Fetch API

---

# 📂 Project Structure

```text
Digital-House/

├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── serve.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── views/
│   ├── index.js
│   └── package.json
```

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/Jhonbrayaan/Digital-House.git
```

## Backend

```bash
cd backend

npm install

node src/serve.js
```

Runs on:

```
http://localhost:3200
```

---

## Frontend

```bash
cd frontend

npm install

node index.js
```

Runs on:

```
http://localhost:3000
```

---

# 🗄 Database

The application uses **PostgreSQL** through Sequelize ORM.

Create your own `.env` file before running the application.

Example:

```env
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
```

---

# 🏗 Architecture

The project follows a layered architecture, separating responsibilities into:

- Controllers
- Models
- Routes
- Views
- Services

This organization improves code readability, maintainability and scalability.

---

# 📌 Main API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /usuario | Register user |
| POST | /usuarioLogin | User authentication |
| GET | /usuario | List users |
| POST | /veiculo | Register vehicle |
| GET | /veiculo | List vehicles |
| POST | /cartao | Register payment card |
| POST | /estado | Register vehicle entry/exit |

---

# 🚧 Future Improvements

Some enhancements that could be implemented in future versions include:

- JWT authentication
- Password hashing
- Role-based authorization
- Input validation
- Improved error handling
- Docker support
- Automated testing
- CI/CD pipeline
- Environment-based configuration
- API documentation with Swagger

---

# 👥 Contributors

- Jhonatan Brayan
- Andressa Laurentino de Lima
- Caline Lira
- Vinicius Castro
- Vitor Ferreira Fernandes
