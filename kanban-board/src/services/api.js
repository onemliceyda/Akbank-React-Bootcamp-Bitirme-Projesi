import axios from "axios"

const baseUrl = "http://localhost:80/"

//config ->backend grup ödevine bak barer token ->loginden sonra sadece kullanıcılara izin verilcek
//create oluştur

export function login(loginmodel) {
  return axios.post(baseUrl + "auth/login", loginmodel)
}
export function register(registerModel) {
  return axios.post(baseUrl + "auth/register", registerModel)
}

export function addNewCard(boardId, newTitle,config) {
  return axios.post(baseUrl + "board/" + boardId, {
    title: newTitle,
  },config)
} //güncelleme yapmalı forbidden diyor

export function addNewListTitle(title) {
  return axios.post(baseUrl + "board", {
    title,
  })
} //forbidden dönüyor

export function addNewBoard(payload,config) {
    return axios.post(`${baseUrl}board`,payload,config)
  }
  
export function getList(boardId) {
  return axios.get(`${baseUrl}board/${boardId}`)
}
