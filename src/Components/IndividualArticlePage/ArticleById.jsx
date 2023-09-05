import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../../utils/axios';

function IndividualArticleById() {

    const [article, setArticle] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const {article_id} = useParams()

    useEffect(() => {

        setLoading(true)
        setError(false)

        getArticleById(article_id)
        .then((data) => {
            setArticle(data)
            setLoading(false)
        })

    }, [article_id])

    return (
        <div className="articleById-div">
            <h2>{article.title}</h2>
            <img src={article.article_img_url} />
            <h3>Topic: {article.topic}</h3>
            <h3>by {article.author}</h3>
            <p>{article.body}</p>
            <p>written {article.created_at}</p>

        </div>
    )
}

export default IndividualArticleById