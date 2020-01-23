import axios from 'axios';

const httpInstance=axios.create({
    baseURL:'https://rickandmortyapi.com/api/'
})

export default httpInstance;