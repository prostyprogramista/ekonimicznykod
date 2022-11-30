import axios from 'axios';

export async function getComments(articleHook) {
    return axios.get(`http://localhost:8080/chat/articles/${articleHook}/comments`).then(response => response.data)
}