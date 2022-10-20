import * as React from "react"
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  TextField,
} from "@mui/material"
import { useLoginContext } from "../../contexts/LoginContext"
import { useNavigate } from "react-router-dom"
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh"
import { useState } from "react"
import CheckIcon from "@mui/icons-material/Check"
import { board } from "../../services/endpoints/board"

const Header = ({ board,lists }) => {
  const { logout } = useLoginContext()
  const navigate = useNavigate()
  const handleClick = () => {
    logout()
    navigate("/login")
  }
  const handleOnClick = () => {
    navigate("/boards")
  }
  const [boardName, setBoardName] = useState("Untitled Board")

  const handleChange = (e) => {
    setBoardName({ ...boardName, [e.target.name]: e.target.value })
  }

  const handleBoardClick = (id,title) => {
    const array = [...board]
    const temp = array.find((temp) => board.id === temp.id)
    temp.title=title
    setBoardName(array)
    board.updateBoardTitle(id,board.title).then(({ data }) => {
      console.log(data)
      setBoardName(data)
    })
  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: "#251B37", display: "flex", flexWrap: "wrap" }}
      >
        <Toolbar sx={{ color: "#251B37" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="secondary" onClick={handleOnClick}>
              Kanban Board
            </Button>
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            <TextField
              sx={{
                bgcolor: "white",
                textAlign: "center",
                p: -4,
                borderRadius: 13,
                color: "black",
              }}
              name="title"
              onChange={handleChange}
            >
              {boardName}
            </TextField>
            <IconButton onClick={handleBoardClick} sx={{ color: "#white" }}>
              <CheckIcon />
            </IconButton>
          </Typography>

          <Button onClick={handleClick} color="secondary">
            Logout{" "}
          </Button>
          <IconButton onClick={handleOnClick} sx={{ color: "white" }}>
            <BrightnessHighIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
