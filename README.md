# Employee Management Application

A full-stack Employee Management Application built using:

- React (Frontend)
- Webpack (Bundling)
- Express.js (Backend)
- MongoDB + Mongoose (Database)

---

## 📁 Project Structure

project-root/
│
├── controllers/
├── models/
├── routes/
├── src/
├── public/
├── app.js
├── index.html
├── webpack.config.cjs
├── package.json
├── .env
└── README.md

---

## ⚙️ Installation

npm install

---

## 🔐 Environment Setup

Create `.env` file:

MONGO_URI=your_mongodb_connection_string  
PORT=5000

---

## 🛠 Build

npm run build

---

## ▶️ Run

npm start

Open:
http://localhost:5000

---

## 🌐 API

GET /api/employees  
POST /api/employees  
PATCH /api/employees/:id  
DELETE /api/employees/:id  

---

## 📸 Screenshots

### Before Insert (Web)
![Before Insert](./themes/before-insert-web.png)

### Before Insert (DB)
![Before Insert DB](./themes/before-insert-db.png)

### After Insert (Web)
![After Insert](./themes//after-insert-web.png)

### After Insert (DB)
![After Insert DB](./themes/after-insert-db.png)

### After Delete (Web)
![After Delete](./themes/after-delete-web.png)

### After Delete (DB)
![After Delete DB](./themes/after-delete-db.png)

---

## 📂 Screenshots Folder

Create:
themes/

Add images:
before-insert-web.png  
before-insert-db.png  
after-insert-web.png  
after-insert-db.png  
after-delete-web.png  
after-delete-db.png  

---

## ✨ Features

- Load employees from MongoDB
- Add employee
- Delete employee
- Update employee
- Console count updates
- Modular React components
- Webpack bundling

---

## 📦 Commands

npm install  
npm run build  
npm start  

---

## ⚠️ Notes

.gitignore should include:

node_modules/  
.env  
public/employees.bundle.js  

---

## 👨‍💻 Author

Shivam Patel
