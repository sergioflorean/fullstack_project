import axios from 'axios'

export const getAllAutors = () => axios.get('http://localhost:8080/api/autor')
