import { useState, createContext, useContext, useEffect } from "react"
import ReactDOM from "react-dom"
import instance from "../services/instance"
const initialState = {
  isLoggedIn: Boolean(localStorage.getItem("token")),
  token: localStorage.getItem("token") || "",
  username: localStorage.getItem("username") || "",
}

export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    instance.interceptors.request.use((config) => {
      const _config = { ...config }
      _config.headers = {
        ...config.headers,
        authorization: "Bearer " + state.token,
      }
      return _config
    })
  }, [state.token])

  const login = (token, username) => {
    setState({
      username,
      token,
      isLoggedIn: true,
    })

    localStorage.setItem("token", token)
    localStorage.setItem("username", username)
  }
  const logout = () => {
    setState({
      username: "",
      token: "",
      isLoggedIn: false,
    })
    localStorage.setItem("token", "")
    localStorage.setItem("username", "")
  }

  return (
    <LoginContext.Provider
      value={{
        login: login,
        logout: logout,
        state: state,
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

export const useLoginContext = () => {
  const { state, login, logout } = useContext(LoginContext)
  return {
    username: state.username,
    isLoggedIn: state.isLoggedIn,
    login,
    logout,
  }
}
