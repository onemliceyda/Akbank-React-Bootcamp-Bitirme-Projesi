import * as React from "react"
import { useContext } from "react"
import { Typography, Box, TextField, Button } from "@material-ui/core"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../contexts/AuthContext"
import {auth} from "../../services/http/endpoints/auth"


function LoginForm() {
  const [formValues, setFormValues] = React.useState({
    username: "",
    password: "",
  })
  const { login } = useAuthContext()
  //const { login } = useContext(AuthContextProvider)

  let navigate = useNavigate()
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = () => {
    setFormValues(formValues)
  }
  return (
    <div>
      <form>
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
          boxShadow={"5px 5px 10px #C4D7E0"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h2" padding={3} textAlign="center">
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
            color="primary"
            onClick={() => {
              auth.login(formValues).then(({ data }) => {
                login(data)
               
              })
              navigate("/board")
            }}
          >
            Login
          </Button>

          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            onSubmit={handleSubmit}
            type="button"
            onClick={() => {
              navigate("/register")
            }}
          >
            Change to SignUp
          </Button>
        </Box>
      </form>
    </div>
  )
}
export default LoginForm
