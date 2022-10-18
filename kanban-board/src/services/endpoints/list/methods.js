import service from "../../instance"


export const createNewList = (payload) => {
  return service.post("board", payload)
}

export const createListTitle=(title)=>{
  return service.post("board", title)
}
export const destroyList=(id)=>{
  return service.delete("board", id)
}