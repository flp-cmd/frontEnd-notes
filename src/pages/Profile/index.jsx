import { useState } from 'react'
import { Container, Form, Avatar } from "./styles";
import { useAuth } from "../../hooks/auth.jsx"
import { api } from "../../services/api.js"
import { useNavigate } from 'react-router-dom';

import { Input } from "../../components/input"

import { Button } from "../../components/button"

import { ButtonText } from '../../components/buttonText';

import avatarPlaceholder from "../../assets/blank-profile-picture.webp"

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"

export function Profile() {
  const { user, updateProfile } = useAuth()
  const navigate = useNavigate()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld] = useState("")
  const [passwordNew, setPasswordNew] = useState("")

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdateProfile(){
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(e){
    const file = e.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  function goBack() {
    navigate(-1)
  }

  return (
    <Container>
      <header>
        <button type='button' onClick={goBack} >
          <FiArrowLeft/>
        </button>
      </header>

      <Form>
        <Avatar>
          <img 
            src={avatar}
            alt="Foto do usuário"
          />

          <label htmlFor="avatar">

          <FiCamera/>

          <input
            id="avatar"
            type="file"
            onChange={handleChangeAvatar}
          />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdateProfile} />
      </Form>
    </Container>
  )
}