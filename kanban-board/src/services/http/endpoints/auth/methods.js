import service from "../../../instance"
export const login = (loginmodel) => {
  service.post("auth/login", loginmodel)
}

export const register = (registerModel) => {
  service.post("auth/register", registerModel)
}
