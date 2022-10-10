import { createContext, useState } from "react"

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })

  const [token, setToken] = useState("")
  const login = (data) => {
    setToken(data.token)
    console.log("lütfen çalışıyor ollll :(", data)
  }
  //buraya configi tanımla token yerine kullan ->token yerine configi yolla :! contexte at 
  const [checked, setChecked] = useState(true)

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (formValues) => {
    setValues(formValues)
  }

  return (
    <AuthContext.Provider
      value={{ values, checked, handleChange, handleSubmit, login, token }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
