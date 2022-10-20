import React from "react"
import { Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Draggable } from "react-beautiful-dnd"
import { IconButton } from "@mui/material"
import VisibilityIcon from "@mui/icons-material/Visibility"
import Modals from "../Modals"
const useStyle = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
  },
}))

const Card = ({ card, index }) => {
  const classes = useStyle()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <Draggable draggableId={String(card.id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Paper className={classes.card} onClick={handleOpen}>
            {card.title}
            <IconButton onClick={handleOpen} sx={{marginLeft:35}}>
              <VisibilityIcon />
            </IconButton>
          </Paper>
          {/* //card.duedate dicez */}

          <Modals open={open} handleClose={handleClose} card={card} />
        </div>
      )}
    </Draggable>
  )
}

export default Card
