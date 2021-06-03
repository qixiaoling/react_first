import React, {useState} from 'react'
import {Link, useHistory} from "react-router-dom";

function Navbar() {

    const [searchText, setSearchText] = useState('')
    const history = useHistory();

    function handleOnChange(e) {
        setSearchText(e.target.value)
    }

    function search() {
        history.push(`/images/${searchText}`)
    }

    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/images/cats'>Cats</Link>
                </li>
                <li>
                    <input
                        type='text'
                        value={searchText}
                        placeholder='what do you want to see today?'
                        onChange={handleOnChange}
                    />
                    <button onClick={search}>Search Your Image</button>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar