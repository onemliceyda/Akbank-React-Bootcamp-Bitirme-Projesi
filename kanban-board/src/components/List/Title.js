import React, { useState } from "react"
import { Typography, InputBase } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

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

const Title = ({ title }) => {
  const [open, setOpen] = useState(false)
  const classes = useStyle()
  return (
    <div>
      {open ? (
        <div>
          <InputBase
            autoFocus
            value={title}
            inputProps={{
              className: classes.input,
            }}
            fullWidth
            onBlur={() => setOpen(!open)}
          />
        </div>
      ) : (
        <div>
          <Typography
            onClick={() => setOpen(!open)}
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
