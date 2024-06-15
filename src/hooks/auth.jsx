import { createContext, useContext, useState, useEffect } from "react"

import { api } from "../services/api.js"

import { useNavigate } from "react-router-dom"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
      
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
      localStorage.setItem("@rocketnotes:token", token)

      api.defaults.headers.authorization = `Bearer ${token}`
      setData({ user, token})

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      }else {
        alert("Não foi possível entrar")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketnotes:user")
    localStorage.removeItem("@rocketnotes:token")

    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if(avatarFile) { 
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        const response = await api.patch("/users/avatar", fileUploadForm)
        user.avatar = response.data.avatar
      }

      await api.put("/users", user)
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user))

      setData({ user, token: data.token })
      alert("Perfil atualizado com sucesso!")
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      }else {
        alert("Não foi possível atualizar o perfil")
      }
    }
  }

  useEffect(() => { // Buscando o user e o token do local storage e armazenando no estado sempre que o o componente é renderizado

    const user = localStorage.getItem("@rocketnotes:user")
    const token = localStorage.getItem("@rocketnotes:token")

    if (user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`
      setData({ user: JSON.parse(user), token})
    }
  }, [])

  return (
    <AuthContext.Provider value={{
     signIn,
     signOut,
     updateProfile,
     user: data.user
     }}>
      {children}
    </AuthContext.Provider>
  )
}


function useAuth() {
  const context = useContext(AuthContext)

  return context;
}


export { AuthProvider, useAuth }