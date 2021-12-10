import React, {useState, useMemo, useEffect} from "react";

function complexCompute(number) {
    let i = 0
    while (i < 900000000) i++
    while (i < 900000000) i++
    return number * 2
}

function App() {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    const styles = useMemo(() => {
        return {color: colored ? 'red' : 'blue'}
    }, [colored])

    const computed = useMemo(() => complexCompute(number), [number])
    // кешируем вычисляемое свойство, если зависимость не изменилась, то не будем вызывать колбек еще раз
    // может помочь при работе с объектами и сложными вычислениями

    useEffect(() => {
        console.log('Styles changed');
    }, [styles])

    return (
        <div className="App">
            <h1 style={styles}>Calc number: {computed}</h1>
            <button className="btn btn-success" onClick={() => setNumber(prev => prev + 1)}>Inc</button>
            <button className="btn btn-success" onClick={() => setNumber(prev => prev - 1)}>Dec</button>
            <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Change</button>
        </div>
    );
}

export default App;
