import * as React from "react"
import { useContext } from "react"
import { Typography, Box, TextField, Button } from "@material-ui/core"

import { AuthContext } from "../../contexts/AuthContext"

function LoginForm() {
  const [formValues,setFormValues]=React.useState({password:"",email:""})
  const {  handleSubmit } = useContext(AuthContext)

  const handleChange=(e)=>{
    setFormValues({ ...formValues, [e.target.name]: e.target.value }
      )
  }

  console.log(formValues);
  return (
    <div>
      <form >
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
            Login
          </Typography>

          <TextField
            id="outlined-basic"
            placeholder="Email"
            label="Email"
            variant="outlined"
            type={"email"}
            margin="normal"
            name="email"
            value={formValues.email}
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
            value={formValues.password}
            onChange={handleChange}
          />
          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="outlined"
            color="primary"
            
          >
            Login
          </Button>

          <Button sx={{ marginTop: 3, borderRadius: 3 }} onSubmit={handleSubmit(formValues)} type="button">
            Change to SignUp
          </Button>
        </Box>
      </form>
    </div>
  )
}
export default LoginForm
