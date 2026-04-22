# 🎓 Favourite Student Manager

A simple and clean React application to manage students and mark your favourites — built using modern tools like **React, Vite, Tailwind CSS, and React Router**.

---

## 🚀 Features

* ➕ Add new students
* ⭐ Mark students as favourites
* ❌ Remove students from favourites
* 🔄 Real-time UI updates using React state
* 🌐 Multi-page navigation using React Router
* 🎨 Styled with Tailwind CSS for a clean UI

---

## 🛠️ Tech Stack

* ⚛️ React (Functional Components + Hooks)
* ⚡ Vite (Fast development build tool)
* 🎨 Tailwind CSS (Utility-first styling)
* 🔀 React Router DOM (Routing)
* 🧠 Context API (Global state management)

---

## 📁 Project Structure

```
favourite-student/
│
├── src/
│   ├── component/
│   │   ├── Student.jsx
│   │   ├── FavouriteStudent.jsx
│   │   ├── AddStudent.jsx
│   │   ├── ListContextProvider.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│
├── package.json
└── README.md
```

---

## 🧠 How It Works

* The app uses a **global state (`list`)** managed by React Context.
* Each student object looks like:

```js
{
  name: "Sam",
  status: false
}
```

* `status: false` → Normal student
* `status: true` → Favourite student

### 🔄 Flow

1. Add a student → gets added to list
2. Click “Favourite” → status becomes `true`
3. Favourite page filters and displays only favourites
4. Click “Remove” → status becomes `false`

---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd favourite-student
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

---

## 🌐 Routes

| Route               | Description             |
| ------------------- | ----------------------- |
| `/`                 | View all students       |
| `/favouritestudent` | View favourite students |
| `/addstudent`       | Add a new student       |

---

## 🎯 Key Concepts Used

* React Hooks (`useState`, `useContext`)
* Context API for global state
* Immutable state updates using spread operator
* Conditional rendering
* Tailwind utility classes
* Client-side routing

---

## ✨ Future Improvements

* 💾 Persist data using LocalStorage
* 🔍 Search and filter students
* 📊 Display count of favourite students
* 🎭 Add animations and transitions
* 📱 Improve responsive design

---

## 👨‍💻 Author

**Sam Grason**

---

## 📜 License

This project is open-source and free to use.
