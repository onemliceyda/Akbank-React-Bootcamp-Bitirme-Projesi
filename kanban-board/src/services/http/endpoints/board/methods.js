import service from "../../../instance"
export const addNewListTitle = (title,config) => {
  return service.post(
    "board",
    {
      title,
    }     

  )
}

export const addNewCard = (payload) => {
  return service.post("board", payload)}



export const addNewList = (title, boardId) => {
   return service.post(
    "board",
    {
      title,
      boardId,
    },
  )
}

