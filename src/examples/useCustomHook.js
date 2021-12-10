import './App.css';
import React, {useState, useEffect} from "react";

function useLogger(value) {
    useEffect(() => {
        console.log('Value changed: ', value)
    }, [value])
}

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const clear = () => setValue('')

    return {
        bind: {
            value,
            onChange
        },
        value,
        clear
    }
}

function App() {
    const name = useInput('')
    const lastName = useInput('')

    useLogger(name.value)

    return (
        <div className="container pt-3">
            <input type="text" {...name.bind}/>
            <input type="text" {...lastName.bind}/>
            <h1>{name.value} {lastName.value}</h1>
            <button className="btn btn-warning" onClick={() => {
                name.clear();
                lastName.clear();
            }}>Delete all
            </button>
        </div>
    );
}

export default App;
