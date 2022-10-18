import service from "../../instance"


export const createBoard = (payload) => {
  return service.post("board", payload)
}

export const getBoardList = () => {
  return service.get("board")
}

export const destroyBoardList=(payload)=>{
  return service.delete("board",payload)
}

