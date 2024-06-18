import { FiPlus, FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react"
import { api } from "../../services/api.js"
import { useNavigate } from "react-router-dom";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles.js";

import { Header } from "../../components/header/index.jsx";

import { Input } from "../../components/input/index.jsx";

import { ButtonText } from "../../components/buttonText";

import { Section } from "../../components/section";

import { Note } from "../../components/note";
 
export function Home() {
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [search, setSearch] = useState("")
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  function handleTagsSelected(tagName){
    const alreadySelected = tagsSelected.includes(tagName)

    if(alreadySelected){
      setTagsSelected(tagsSelected.filter(tag => tag != tagName))
    } else {
        setTagsSelected(prevState => [...prevState, tagName])
    }
  }

  function handleAllTagsSelected(){
    setTagsSelected([])
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }


  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags")
      setTags(response.data)
    }

    fetchTags()
  },[])

  useEffect(() => {

    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
      setNotes(response.data)
    }
  
    fetchNotes()
  },[tagsSelected, search])

  return (
    <Container>
      <Brand>
        <h1>Tag Notes</h1>
      </Brand>

      <Header />

      <Menu>
        <ButtonText
          title="Todos"
          isActive={tagsSelected.length === 0}
          onClick={handleAllTagsSelected}
        />
        {
          tags && tags.map(tag => (
            <ButtonText
              key={ String(tag.id) }
              title={tag.name}
              isActive={tagsSelected.includes(tag.name)}
              onClick = { () => handleTagsSelected(tag.name) }
            />
          ))
        }
      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar pelos títulos"
          icon={FiSearch}
          onChange={ (e) => setSearch(e.target.value) }
        />
      </Search>

      {<Content>
        <Section title="Minhas notas">
          {
            notes.map((note) => (
              <Note
                key={String(note.id)}
                data={note}
                onClick={ () => handleDetails(note.id)}
              />
          ))
          }
        </Section>
      </Content>
      }

      <NewNote to="/new" >
        <FiPlus/>
          Criar Nota
      </NewNote>
    </Container>
  );
}
