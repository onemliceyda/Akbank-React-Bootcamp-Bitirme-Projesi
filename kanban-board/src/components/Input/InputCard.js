import React from "react"
import { Paper, InputBase, Button, IconButton } from "@material-ui/core"
import { makeStyles, fade } from "@material-ui/core/styles"
import { useState, useContext } from "react"
import storeApi from "../../utils/storeApi"
const useStyle = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(1),
  },
  btnConfirm: {
    background: "#5AAC44",
    color: "#fff",
    "&:hover": {
      background: fade("#5AAC44", 0.75),
    },
  },
  confirm: {
    margin: theme.spacing(0, 1, 1, 1),
  },
}))

const InputCard = ({ setOpen, listId }) => {
  const classes = useStyle()
  const { addCard } = useContext(storeApi)
  const [cardTitle, setCardTitle] = useState("")
  const handleOnChange = (e) => {
    setCardTitle(e.target.value)
  }

  const handleBtnConfirm = () => {
    addCard(cardTitle, listId)
    setCardTitle("")
    setOpen(false)
  }
  const handleBlur = () => {
    setOpen(false)
    setCardTitle("")
  }
  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            onChange={handleOnChange}
            multiline
            onBlur={handleBlur}
            fullWidth
            inputProps={{
              className: classes.input,
            }}
            value={cardTitle}
            placeholder="Enter a title of this card"
          />
        </Paper>
      </div>
      <div className="classes.confirm">
        <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>
          + Add Card
        </Button>
        <div></div>
        <IconButton onClick={() => setOpen(false)}></IconButton>
      </div>
    </div>
  )
}

export default InputCard
