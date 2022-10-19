import service from "../../instance"


export const createNewList = (payload) => {
  return service.post("list", payload)
}

export const createListTitle=(id,payload)=>{
  return service.put(`list/${id}`,payload)
}
export const destroyList=(id)=>{
  return service.delete(`list/${id}`)
}
export const getList=(boardId)=>{
return service.get(`list?boardId=${boardId}`)
}