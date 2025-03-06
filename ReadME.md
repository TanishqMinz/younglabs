# YoungLabs Full-Stack App

This is a simple full-stack application with a **React frontend** and an **Express backend**.

## 🚀 Live Demo
- **Frontend:** [https://younglabs-frontend.vercel.app](https://younglabs-frontend.vercel.app)
- **Backend:** [https://younglabs-backend-alpha.vercel.app/api/greet?name=YourName](https://younglabs-backend-alpha.vercel.app/api/greet?name={YourName})

## 📂 Project Structure
```
/younglabs-app
  ├── /frontend    # React App (Vite + TailwindCSS)
  ├── /backend     # Express Server (Node.js)
```

---

##  Setup Instructions
###  Clone the Repository
```bash
git clone https://github.com/yourusername/younglabs-app.git
cd younglabs-app
```

---

##  Frontend (React)
###  Run Locally
```bash
cd frontend
npm install
npm run dev
```
**Frontend runs at:** `http://localhost:5173`


## Backend (Express + Node.js)
###  Run Locally

Make a seperate terminal first
```bash
cd backend
npm install
npm start
```
**Backend runs at:** `http://localhost:5000`

**Backend API Endpoint:**
```
GET /api/greet?name=YourName
```
Example response:
```json
{
  "message": "Hello, YourName! Welcome to Younglabs."
}
```






