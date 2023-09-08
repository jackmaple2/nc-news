import {useState} from 'react'
import { updateVote } from '../../../utils/axios'
import {useParams} from 'react-router-dom'

function Votes({passedVote}) {
    const {article_id} = useParams()
    const [votes, setVotes] = useState(passedVote)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    function handleVote(typeOfVote) {
        setLoading(true)
        setError(false)
        
        setVotes((currentCount) => {
            'voteUp' ? (currentCount + 1) : (currentCount - 1)
        })

        updateVote(article_id, typeOfVote) 
            .then((updatedVotes) => {
                setVotes(updatedVotes)
                setLoading(false)
            })
            .catch((error) => {
                setError(true)
                setLoading(false)
            })
    }

    if (loading) {
        return <p>Loading Votes</p>
    }

    if (error) {
        return <p>Something went wrong</p>
    }

    return (
        <div>
            <p>Votes: {votes}</p>
            <button onClick={() => handleVote('voteUp')}>Vote Up</button>
            <button onClick={() => handleVote('voteDown')}>Vote Down</button>
        </div>
    )
}

export default Votes