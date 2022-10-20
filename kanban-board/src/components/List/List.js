import React from "react"
import { Paper, CssBaseline } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Title from "./Title"
import Card from "../Card/Card"
import InputContainer from "../Input/InputContainer"
import { Draggable, Droppable } from "react-beautiful-dnd"
const useStyle = makeStyles((theme) => ({
  root: {
    minWidth: "300px",
    backgroundColor: "#EBECF0",
    marginLeft: theme.spacing(1),
  },
  cardContainer: {
    marginTop: theme.spacing(4),
  },
}))
const List = ({ list, index }) => {
  const classes = useStyle()
  console.log(list.cards);
  return (
    <Draggable draggableId={String(list.id)} index={index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef}>
          <Paper className={classes.root} {...provided.dragHandleProps}>
            <CssBaseline />
            <Title title={list.title} listId={list.id} />
            <Droppable droppableId={String(list.id)}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={classes.cardContainer}
                >
                  {list.cards.map((card, index) => (
                    <Card key={String(card.id)} card={card} index={index} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <InputContainer listId={list.id} type="card" />
          </Paper>
        </div>
      )}
    </Draggable>
  )
}

export default List
