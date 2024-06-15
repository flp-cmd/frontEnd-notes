import axios from "axios"


export const api = axios.create({
  baseURL: 'https://api-notes-t1mj.onrender.com/'
})