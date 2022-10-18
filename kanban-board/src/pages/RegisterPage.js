import React, {  useContext } from 'react'
import { useNavigate } from 'react-router'
import RegisterForm from '../components/RegisterForm'
//import { useLoginContext } from '../contexts/LoginContext'
import { auth } from '../services/endpoints/auth'

const RegisterPage = (props) => {
  const navigate = useNavigate()
  //const { login } = useLoginContext()


  const handleRegister = (values) => {
     auth.register(values).then(({ data }) => {
      //login(data.token, data.username)
      navigate('/') } )
   
  }

  return <RegisterForm onRegister={handleRegister} />
}

export default RegisterPage