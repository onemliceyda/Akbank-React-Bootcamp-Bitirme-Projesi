import service from "../../instance"
export const login = (loginmodel) => {
  return service.post("auth/login", loginmodel)
}

export const register = (registerModel) => {
  return service.post("auth/register", registerModel)
}
