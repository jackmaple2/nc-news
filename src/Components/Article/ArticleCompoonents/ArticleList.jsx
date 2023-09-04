import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';


function ArticleList() {

    
    const [articleList, setArticleList] = useState([])
    const [loading, setLoading] = useState()
    const [error, setError] = useState()


    useEffect(() => {

        setLoading(true)
        setError(false)

        axios.get('https://jacks-api.onrender.com/api/articles')
        .then(({data}) => {
            setArticleList(data.articles)
        })
    }, [])

    return (
        <div className='articleList-div'>
            {articleList.map((item) => {
                return <div key={item.title} className='itemCard' >
                    <h2>{item.title}</h2>
                </div>
            })}
        </div>
    )

}

export default ArticleList