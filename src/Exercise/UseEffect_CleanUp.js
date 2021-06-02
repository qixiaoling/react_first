import React, {useState, useEffect} from 'react'

function UseEffect_CleanUp() {
    const [size, setSize] = useState(window.innerWidth)

    function checkSize() {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        console.log('starting useEffect')
        window.addEventListener('resize', checkSize)
        return ()=>{
            window.removeEventListener('resize', checkSize)
            console.log('clean up')
        }

    })
    return (
        <div>
            <h1>Windows</h1>
            <h2>{size}PX</h2>
        </div>
    )

}

export default UseEffect_CleanUp