import * as React from "react"
import { useContext } from "react"
import { Typography, Box, TextField, Button } from "@material-ui/core"
import { useNavigate } from "react-router-dom"
import { login } from "../../services/api"
import { AuthContext } from "../../contexts/AuthContext"
import * as Yup from "yup"
import { useFormik } from "formik"

function LoginForm() {
  const [formValues, setFormValues] = React.useState({
    password: "",
    email: "",
  })
  const { values, handleChange, handleSubmit } = useContext(AuthContext)
  let navigate = useNavigate()

  /*const handleChange=(e)=>{
    setFormValues({ ...formValues, [e.target.name]: e.target.value }
      )
  }*/
  console.log(formValues)
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Lütfen geçerli bir e-mail giriniz').required(
        "Zorunlu alandır."
      ),
      password: Yup.string()
        .max(8, "Maximum 8 karakter olmalıdır")
        .min(4, "Minimum 4 karakter olmalıdır")
        .required("Zorunlu alandır."),
    }),
    onSubmit: (values, { resetForm }) => {
      login(formik.values.email, formik.values.password)
      resetForm()
      navigate("/board")
    },
  })
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
            placeholder="Email"
            label="Email"
            variant="outlined"
            type={"email"}
            margin="normal"
            name="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
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
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={handleChange}
          />
  
          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="outlined"
            color="primary"
            onClick={() => {
              login(formValues)
              navigate("/board")
            }}
          >
            Login
          </Button>

          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            onSubmit={handleSubmit(values)}
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
