import React, {useState, useEffect} from 'react'
import axios from "axios";

function FetchData_GitHub_users() {
    const [users, setUsers] = useState([])

    async function FetchData() {
        try {
            const result = await axios.get("https://api.github.com/users")
            setUsers(result)
        } catch (error) {
            console.log("error")
        }
    }

    useEffect(() => {
        FetchData();
    }, [])
    return (
        <>
            <h3>github users</h3>
            <ul>
                {users.map((user) => {
                    const {id, login, avatar_url, html_url} = user;
                    return (
                        <li key={id}>
                            <img src={avatar_url} alt={login}/>
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url}>profile</a>
                            </div>

                        </li>
                    )
                })}
                    </ul>
                    </>
                    )
                }

                    export default FetchData_GitHub_users