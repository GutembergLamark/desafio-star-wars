import axios from "axios"

const apijwt = axios.create({
    baseURL: "https://desafio-star-wars-api.herokuapp.com",
    timeout: 5000
})

export default apijwt