import { useState } from 'react';
import { useEffect } from 'react';
import { getArticles } from '../../../utils/axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function ArticleList() {

    
    const [articleList, setArticleList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    const navigate = useNavigate()

    function clickArticle(article_id) {
        axios.get
    }

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
                        <img src={item.article_img_url} />
                        <p>{item.author}</p>
                        <p>{item.topic}</p>
                        <p>{item.votes}</p>
                        
                </div>
            })}
        </div>
    )

}

export default ArticleList