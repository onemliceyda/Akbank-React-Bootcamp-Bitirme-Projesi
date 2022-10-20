import service from "../../instance"


export const createBoard = (payload) => {
  return service.post("board", payload)
}

export const getBoardList = () => {
  return service.get("board")
}
export const updateBoardTitle=(id,payload)=>{
  return service.put(`board/${id}`,payload)
}

export const destroyBoardList=(id)=>{
  return service.delete(`board/${id}`)
}

