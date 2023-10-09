import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { getCommentsById } from "../../../../utils/axios"
import AddComment from './AddComment';
import { UserContext } from '../../../UserPage/UserContext';
import { deleteCommentsById } from '../../../../utils/axios'

function CommentList() {

    const [comments, setComments] = useState([])
    const {username, setUsername} = useContext(UserContext)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [deletedComments, setDeletedComments] = useState([])


    const {article_id, comment_id} = useParams()

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
    
    function handleDeleteComment(comment_id) {

        deleteCommentsById(comment_id)
        .then(() => {
            setDeletedComments([...deletedComments, comment_id]);
            console.log('Your comment has been deleted');
        })
        .catch((error) => {
            console.error('Error deleting comment:', error);
          });
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
        return (
          // Conditionally render the comment if it's not in the list of deleted comments
          !comment.isDeleted && (
            <div key={comment.comment_id} className='commentsCard-div'>
              <p>{comment.body}</p>
              <p>By {comment.author}</p>
              <p>Commented {comment.created_at}</p>
              <p>Votes: {comment.votes}</p>
              <button onClick={() => handleDeleteComment(comment.comment_id)}>
                Delete Comment
              </button>
              <br />
              <br />
            </div>
          )
        );
      })}
        </div>
    )
}

export default CommentList