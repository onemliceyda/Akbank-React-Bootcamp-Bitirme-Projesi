import React from "react"
import { Paper, InputBase, Button, IconButton } from "@material-ui/core"
import { makeStyles, fade } from "@material-ui/core/styles"
import { useState, useContext } from "react"
import storeApi from "../../utils/storeApi"

const useStyle = makeStyles((theme) => ({
  card: {
    width: "280px",
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

const InputCard = ({ setOpen, listId, type }) => {
  const classes = useStyle()
  const { addCard, addList } = useContext(storeApi)
  const [title, setTitle] = useState("")
  const handleOnChange = (e) => {
    setTitle(e.target.value)
  }

  const handleBtnConfirm = () => {
    if (type === "card") {
      addCard(title, listId)
      setTitle("")
      setOpen(false)
    } else {
      addList(title)
      setTitle("")
      setOpen(false)
    }
  }

  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            onChange={handleOnChange}
            multiline
            onBlur={() => setOpen(false)}
            fullWidth
            inputProps={{
              className: classes.input,
            }}
            value={title}
            placeholder={
              type === "card" ? "Kart içeriğini giriniz" : "Kart oluşturunuz"
            }
          />
        </Paper>
      </div>
      <div className="classes.confirm">
        <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>
          {type === "card" ? "+ Add a card" : "Add a List"}
        </Button>
        <div></div>
        <IconButton onClick={() => setOpen(false)}>
        </IconButton>
      </div>
    </div>
  )
}

export default InputCard
