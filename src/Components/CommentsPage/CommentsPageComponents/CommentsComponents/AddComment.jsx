import { useContext, useState } from 'react';
import { postCommentsById } from '../../../../utils/axios';
import { UserContext } from '../../../UserPage/UserContext';
import { useParams } from 'react-router-dom';

function AddComment({ updateComments }) {

    const [showCommentInput, setShowCommentInput] = useState(false)
    const [newComment, setNewComment] = useState([])
    const {username, setUsername} = useContext(UserContext)

    const {article_id} = useParams()

    function handleAddCommentClick() {
        setShowCommentInput(true)
    }

    function handleCommentSubmit(event) {
        event.preventDefault()

        const commentData = {body: newComment, username}
        
        postCommentsById(article_id, commentData)
        .then((comment) => {
            console.log(comment)
            updateComments(comment)
            setNewComment('')
        })
        .catch((error)=> {
            console.log(error)
        })
    }

    return (
        <div>
            {showCommentInput ? (
                <div>
                    <form className='commentForm' onSubmit={handleCommentSubmit}>
                        <textarea value={newComment} onChange={(event) => setNewComment(event.target.value)}  placeholder='Enter your comment here...' ></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            ) : (
                <button onClick={() => handleAddCommentClick()} >Add Comment</button>
            )}
        </div>
    )
}

export default AddComment