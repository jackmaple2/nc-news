import { useState, useEffect } from 'react'

import { getUsers } from '../../utils/axios'

function User() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {

        setLoading(true)
        setError(false)

        getUsers()
        .then((data) => {
            setUsers(data)
            setLoading(false)
        })

    }, [])

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className='userList-div'>
            {users.map((user) => {
                return <div key={user.username} className='userProfile-div' >
                            <h2>{user.username}</h2>
                            <p>{user.name}</p>
                            <img src={user.avatar_url} />
                    </div>
            })}
        </div>
    )

}

export default User