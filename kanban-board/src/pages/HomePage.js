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
const HomePage = () => {
  const navigate = useNavigate()
  const [boards, setNewBoards] = useState([])

  const handleCreateBoard = () => {
    board.createBoard({ title: "ikinci title" }).then(({ data }) => {
      console.log(data)
      navigate(`/board/:${data.id}`)
    })
  }
  const handleDeleteBoard = (id) => {
    board.destroyBoardList(id).then(({ data }) => {
      console.log(data)
     setNewBoards(boards.filter((board)=> board.id!==id))
    })
  }
  const handleBoardClick = (id) => {
    navigate(`/board/:${id}`)
  }

  useEffect(() => {
    board.getBoardList().then(({ data }) => {
      setNewBoards(data)
    })
  }, [boards])

  return (
    <div>
      <Header />

      <div className="header text-center">
        <Boards />

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit" onClick={handleCreateBoard}>
            Add Board
          </Button>
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {boards.map((board, index) => (
            <Card sx={{ maxWidth: 345, m: 1 }} key={index}>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <Button onClick={() => handleBoardClick(board.id)}>{board.title}</Button>
                  <IconButton onClick={() => handleDeleteBoard(board.id)}>
                    <CloseIcon />
                  </IconButton>
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </div>
    </div>
  )
}

export default HomePage
