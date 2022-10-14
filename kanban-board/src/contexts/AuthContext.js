import { useState, createContext, useContext, useEffect } from "react"

import instance from "../services/instance"


const initialState = {
  isLoggedIn: Boolean(localStorage.getItem("token")),
  token: localStorage.getItem("token") || "",
  username: localStorage.getItem("username") || "",
}

export const AuthContext =createContext( {
    login: () => null,
    logout: () => null,
    state: initialState,
  })
 

export const AuthContextProvider= ({ children }) => {
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

    /* instance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        if ([500, 401, 403].includes(error.response.status)) {
          setState((prev) => ({
            ...prev,
            isLoggedIn: false,
            token: '',
            username: '',
          }))
        }
      }
    ) */
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
    <AuthContext.Provider
      value={{
        login: login,
        logout: logout,
        state: state,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const { state, login, logout } = useContext(AuthContext)
  return {
    username: state.username,
    isLoggedIn: state.isLoggedIn,
    login,
    logout,
  }
}
export default AuthContextProvider