import axios from 'axios';

const api = axios.create({baseURL: 'https://jacks-api.onrender.com'})

export async function getArticles() {
    return api.get('/api/articles')
    .then((response) => {
        return response.data.articles
    })
    .catch((error) => {

    })
}

export async function getArticleById(article_id) {
    return api.get(`/api/articles/${article_id}`)
    .then((response) => {
        return response.data.article
    })
    .catch((error) => {

    })
}