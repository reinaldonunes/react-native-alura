import api from "../api"

export async function buscarUsuario(username){
  try{
    const result = await api.get(`/users?login=${username}`)
    return result.data[0]
  }catch(error){
    console.log(error)
    return {}
  }
}