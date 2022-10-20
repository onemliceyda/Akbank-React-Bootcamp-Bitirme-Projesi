import React, { useEffect } from "react"
import List from "../List/List"
import { useState } from "react"
import { v4 as uuid } from "uuid"
import store from "../../utils/store"
import StoreApi from "../../utils/storeApi"
import InputContainer from "../Input/InputContainer"
import { makeStyles } from "@material-ui/core/styles"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import Header from "../Header"
import { useParams } from "react-router-dom"
import { list as api } from "../../services/endpoints/list"
const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    background: "#C4D7E0",
    width: "100%",
    overflowY: "auto",
    flexWrap: "wrap",
  },
}))

function CardComponent() {
  const [data, setData] = useState(store)
  const classes = useStyle()
  const [lists, setLists] = useState()
  let { boardId } = useParams()
  boardId = Number(boardId.slice(1))

  useEffect(() => {
    api.getList(boardId).then(({ data }) => {
      setLists(data)
    })
    console.log("xxxx")
  }, [])

  const addCard = (data, listId) => {
    const newCard = data
    console.log(data)
    const array = [...lists]
    const list = array.find((list) => listId === list.id)
    list.cards.push(newCard)
    setLists(array)
  }

  const addList = (list) => {
    const newList = {
      ...list,
      cards: [],
    }

    setLists((prev) => [...prev, newList])
    /* const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    }
    setData(newState) */
  }

  const updateListTitle = (title, listId) => {
    const array = [...lists]
    const list = array.find((list) => listId === list.id)
    list.title=title
    setLists(array)
    
  }

  


  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result
    console.log("destination", destination, "source", source, draggableId)

    if (!destination) {
      return
    }

    if (type === "list") {
      const newLists = [...lists]
      const temp = newLists.splice(source.index, 1)[0]
      newLists.splice(destination.index, 0, temp)
      setLists(newLists)
      return
    }
    const sourceList = lists.find((list) => list.id == source.droppableId)
    const destinationList = lists.find(
      (list) => list.id == destination.droppableId
    )
    const draggingCard = sourceList.cards.filter(
      (card) => String(card.id) === draggableId
    )[0]
    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1)
      destinationList.cards.splice(destination.index, 0, draggingCard)
      const newState = {
        lists: {
          ...lists,
          [sourceList.id]: destinationList,
        },
      }
      //console.log(newState);
      setLists(newState)
    } else {
      sourceList.cards.splice(source.index, 1)
      destinationList.cards.splice(destination.index, 0, draggingCard)

      // const newState = {

      //   lists: {
      //     ...lists,
      //     [sourceList.id]: sourceList,
      //     [destinationList.id]: destinationList,
      //   },
      // }
    }
  }
  return (
    <StoreApi.Provider value={{ addCard, addList, updateListTitle }}>
      <Header lists={lists} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="app" type="list" direction="horizontal">
          {(provided) => (
            <div
              className={classes.root}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {lists &&
                lists.map((list, index) => (
                  <List list={list} key={list.id} index={index} />
                ))}
              <InputContainer type="list" boardId={boardId} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </StoreApi.Provider>
  )
}
export default CardComponent
