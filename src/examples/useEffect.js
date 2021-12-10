import React, {useState, useEffect} from "react";

function App() {
    const [type, setType] = useState('users')
    const [content, setContent] = useState([])
    const [pos, setPos] = useState({x: 0, y: 0})

    useEffect(() => {
        console.log('component did update')
    })

    const mouseMoveHandler = event => setPos({x: event.clientX, y: event.clientY})

    useEffect(() => {
        console.log('component did mount')
        window.addEventListener('mousemove', mouseMoveHandler)
        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setContent(json))
        return () => {
            console.log('component did unmount')
        }
    }, [type])


    return (
        <div className="App">
            <h1>Src: {type}</h1>
            <button onClick={() => setType('users')}>Users</button>
            <button onClick={() => setType('todos')}>Todos</button>
            <button onClick={() => setType('posts')}>Posts</button>

            <pre>{JSON.stringify(pos)}</pre>
            {/*<div>{JSON.stringify(content)}</div>*/}

        </div>
    );
}

export default App;
