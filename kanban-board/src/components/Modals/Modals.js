import * as React from "react"
import {
  Box,
  Modal,
  Button,
  Typography,
  TextField,
  IconButton,
} from "@mui/material"
import { useState } from "react"
import EditIcon from "@material-ui/icons/Edit"
import CloseIcon from "@material-ui/icons/Close"
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

const Modals = ({ open, handleClose, card }) => {
  const [content, setNewContent] = useState({
    title: "",
    dueData: "",
    description: "",
    comment: [],
  })


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
  const handleChange = () => {
    console.log("deneme")
  }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
            id="outlined-basic"
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
            sx={{
              width: "100%",
              marginBottom: "10px",
            }}
          />
              <TextField id="outlined-basic" variant="outlined" type="date" fullWidth/>
          <IconButton
            onChange={handleChange}
            variant="contained"
            color="primary"
            sx={{ flexWrap: "wrap" }}
          >
            <EditIcon />
            Edit
          </IconButton>
          <IconButton
            variant="contained"
            color="primary"
            onClick={handleClose}
            sx={{ flexWrap: "wrap" }}
          >
            <CloseIcon />
            Close
          </IconButton>
      
        </Box>
      </Modal>
    </div>
  )
}

export default Modals
