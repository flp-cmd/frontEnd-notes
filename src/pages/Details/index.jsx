import { Container, Links, Content } from "./styles.js";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import { api } from "../../services/api.js"

import { Button } from "../../components/button";

import { Header } from "../../components/header";

import { Section } from "../../components/section";

import {Tag} from "../../components/tag"

import { ButtonText } from "../../components/buttonText/index.jsx";

export function Details() {
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  async function handleDeleteNote(){
    const confirm = window.confirm("Deseja realmente remover a nota?")

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  },[])

  return (
    <Container>
      <Header />
     {
      data &&
      <main>
        <Content>
          <ButtonText
           title="Excluir a nota"
           onClick={handleDeleteNote}
          />

          <h1>{data.title}</h1>

          <p>{data.description}</p>

          {
            data.links && 
            <Section title="Links úteis">
              <Links>
              {
                data.links.map(link => (
                <li key={String(link.id)} >
                  <a href={link.url} target="_blank">
                      {link.url}
                  </a>
                </li>
              ))
              }
              </Links>
          </Section>
          }

          {
            data.tags &&
            <Section title="Marcadores">
              {
                data.tags.map(tag => (
                  <Tag 
                  key={String(tag.id)}
                  title={tag.name}
                  />
                ))
              }
            </Section>
}
          <Button 
            title="Voltar"
            onClick={goBack}
          />
        </Content>
      </main>
      }
    </Container>
  );
}
