import React, {useState} from "react";

function calcInitState() {
    console.log('calc')
    return Math.trunc(Math.random() * 100)
}

function App() {
    const [count, setCount] = useState(() => calcInitState())
    // useState нельзя создать в if
    // если нужно основываться на предыдущем состоянии - то лучше передавать callback в setState

    const [state, setState] = useState({
        title: 'Counter',
        date: Date.now()
    })

    const inc = () => {
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
    }
    const dec = () => setCount(prev => prev - 1)

    return (
        <div className="App">
            <h1>Counter: {count}</h1>
            <button className="btn btn-success" onClick={inc}>Add</button>
            <button className="btn btn-danger" onClick={dec}>Delete</button>
            <button className="btn btn-primary" onClick={() => setState(prev => {
                return {...prev, title: prev.title + '1'}
            })}>Edit
            </button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
}

export default App;
