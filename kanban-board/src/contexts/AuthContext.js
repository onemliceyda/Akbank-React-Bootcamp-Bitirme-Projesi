import { useEffect } from "react"
import { createContext, useState } from "react"
import instance from "../services/instance"
export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })

  const [token, setToken] = useState("")
  useEffect(() => {
    instance.interceptors.request.use((config) => {
      console.log("buraya gelebiliyor mu");
      const _config = { ...config }
      _config.headers = {
        ...config.headers,
        authorization: "Bearer" + token,
      }
      console.log(config);
      return _config
    })
    /* instance.interceptors.response.use((response)=>{},(error)=>{
      if([500,401,403].includes(error.response.status)){
        console.log("Bir hata oluştu logine yönlendirileceksiniz.");
      } //bu hatanın çıkacağı yer kontrol edilecek
     }) */
  }, [token])

  const login = (data) => {
    setToken(data.token)
    console.log("lütfen çalışıyor ollll :(", data)
  }
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
