import axios from 'axios'

const api = axios.create({
   // api address here
   baseURL: "",
   headers: {
      "Content-type": "application/json"
   }
})

export {
   api
}