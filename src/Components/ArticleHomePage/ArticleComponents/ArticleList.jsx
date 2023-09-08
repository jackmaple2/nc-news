import { useState } from 'react';
import { useEffect } from 'react';
import { getArticles } from '../../../utils/axios';
import { Link } from 'react-router-dom';


function ArticleList({search}) {

    
    const [articleList, setArticleList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()   

    useEffect(() => {

        setLoading(true)
        setError(false)

        getArticles()
        .then((data) => {
            setArticleList(data)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <h1>Loading...</h1>;
    }
        
    return (
        <div className='articleList-div'>
            {articleList.map((item) => {
                return <div key={item.title} className='itemCard' >
                    <Link to={{pathname: `/articles/${item.article_id}`}} >
                        <h2>{item.title}</h2>
                    </Link>
                        <img id='articleImage-id' src={item.article_img_url} />
                        <p>by {item.author}</p>
                        <p>Topic: {item.topic}</p>
                </div>
            })}
        </div>
    )
}

export default ArticleList