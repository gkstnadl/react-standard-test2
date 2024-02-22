import axios from "axios";

const postsAxios = axios.create({
    baseURL: "http://localhost:4000/posts",
    timeout: 1500,
});

export default postsAxios;
