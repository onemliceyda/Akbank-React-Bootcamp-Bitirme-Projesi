import React from "react"
import List from "./components/List/List"
import { useState } from "react"
import { v4 as uuid } from "uuid"
import store from "./utils/store"
import StoreApi from "./utils/storeApi"
function App() {
  const [data, setData] = useState(store)
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
    };
    setData(newState)
  }
    return (
      <StoreApi.Provider value={{ addCard }}>
        <div>
          {data.listIds.map((listId) => {
            const list = data.lists[listId]
            return <List list={list} key={listId} />
          })}
        </div>
      </StoreApi.Provider>
    )
  }
export default App
