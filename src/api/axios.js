import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://test-hms.herokuapp.com/api'
    // baseURL: 'https://reqres.in/'
})