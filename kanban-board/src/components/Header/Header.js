import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { useLoginContext } from "../../contexts/LoginContext"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const { logout } = useLoginContext()
  const navigate = useNavigate()
  const handleClick = () => {
    logout()
    navigate("/login")
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#251B37" }}>
        <Toolbar color={"#251B37"}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Kanban Board
          </Typography>
          <Button onClick={handleClick} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
