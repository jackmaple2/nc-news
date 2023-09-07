import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById,
    // updateArticlesById 
} from '../../../utils/axios';
import Votes from './Votes';
import { Link } from 'react-router-dom';


function IndividualArticleById() {

    const [article, setArticle] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [votes, setVotes] = useState(0)

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

    if (loading) {
        return <h1>Loading...</h1>;
    }
    

    return (
        <div className="articleById-div">
            <h2>{article.title}</h2>
            <img id='articleIdImage-id' src={article.article_img_url} />
            <h3>Topic: {article.topic}</h3>
            <h3>by {article.author}</h3>
            <p>{article.body}</p>
            <p>written {article.created_at}</p>
            <br/>
            <Link to={{pathname: `/articles/${article.article_id}/comments`}}>
                <button>View Comments</button>
            </Link>
        </div>
    )

}

export default IndividualArticleById