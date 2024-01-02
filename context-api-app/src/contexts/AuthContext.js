import { createContext, useState } from 'react'

export const AuthContext = createContext({})

export function AuthProvider({ children }){
  
  const [usuario, setUsuario] = useState(null)

  async function login(email, senha){
    if(email === 'king@king.com.br' && senha === '123'){
      setUsuario({
        nome: 'King',
        email: email,
        telefone: '+55 (32) 908742414',
        endereco: 'Rua Centro, Teste 123, RJ'
      })

      return 'ok'
    }
    return 'E-mail ou senha incorrertos!'
  }


  return (
    <AuthContext.Provider value={{
      // Mount of parameters
      usuario,
      login
    }}>
      { children }
    </AuthContext.Provider>
  )
}