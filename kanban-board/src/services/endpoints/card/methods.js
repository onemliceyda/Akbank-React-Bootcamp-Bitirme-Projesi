import service from "../../instance"
export const createCard = (payload) => {
    return service.post("card", payload)
  }