import React from "react"
import List from "./components/List/List"
import { useState } from "react"
import { v4 as uuid } from "uuid"
import store from "./utils/store"
import StoreApi from "./utils/storeApi"
import InputContainer from "../src/components/Input/InputContainer"
import { makeStyles } from "@material-ui/core/styles"
const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    background: "#C4D7E0",
  },
}))

function App() {
  const [data, setData] = useState(store)
  const classes = useStyle()
  const addCard = (title, listId) => {
    const newCardId = uuid()
    const newCard = {
      id: newCardId,
      title,
    }

    const list = data.lists[listId]
    list.cards = [...list.cards, newCard]
    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    }
    setData(newState)
  }

  const addList = (title) => {
    const newListId = uuid()
    const newList = {
      id: newListId,
      title,
      cards: [],
    }
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    }
    setData(newState)
  }

  const updateListTitle = (title, listId) => {
    const list = data.lists[listId]
    list.title = title
    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    }
    setData(newState)
  }
  return (
    <StoreApi.Provider value={{ addCard, addList, updateListTitle }}>
      <div className={classes.root}>
        {data.listIds.map((listId) => {
          const list = data.lists[listId]
          return <List list={list} key={listId} />
        })}
        <InputContainer type="list" />
      </div>
    </StoreApi.Provider>
  )
}
export default App
