import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://blog.coursify.me/wp-json/wp/v2/',
})

export default instance