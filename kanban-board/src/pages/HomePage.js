import React, { useEffect } from "react"
import Boards from "../components/Boards"
import { useNavigate } from "react-router-dom"
import { board } from "../../src/services/endpoints/board/"
import { useState } from "react"
import Header from "../components/Header"
import {
  CardContent,
  Typography,
  Button,
  Card,
  Box,
  IconButton,
} from "@mui/material"
import { useParams } from "react-router-dom"
import CloseIcon from "@mui/icons-material/Close"
import AddIcon from "@mui/icons-material/Add"
import Grid from "@material-ui/core/Grid"


const HomePage = () => {
  const navigate = useNavigate()
  const [boards, setNewBoards] = useState([])

  const handleCreateBoard = () => {
    board.createBoard({ title: "Untitled Board" }).then(({ data }) => {
      console.log(data)
      navigate(`/board/:${data.id}`)
    })
  }
  const handleDeleteBoard = (id) => {
    board.destroyBoardList(id).then(({ data }) => {
      console.log(data)
      setNewBoards(boards.filter((board) => board.id !== id))
    })
  }
  const handleBoardClick = (id) => {
    navigate(`/board/:${id}`)
  }

  useEffect(() => {
    board.getBoardList().then(({ data }) => {
      setNewBoards(data)
    })
  }, [])







  return (
    <div>
      <Header board={board} />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <div className="header text-center">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              textAlign: "center",
              color: "secondary.main",
            }}
          >
            {boards.map((board, index) => (
              <Card
                sx={{
                  maxWidth: 345,
                  m: 1,
                  color: "#FDEEDC",
                  bgcolor: "#FDEEDC",
                }}
                key={index}
                variant="outlined"
              >
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <Button onClick={() => handleBoardClick(board.id)}>
                      {board.title}
                    </Button>
                    <IconButton
                      onClick={() => handleDeleteBoard(board.id)}
                      sx={{ color: "secondary" }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Typography>
                </CardContent>
              </Card>
            ))}
            <Card
              sx={{ maxWidth: 345, m: 1, bgcolor: "#FFD8A9" }}
              variant="outlined"
            >
              <CardContent>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  sx={{ bgcolor: "#FFD8A9" }}
                >
                  <IconButton
                    onClick={handleCreateBoard}
                    sx={{ bgcolor: "#FDEEDC" }}
                  >
                    <AddIcon /> Add Board
                  </IconButton>
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </div>
      </Grid>
    </div>
  )
}

export default HomePage
