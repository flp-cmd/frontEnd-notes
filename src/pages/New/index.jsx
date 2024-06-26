import { useState } from "react"

import { FiArrowLeft } from "react-icons/fi"

import { api } from "../../services/api.js"

import { useNavigate } from "react-router-dom"

import { Header } from "../../components/header"

import { Input } from "../../components/input"

import { Textarea } from "../../components/Textarea"

import { NoteItem } from "../../components/NoteItem"

import { Section } from "../../components/section"

import { Button } from "../../components/button"

import { ButtonText } from "../../components/buttonText"

import { Container, Form } from "./styles.js"

export function New() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }
    
  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleDeleteLink(deleted){
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleDeleteTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote(){
    if (!title) {
      return alert("Digite um título da nota!")
    }

    if (!description) {
      return alert("Digite uma descrição da nota!")
    }

    if (links.length === 0) {
      return alert("Digite pelo menos um link!")
    }

    if (tags.length === 0) {
      return alert ("Digite pelo menos uma tag!")
    }

    if (newLink) {
      return alert("Você digitou um novo link mas não adicionou!")
    }

    if (newTag) {
      return alert("Você digitou uma nova taga mas não adicionou!")
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links
    })

    alert("Nova nota criada com sucesso!")
    navigate(-1)
  }

  return (
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <button onClick={() => navigate("/")}>
            <FiArrowLeft/>
            Voltar
            </button>
          </header>

          <Input
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}
          /> 
          <Textarea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {
              links.map((link, index) => (
                <NoteItem 
                  key = { String(index) }
                  value = { link }
                  onClick = { () => handleDeleteLink(link) } // Função com parâmetro tem que ser com arrow function
                />
              ))
            }
            <NoteItem 
              isnew="true"
              placeholder="Novo link"
              value={newLink}
              onChange = {e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores" >
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem
                  key={ String(index) }
                  value={ tag }
                  onClick={ () => handleDeleteTag(tag) }
                />
                ))
              }
            <NoteItem
              isnew="true"
              placeholder="Nova tag"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
            </div>
          </Section>
          <Button
            title="Salvar"
            onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  )
}