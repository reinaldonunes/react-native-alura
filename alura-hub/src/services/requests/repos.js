import api from "../api"

export async function buscarRepositorios(id){
  try{
    const result = await api.get(`/repos?postId=${id}`)
    return result.data
  }catch(error){
    console.log(error)
    return []
  }
}

export async function atualizarRepositorio(postId, nome, data, id){
  try{
    await api.put(`/repos/${id}`, {
      name: nome,
      data: data,
      postId: postId,
      id: id
    })
    return 'sucesso'
  }catch(error){
    console.log(error)
    return 'erro'
  }
}

export async function removerRepositorio(id){
  try{
    await api.delete(`/repos/${id}`)
    return 'sucesso'
  }catch(error){
    console.log(error)
    return 'erro'
  }
}

export async function adicionarRepositorio(postId, nome, data){
  try{
    await api.post(`/repos`, {
      name: nome,
      data: data,
      postId: postId
    })
    return 'sucesso'
  }catch(error){
    console.log(error)
    return 'erro'
  }
}