import service from "../../instance"
export const createCard = (title,listId) => {
    return service.post("board", title,listId)
  }