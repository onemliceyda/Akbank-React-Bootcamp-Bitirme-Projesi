import React from "react"
import { Paper, InputBase, Button, IconButton } from "@material-ui/core"
import { makeStyles, alpha } from "@material-ui/core/styles"
import { useState, useContext } from "react"
import storeApi from "../../utils/storeApi"
import {card} from "../../services/endpoints/card"
import {list} from "../../services/endpoints/list"
import { TitleOutlined } from "@material-ui/icons"

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
      background: alpha("#5AAC44", 0.75),
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
      console.log(title);
      card.createCard({title:title}).then(({data})=>{
        console.log(data);
      }).catch((error) => {
        if( error.response ){
            console.log(error.response.data); // => the response payload 
        }
    });
      
     
    } else {
      addList(title)
      setTitle("")
      setOpen(false)
      list.createNewList(title,listId).then(({data})=>{
        console.log(data);
      })
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
        <IconButton onClick={() => setOpen(false)}></IconButton>
      </div>
     
    </div>
  )
}

export default InputCard
