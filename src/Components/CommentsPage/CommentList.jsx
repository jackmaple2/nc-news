import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


import { getCommentsById } from "../../utils/axios"


function CommentList() {

    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const {article_id} = useParams()

    useEffect(() => {

        setLoading(true)
        setError(false)

        getCommentsById(article_id)
        .then((data) => {
            setComments(data)
            setLoading(false)
        })

    }, [article_id])

    if (loading) {
        return <h1>Loading...</h1>;
    }
    

    return (
        <div className='commentsById-div'>
            {comments.map((comment) => {
                return <div key={comment.comment_id} className='commentsCard-div'>
                    <p>{comment.body}</p>
                    <p>By {comment.author}</p>
                    <p>Commented {comment.created_at}</p>
                    <p>Votes: {comment.votes}</p>
                    <br/>
                </div>
            })}
        </div>
    )


}

export default CommentList