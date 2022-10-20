import * as React from "react"
import {
  Box,
  Modal,
  Button,
  Typography,
  TextField,
  IconButton,
} from "@mui/material"
import EditIcon from "@material-ui/icons/Edit"
import CloseIcon from "@material-ui/icons/Close"
import { useState } from "react"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #b05370",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexWrap: "wrap",
}
const Modals = ({  card }) => {
   const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false) 
  const [content, setNewContent] = useState("")

  const changeHandler = (e) => {
    setNewContent({
      ...content,
      [e.target.name]: e.target.value,
    })
    console.log(content)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    setNewContent("")
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} textAlign="center" width={200}>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            onChange={changeHandler}
            value={card.title}
            fullWidth
          />

          <TextField
            fullWidth
            label="Description"
            id="description"
            sx={{
              width: "100%",
              marginBottom: "10px",
            }}
            onChange={changeHandler}
            value={card.description}
          />
          <TextField
            id="outlined-basic"
            label="Comment"
            variant="outlined"
            onChange={changeHandler}
            value={card.dueData}
            fullWidth
          />

       

          <IconButton
            onClick={handleClose}
            variant="contained"
            color="primary"
            sx={{ justifyContent: "center" }}
          >
            <EditIcon />
          </IconButton>
          <IconButton onClick={handleClose} variant="contained" color="primary">
            <CloseIcon />
          </IconButton>
        </Box>
      </Modal>
    </div>
  )
}

export default Modals
