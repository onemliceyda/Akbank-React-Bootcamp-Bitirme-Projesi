import React from "react"
import CardComponent from "./components/Card/CardComponent"
import LoginForm from "./components/LoginForm/LoginForm"
import RegisterForm from "./components/RegisterForm/RegisterForm"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import AuthContextProvider from "./contexts/AuthContext"

function App() {
  return (
    <AuthContextProvider>
      <Router>
        {/* <nav>
        <Link to="/board">Boards</Link>
      </nav> */}
        <Routes>
          { <Route exact path="/" element={<LoginForm />} /> }
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          { <Route path="/board" element={<CardComponent />} /> }
          { <Route path="*" element={<CardComponent />} /> }
        </Routes>
      </Router>
    </AuthContextProvider>
  )
}
export default App

//liste de gel config'i kopyala yapıştır.Api'de yazılan fonksiyonları yazdığın her yerde yapman gerekiyor.
