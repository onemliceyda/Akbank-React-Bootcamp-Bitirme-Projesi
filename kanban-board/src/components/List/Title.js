import React, { useState, useContext } from "react"
import { Typography, InputBase } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import storeApi from "../../utils/storeApi"
import {addNewListTitle} from "../../services/api"
const useStyle = makeStyles((theme) => ({
  root: {
    width: "300px",
    backgroundColor: "#EBECF0",
    marginLeft: theme.spacing(1),
  },
  editableTitle: {
    marginLeft: theme.spacing(1),
    flexGrow: 1,
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  input: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: theme.spacing(1),
    "&:focus": {
      background: "#ddd",
    },
  },
}))

const Title = ({ title, listId }) => {
  const [open, setOpen] = useState(false)
  const classes = useStyle()
  const { updateListTitle } = useContext(storeApi)
  const [newTitle, setNewTitle] = useState(title)
  const handleOnChange = (e) => {
    setNewTitle(e.target.value)
  }
  const handleOnBlur = () => {
    updateListTitle(newTitle, listId)
    addNewListTitle(newTitle)
    console.log(newTitle);
    setOpen(false)
  }
  return (
    <div>
      {open ? (
        <div>
          <InputBase
            onChange={handleOnChange}
            autoFocus
            value={newTitle}
            inputProps={{
              className: classes.input,
            }}
            fullWidth
            onBlur={handleOnBlur}
          />
        </div>
      ) : (
        <div>
          <Typography
            onClick={() => {
              setOpen(!open)
            }}
            className={classes.editableTitle}
          >
            {title}
          </Typography>
        </div>
      )}
    </div>
  )
}

export default Title
