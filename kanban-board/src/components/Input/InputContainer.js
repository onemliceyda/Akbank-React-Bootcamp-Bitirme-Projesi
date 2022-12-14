import React from "react"
import { Paper, Typography, Collapse } from "@material-ui/core"
import { makeStyles, fade } from "@material-ui/core/styles"
import InputCard from "./InputCard"
import { useState } from "react"
import { board } from "../../services/endpoints/board"

const useStyle = makeStyles((theme) => ({
  root: {
    width: "300px",
    marginTop: theme.spacing(1),
  },
  addCard: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(0, 1, 1, 1),
    background: "#EBECF0",
    "&:hover": {
      backgroundColor: fade("#000", 0.25),
    },
  },
}))

const InputContainer = ({ listId, type,boardId}) => {
  const classes = useStyle()
  const [open, setOpen] = useState(false)
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} board={board} boardId={boardId} />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className={classes.addCard}
          elevation={0}
          onClick={() => setOpen(!open)}
        >
          <Typography>
            {type === "card" ? "+ Add a card" : "+ Add another List"}
          </Typography>
        </Paper>
      </Collapse>
    </div>
  )
}

export default InputContainer
