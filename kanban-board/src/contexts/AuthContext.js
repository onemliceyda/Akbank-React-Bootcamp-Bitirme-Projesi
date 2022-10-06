import { createContext, useState } from "react"

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  })

  const [checked, setChecked] = useState(true)

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (formValues) => {
    setValues(formValues)
  }

  const handleCheck = (e) => {
    setChecked(e.target.checked)
  }

  return (
    <AuthContext.Provider
      value={{ values, checked, handleChange, handleSubmit, handleCheck }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
