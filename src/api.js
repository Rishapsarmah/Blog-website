import axios from "axios"

const api = axios.create({
	baseURL: "http://localhost:1337/api/blog-posts?populate=*", // Replace with your Strapi URL
})

export default api
