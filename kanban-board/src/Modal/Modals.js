import * as React from "react"
import { Box, Button, Typography, Modal, TextField } from "@material-ui/core"
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
}
const Modals = ({open,handleClose,card}) => {
 /*  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false) */
  const [content, setNewContent] = useState("")

  const changeHandler = (e) => {
    setNewContent({
      ...content,
      [e.target.name]: e.target.value,
    })
    console.log(content);
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
            id="standard-basic"
            label="Standard"
            variant="standard"
            onChange={changeHandler}
            value={content.board}
          />

          <TextField
            fullWidth
            label="fullWidth"
            id="fullWidth"
            sx={{
              width: "100%",
              marginBottom: "10px",
            }}
            onChange={changeHandler}
            value={content.title}
          />
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            fullWidth="100%"
            variant="outlined"
            row={10}
            sx={{
              width: "100%",
              marginBottom: "10px",
              padding: "8px",
            }}
            onChange={changeHandler}
            value={content.description}
          />
          <Button
            onClick={handleClose}
            variant="contained"
            color="primary"
          >
            Kapat <CloseIcon />
          </Button>
        </Box>
      </Modal>
    </div>
  )
}

export default Modals
