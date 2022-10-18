import * as React from "react"
import { useContext, useState } from "react"
import { Typography, Box, TextField, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import {auth} from "../../services/endpoints/auth"
import { useLoginContext } from "../../contexts/LoginContext"

const RegisterForm = () => {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  })
  const handleChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const {login}=useLoginContext();

  const handleSubmit=()=>{
    auth.register(formValues).then(
      ({data})=>{
        login(data.token,data.username)
        navigate("/boards")
      }
    )
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
          Register
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
        <TextField
          required
          id="outlined-basic"
          placeholder="Password"
          label="Password Confirm"
          variant="outlined"
          type={"password"}
          margin="normal"
          name="passwordConfirm"
          value={formValues.passwordConfirm}
          onChange={handleChange}
        />

        <Button
          sx={{ marginTop: 3, borderRadius: 3 }}
          variant="outlined"
          color="secondary"
          onClick={handleSubmit}
        >
          Register
        </Button>

        <Button
          sx={{ marginTop: 3, borderRadius: 3 }}
          type="button"
          color="secondary"
          onClick={() => {
            navigate("/login")
          }}
        >
          Change to Sign In
        </Button>
      </Box>
    </div>
  )
}

export default RegisterForm
