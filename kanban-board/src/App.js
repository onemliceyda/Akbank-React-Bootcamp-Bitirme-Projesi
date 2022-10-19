import React from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import HomePage from "./pages/HomePage"
import { useLoginContext } from "./contexts/LoginContext"
import CardComponent from "./components/Card/CardComponent"
function App() {
  const { isLoggedIn } = useLoginContext()

  return (
    <div className="App">
         {!isLoggedIn ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/boards" element={<HomePage/>} />
            <Route path="/board/:boardId" element={<CardComponent/>} />

          </Routes>
        </BrowserRouter>
      )} 
    </div>
  )
}

export default App
