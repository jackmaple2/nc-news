import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { getCommentsById } from "../../../../utils/axios"
import AddComment from './AddComment';
import { UserContext } from '../../../UserPage/UserContext';


function CommentList() {

    const [comments, setComments] = useState([])
    const {username, setUsername} = useContext(UserContext)
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

    function updateComments(additionalComment) {
        setComments((currentComments) => {
            return [additionalComment, ...currentComments]
        })
    }
    

    return (
        <div className='commentsById-div'>
            <AddComment 
                updateComments={(comment) => {
                    updateComments(comment)
                }}
                id={article_id}
                username={username} />
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