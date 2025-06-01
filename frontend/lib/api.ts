import axios from 'axios'
import { API_URL } from './constants'

export async function uploadFile(file: File) {
  const formData = new FormData()
  formData.append('file', file)
  const response = await axios.post(`${API_URL}/upload`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  return response.data
}

export async function queryPapers(query: string) {
  const response = await axios.post(`${API_URL}/query`, { query })
  return response.data
}