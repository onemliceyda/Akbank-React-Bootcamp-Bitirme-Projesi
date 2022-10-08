import axios from "axios";
const baseUrl = "http://localhost:80";

export function login(loginmodel){
    return axios.post(baseUrl + 'auth/login',loginmodel);
}
export function register(registerModel){
    return axios.post(baseUrl + 'auth/register',registerModel);
}
export function addNewCard(title){
    return axios.post(baseUrl + 'board',{
        title
    });
}
//config ->backend grup ödevine bak barer token ->loginden sonra sadece kullanıcılara izin verilcek
//create oluştur 