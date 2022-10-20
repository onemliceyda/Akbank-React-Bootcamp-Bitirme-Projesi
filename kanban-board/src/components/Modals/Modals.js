import * as React from "react"
import {
  Box,
  Modal,
  Button,
  Typography,
  TextField,
  IconButton,
  Grid
} from "@mui/material"
import { useState } from "react"
import EditIcon from "@material-ui/icons/Edit"
import CloseIcon from "@material-ui/icons/Close"
import { card as api } from "../../services/endpoints/card"
import storeApi from "../../utils/storeApi"
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
    title: card.title,
    dueData: card.dueData,
    description: card.description,
  })

  const changeHandler = (e) => {
    setNewContent({
      ...content,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    api
      .updateCard(card.id, content)
      .then(({ data }) => {
        console.log(data)
        setNewContent(data)
      })
      .catch((err) => {
        return err
      })
    handleClose()
  }

  return (
    <div>
      <Grid container direction={"row"} spacing={5}>
  <Grid item>
      <Modal
        onSubmit={handleSubmit}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            label="Title"
            variant="outlined"
            onChange={changeHandler}
            value={content.title}
            fullWidth
            name="title"
          />

          <TextField
            fullWidth
            label="Description"
            sx={{
              width: "100%",
              marginBottom: "10px",
      
            }}
            onChange={changeHandler}
            value={content.description}
            name="description"
          />
          <TextField
            variant="outlined"
            type="date"
            fullWidth
            value={content.duedate}
            onChange={changeHandler}
            name="duedate"
          />
          <IconButton
            onClick={handleSubmit}
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
      </Grid>
      </Grid>
    </div>
  )
}

export default Modals
