import React, { useEffect } from "react"
import Boards from "../components/Boards"
import { useNavigate } from "react-router-dom"
import { board } from "../services/endpoints/board"
import { useState } from "react"
import Header from "../components/Header"
import { Button } from "reactstrap"
const HomePage = () => {
  const navigate = useNavigate()
  const [boards, setNewBoards] = useState([])

  const handleCreateBoard = () => {
    board.createBoard({ title: "ikinci title" }).then(({ data }) => {
      console.log(data)
      navigate("/board")
    })
  }

  useEffect(() => {
    board.getBoardList().then(({ data }) => {
      setNewBoards(data)
    })
  }, [])

  return (
    <div>
      <Header />

      <div className="header text-center">
        <h3>Boards</h3>
        <button className="btn btn-primary mt-2" onClick={handleCreateBoard}>
          Add a board
        </button>

        <div className="board-container">
          {boards.map((board, index) => (
            <Button>{board.title}</Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage
