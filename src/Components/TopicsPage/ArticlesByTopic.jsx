import { useState } from 'react';
import { useEffect } from 'react';
import { getArticles } from '../../utils/axios';
import { Link, useSearchParams, useParams } from 'react-router-dom';


function ArticlesByTopic() {

    const [articleByTopicList, setArticleByTopicList] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [searchParams, setSearchParams] = useSearchParams()

    const {topic} = useParams()

    useEffect(() => {

        setLoading(true)
        setError(false)

        getArticles(topic)
        .then((data) => {
            console.log(data)
            data.map((item, index) => {
                console.log(item)
            })
            articleByTopicList(data)
            setLoading(false)
        })
    }, [topic, searchParams])

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

export default ArticlesByTopic