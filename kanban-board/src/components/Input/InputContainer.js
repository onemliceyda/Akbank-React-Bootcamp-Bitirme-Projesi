import React from "react"
import { Paper, Typography, Collapse } from "@material-ui/core"
import { makeStyles, fade } from "@material-ui/core/styles"
import InputCard from "./InputCard"
import { useState } from "react"

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
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

const InputContainer = ({listId}) => {
  const classes = useStyle()
  const [open, setOpen] = useState(false)
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className={classes.addCard}
          elevation={0}
          onClick={() => setOpen(!open)}
        >
          <Typography> + Add a card </Typography>
        </Paper>
      </Collapse>
    </div>
  )
}

export default InputContainer
