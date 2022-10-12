import service from "../../../instance"
export const addNewListTitle = (title, config) => {
  service.post(
    "board",
    {
      title,
    },
    config
  )
}

export const addNewCard = (payload) => {
  service.post(`board`, payload)
}

export const addNewList = (title, boardId) => {
  service.post(
    "board",
    {
      title,
      boardId,
    },
  )
}

