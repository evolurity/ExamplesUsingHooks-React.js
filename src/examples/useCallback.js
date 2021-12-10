import './App.css';
import React, {useState, useCallback} from "react";
import ItemsList from "./itemsList";


function App() {
    const [colored, setColored] = useState(false)
    const [count, setCount] = useState(1)

    const styles = {color: colored ? 'red' : 'blue'}

    const generateItemsFromAPI = useCallback(() => {
        return new Array(count).fill('').map((_, i) => `Element ${i + 1}`)
    }, [count])
    // кешируем функцию по аналогии с useMemo, она не будет создаваться и вызываться лишний раз, только тогда
    // когда изменится необходимое зависимое значение


    return (
        <div className="App">
            <h1 style={styles}>Count elements: {count}</h1>
            <button className="btn btn-success" onClick={() => setCount(prev => prev + 1)}>Add</button>
            <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Change</button>
            <ItemsList getItems={generateItemsFromAPI}></ItemsList>
        </div>
    );
}

export default App;
