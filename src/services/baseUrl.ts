import axios from 'axios'

export function getBaseUrl() {
  return axios.create({
    baseURL: `http://localhost:8000/itunes/`,
  })
}
