# 📝 Real-Time Collaborative Notepad

This is a real-time collaborative note-taking app built with React and WebSocket. It allows multiple users to edit a shared document in real time, similar to Google Docs.

## 🚀 Features
- Real-time updates using WebSocket (`ws`)
- Simple UI with responsive design
- Shared editing via a common room
- Lightweight and minimal dependencies

## 🛠 Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js with Express and `ws` (WebSocket)
- **Styling:** Inline CSS (CSS-in-JS)

---

## 📁 Project Structure

```
collab-app/
├── backend/
│   └── server.js
└── frontend/collab-app
    ├── package.json
    └── src/
        └── App.js
```

## 📦 Setup Instructions

### 🔧 Backend
```bash
cd backend
npm init -y
npm install express ws cors
node server.js
```
Server runs on: `http://localhost:3001`

### 💻 Frontend
```bash
npx create-react-app frontend
cd frontend
# Replace src/App.js with the code provided
npm start
```
App runs on: `http://localhost:3000`

---

## 📷 Screenshots
> ![screenshot-placeholder](https://via.placeholder.com/800x400.png?text=Live+Collaborative+Editor)

---

## ✨ Future Improvements
- User cursors and presence indication
- Document saving and versioning
- Auth and secure rooms

---

Built with ❤️ for collaborative learning.