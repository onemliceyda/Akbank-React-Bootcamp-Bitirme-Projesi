import * as React from "react"
import { Typography, Box, TextField, Button } from "@material-ui/core"
import { AuthContext } from "../../contexts/AuthContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { register } from "../../services/api"
function RegisterForm() {
  const { values, handleChange, handleSubmit } = useContext(AuthContext)
  let navigate = useNavigate()
    console.log(values);
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
        >
          <Typography variant="h2" padding={3} textAlign="center">
            Register
          </Typography>
          <TextField
            id="outlined-basic"
            placeholder="Name"
            label="Name"
            variant="outlined"
            type={"text"}
            margin="normal"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            placeholder="Email"
            label="Email"
            variant="outlined"
            type={"email"}
            margin="normal"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            placeholder="Password"
            label="Password"
            variant="outlined"
            type={"password"}
            margin="normal"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="outlined"
            color="primary"
            onSubmit={handleSubmit(values)}
            onClick={()=>{
              register(values)
              navigate("/board")}}
          >
            Login
          </Button>
        </Box>
      </form>
    </div>
  )
}
export default RegisterForm
