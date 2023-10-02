import { useState, useEffect } from "react";
import { getTopics } from "../../utils/axios";
import { Link } from 'react-router-dom';


function Topics() {

    const [topics, setTopics] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {

        setLoading(true)
        setError(false)

        getTopics()
        .then((topics) => {
            setTopics(topics)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="topics-div" >
            {topics.map((topic) => {
                return <div className="topicCard-div" key={topic.slug} >
                            <Link to={{pathname: `/topics/${topic.slug}`}} >
                                <h3>{topic.slug}</h3>
                            </Link>
                                <p>{topic.description}</p>
                    </div>
            })}
        </div>
    )
}

export default Topics