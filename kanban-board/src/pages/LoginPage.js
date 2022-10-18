import React from 'react'
import { useNavigate } from 'react-router'
import LoginForm from '../components/LoginForm'
//import { useLoginContext } from '../contexts/LoginContext'
import { auth } from '../services/endpoints/auth'

const LoginPage = (props) => {
  const navigate = useNavigate()
  //const { login } = useLoginContext()


  const handleLogin = (values) => {
     auth.login(values).then(({ data }) => {
      //login(data.token, data.username)
      navigate('/') } )
   
  }

  return <LoginForm onLogin={handleLogin} />
}

export default LoginPage