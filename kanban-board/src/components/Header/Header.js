import * as React from "react"
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material"
import { useLoginContext } from "../../contexts/LoginContext"
import { useNavigate } from "react-router-dom"
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh"

const Header = () => {
  const { logout } = useLoginContext()
  const navigate = useNavigate()
  const handleClick = () => {
    logout()
    navigate("/login")
  }
  const handleOnClick = () => {
    navigate("/boards")
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: "#251B37", display: "flex", flexWrap: "wrap" }}
      >
        <Toolbar color={"#251B37"}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="secondary" onClick={handleOnClick}>
              Kanban Board
            </Button>
          </Typography>
          <Typography sx={{ textAlign: "center" }}>Untitled Board</Typography>
          <Button onClick={handleClick} color="secondary">
            Logout{" "}
            <IconButton sx={{ color: "white" }}>
              <BrightnessHighIcon />
            </IconButton>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
