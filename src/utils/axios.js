import axios from 'axios';

const api = axios.create({baseURL: 'https://jacks-api.onrender.com'})

export function getArticles() {
    return api.get('/api/articles')
    .then((response) => {
        return response.data.articles
    })
}

export function getArticleById(article_id) {
    return api.get(`/api/articles/${article_id}`)
    .then((response) => {
        return response.data.article
    })
}

export function getCommentsById(article_id) {
    return api.get(`/api/articles/${article_id}/comments`)
    .then((response) => {
        return response.data.comments
    })
}

export async function updateVote(article_id, inc_votes) {
    return api.patch(`/api/articles/${article_id}`, 
    {inc_votes: inc_votes === 'voteUp' ? 1 : -1})
    .then((response) => {
        return response.data.article.votes
    })
    .catch((error) => {
        console.log(error)
    })
} 

export function postCommentsById(article_id, comment, username) {
    return api.post(`/api/articles/${article_id}/comments`, comment)
    .then((response) => {
        return response.data.comment
    })
}

export function getUsers() {
    return api.get('/api/users')
    .then((response) => {
        return response.data.users
    })
    .catch((error) => {
    })
}

export function logIn(username) {
    return api.get(`/api/users/${username}`)
}