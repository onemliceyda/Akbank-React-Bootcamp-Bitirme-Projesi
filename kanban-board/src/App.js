import React from "react"
import CardComponent from "./components/Card/CardComponent"
import LoginForm from "./components/LoginForm/LoginForm"
import RegisterForm from "./components/RegisterForm/RegisterForm"
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom"
import AuthContextProvider from "./contexts/AuthContext"

function App() {
  return (
    <Router>
      {/* <nav>
        <Link to="/board">Boards</Link>
      </nav> */}
      <Routes>
      <Route exact path="/" element={ <AuthContextProvider><LoginForm /></AuthContextProvider>} />
        <Route path="/login" element={ <AuthContextProvider><LoginForm /></AuthContextProvider>} />
        <Route path="/register" element={ <AuthContextProvider><RegisterForm /></AuthContextProvider> } />
        <Route path="/board" element={<CardComponent />} />
        <Route path="*" element={<AuthContextProvider><LoginForm /></AuthContextProvider>}/>
      </Routes>
    </Router>
  )
}
export default App
