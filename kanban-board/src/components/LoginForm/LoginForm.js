import * as React from "react"
import {  useState } from "react"
import { Typography, Box, TextField, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { auth } from "../../services/endpoints/auth"
import { useLoginContext } from "../../contexts/LoginContext"
const LoginForm = () => {
  const navigate = useNavigate();
  const {login}=useLoginContext();
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  })
  const handleChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit=()=>{
    auth.login(formValues).then(({data})=>{
      login(data.token,data.username)
      navigate("/boards")
    })
    
  }



  return (
    <div>
      <Box
        display="flex"
        flexDirection={"column"}
        maxWidth={400}
        alignItems="center"
        justifyContent={"center"}
        margin="auto"
        marginTop={5}
        padding={3}
        borderRadius={5}
        boxShadow={"5px 5px 10px #FF869E"}
        sx={{
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h2" padding={3} textAlign="center" color="#A10035">
          Login
        </Typography>

        <TextField
          required
          id="outlined-basic"
          placeholder="Username"
          label="Username"
          variant="outlined"
          type={"text"}
          margin="normal"
          name="username"
          value={formValues.username}
          onChange={handleChange}
        
        />

        <TextField
          required
          id="outlined-basic"
          placeholder="Password"
          label="Password"
          variant="outlined"
          type={"password"}
          margin="normal"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />

        <Button
          sx={{ marginTop: 3, borderRadius: 3 }}
          variant="outlined"
          color="secondary"
          onClick={handleSubmit}
        >
          Login
        </Button>

        <Button
          sx={{ marginTop: 3, borderRadius: 3 }}
          color="secondary"
          type="button"
          onClick={() => {
            navigate("/register")
          }}
        >
          Change to Sign Up
        </Button>
      </Box>
    </div>
  )
}

export default LoginForm
