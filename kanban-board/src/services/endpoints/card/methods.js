import service from "../../instance"
export const createCard = (payload) => {
    return service.post("card", payload)
  }
  export const updateCard=(id,payload)=>{
    return service.put(`card/${id}`,payload)
  }